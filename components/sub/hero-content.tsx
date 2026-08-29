"use client";

import SplineCanvas from "./spline-canvas";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const HeroContent = ({ onLoad }: { onLoad?: () => void }) => {
  const [hasError, setHasError] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Fallback timeout so slow networks never hang
    const timeout = setTimeout(() => {
      setIsReady(true);
      if (onLoad) onLoad();
    }, 2500);

    return () => clearTimeout(timeout);
  }, [onLoad]);

  const handleLoaded = () => {
    setIsReady(true);
    if (onLoad) onLoad();
  };

  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
      {/* Holographic Glowing Cyber Orb Placeholder */}
      {!isReady && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 animate-pulse">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-cyan-500/30 bg-radial-gradient flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t border-purple-500/50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-2 rounded-full border-b border-cyan-400/50"
            />
            <div className="text-4xl sm:text-5xl select-none filter drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
              🤖
            </div>
          </div>
          <span className="mt-4 text-xs font-mono uppercase tracking-widest text-cyan-400/80">
            Hologram Synchronizing...
          </span>
        </div>
      )}

      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="text-6xl drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">🤖</div>
          <p className="mt-3 text-xs font-mono text-purple-300/80">Interactive 3D Assistant</p>
        </div>
      ) : (
        <div className={`absolute top-0 left-0 w-full h-[110%] transition-opacity duration-700 ${isReady ? "opacity-100" : "opacity-0"}`}>
          <SplineCanvas
            scene="https://prod.spline.design/bBhlEoaOEcVn6tGT/scene.splinecode"
            onLoad={handleLoaded}
            onError={() => {
              setHasError(true);
              setIsReady(true);
              if (onLoad) onLoad();
            }}
          />
        </div>
      )}
    </div>
  );
};
