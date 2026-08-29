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

  // Global cursor tracking bridge so UFO tracks mouse across the entire window
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleGlobalPointerMove = (e: PointerEvent) => {
      // Forward pointer events to canvas if pointer is elsewhere in the window
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target !== canvas) {
        const syntheticEvent = new PointerEvent("pointermove", {
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY,
          bubbles: true,
          cancelable: true,
        });
        canvas.dispatchEvent(syntheticEvent);
      }
    };

    window.addEventListener("pointermove", handleGlobalPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleGlobalPointerMove);
    };
  }, []);

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
