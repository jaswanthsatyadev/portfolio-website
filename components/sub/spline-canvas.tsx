"use client";

import React, { useEffect, useRef, useState } from "react";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;

    let app: any = null;
    let isCancelled = false;

    // Timeout safety net (10s max before gracefully proceeding)
    const timeoutId = setTimeout(() => {
      if (!isCancelled) {
        setIsLoaded((prev) => {
          if (!prev && onLoad) onLoad();
          return true;
        });
      }
    }, 10000);

    // Dynamically import @splinetool/runtime so it never blocks initial page hydration
    const initSpline = async () => {
      try {
        const { Application } = await import("@splinetool/runtime");
        if (isCancelled || !canvasRef.current) return;

        app = new Application(canvasRef.current);
        await app.load(scene);

        if (!isCancelled) {
          clearTimeout(timeoutId);
          setIsLoaded(true);
          if (onLoad) onLoad();
        }
      } catch (err) {
        console.warn("Spline 3D load warning (using fallback):", err);
        if (!isCancelled) {
          clearTimeout(timeoutId);
          setIsLoaded(true);
          if (onError) onError();
        }
      }
    };

    initSpline();

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
      if (app) {
        try {
          app.dispose();
        } catch {
          // ignore cleanup error
        }
      }
    };
  }, [isMounted, scene, onLoad, onError]);



  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}
