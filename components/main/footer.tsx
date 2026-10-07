"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SplineCanvas from "@/components/sub/spline-canvas";
import { motion, AnimatePresence } from "framer-motion";

const myLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jaswanth-satya-dev/" },
  { name: "GitHub", url: "https://github.com/jaswanthsatyadev" },
  { name: "Twitter / X", url: "https://x.com/jaswanthsatydev" },
  { name: "Instagram", url: "https://www.instagram.com/jaswanthsatyadev/" },
];

export const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [shouldMountUfo, setShouldMountUfo] = useState(false);
  const [isUfoLoaded, setIsUfoLoaded] = useState(false);
  const [hasUfoError, setHasUfoError] = useState(false);

  useEffect(() => {
    const desktop = window.innerWidth >= 768;
    setIsDesktop(desktop);

    if (desktop) {
      // Start preloading the 3D UFO in background 800ms after main page hydration
      // so by the time user scrolls down, the UFO is ALREADY loaded in memory!
      const timer = setTimeout(() => {
        setShouldMountUfo(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-6 md:p-10 relative mt-32 sm:mt-48 md:mt-64 z-30">
      {/* 3D UFO & Loading State: Preloaded in background on desktop */}
      {isDesktop && shouldMountUfo && (
        <>
          {/* Futuristic Loading Beacon while 3D UFO downloads in background */}
          <AnimatePresence>
            {!isUfoLoaded && !hasUfoError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="w-full absolute -top-[120px] sm:-top-[160px] md:-top-[200px] left-0 z-10 flex flex-col items-center justify-center pointer-events-none"
              >
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.08, 1] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed border-cyan-400/40"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-t-purple-500 border-r-cyan-400 border-b-transparent border-l-transparent absolute"
                  />
                  <div className="absolute text-2xl sm:text-3xl select-none filter drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]">
                    🛸
                  </div>
                </div>
                <span className="mt-3 text-xs font-mono tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
                  Transmitting Signal... Please wait
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3D UFO Canvas */}
          {!hasUfoError && (
            <div
              className={`w-full absolute -top-[250px] sm:-top-[350px] md:-top-[450px] left-0 z-10 h-[500px] sm:h-[650px] md:h-[800px] overflow-hidden pointer-events-auto transition-opacity duration-700 ${
                isUfoLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-[110%]">
                <SplineCanvas
                  scene="https://prod.spline.design/w-6vM6wIAfHOZuLN/scene.splinecode"
                  onLoad={() => setIsUfoLoaded(true)}
                  onError={() => {
                    setHasUfoError(true);
                    setIsUfoLoaded(true);
                  }}
                />
              </div>
            </div>
          )}

          {/* Fallback Animated Hologram Saucer if WebGL / Spline CDN is blocked */}
          {hasUfoError && (
            <div className="w-full absolute -top-[140px] sm:-top-[180px] left-0 z-10 flex flex-col items-center justify-center pointer-events-none">
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="text-5xl sm:text-6xl filter drop-shadow-[0_0_30px_rgba(6,182,212,0.7)]"
              >
                🛸
              </motion.div>
            </div>
          )}
        </>
      )}

      {/* Footer Content */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col items-center justify-center m-auto px-4 sm:px-6">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-around flex-wrap gap-8 md:gap-0 border-t border-purple-900/30 pt-10">
          <div className="min-w-[180px] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-lg mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Satya Dev
            </h3>
            <p className="text-sm text-gray-400">Hyderabad, India</p>
            <p className="text-xs text-gray-500 mt-1">Building AI & Web systems</p>
          </div>

          <div className="min-w-[180px] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-lg mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              {myLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-gray-300 hover:text-cyan-300 transition-colors"
                >
                  {link.name} ↗
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-[180px] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-lg mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Support
            </h3>
            <Link
              href="https://razorpay.me/@jaswanthsatyadev"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-gray-300 hover:text-purple-300 transition-colors inline-flex items-center gap-1.5"
            >
              ☕ Buy me a coffee
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 mb-2 text-xs text-center text-gray-500 font-mono">
          &copy; {new Date().getFullYear()} Satya Dev. Designed for high performance & innovation.
        </div>
      </div>
    </footer>
  );
};
