"use client";

import React, { useEffect, useRef, useState } from "react";
import { Application } from "@splinetool/runtime";

interface SplineCanvasProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default function SplineCanvas({
  scene,
  className = "w-full h-full",
  onLoad,
  onError,
}: SplineCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    let app: Application | null = null;
    let isCancelled = false;

    try {
      app = new Application(canvasRef.current);
      app
        .load(scene)
        .then(() => {
          if (!isCancelled) {
            setIsLoaded(true);
            if (onLoad) onLoad();
          }
        })
        .catch((err) => {
          console.error("Error loading Spline scene:", err);
          if (!isCancelled) {
            if (onError) onError();
          }
        });
    } catch (err) {
      console.error("Failed to initialize Spline application:", err);
      if (onError) onError();
    }

    return () => {
      isCancelled = true;
      if (app) {
        try {
          app.dispose();
        } catch {
          // ignore dispose error on unmount
        }
      }
    };
  }, [scene, onLoad, onError]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease" }}
      />
    </div>
  );
}
