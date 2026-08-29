"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SplineCanvas from "@/components/sub/spline-canvas";
import { useInView } from "react-intersection-observer";

const myLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jaswanth-satya-dev/" },
  { name: "GitHub", url: "https://github.com/jaswanthsatyadev" },
];

export const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "300px",
  });
  
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);
  
  return (
    <footer
      ref={ref}
      className="w-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-6 md:p-10 relative mt-32 sm:mt-48 md:mt-64 z-30"
    >
      {/* 3D UFO: Loaded only when scrolled near footer on desktop */}
      {isDesktop && inView && (
        <div className="w-full absolute -top-[250px] sm:-top-[350px] md:-top-[450px] left-0 z-10 h-[500px] sm:h-[650px] md:h-[800px] overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[110%]">
            <SplineCanvas scene="https://prod.spline.design/w-6vM6wIAfHOZuLN/scene.splinecode" />
          </div>
        </div>
      )}

      <div className="relative z-20 w-full max-w-7xl flex flex-col items-center justify-center m-auto px-4 sm:px-6">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-around flex-wrap gap-8 md:gap-0 border-t border-purple-900/30 pt-10">
          
          <div className="min-w-[180px] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-lg mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Satya Dev
            </h3>
            <p className="text-sm text-gray-400">
              Hyderabad, India
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Building AI & Web systems
            </p>
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
