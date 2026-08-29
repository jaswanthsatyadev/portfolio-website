"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Typewriter } from "../sub/Typewriter";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return isMobile;
};

const HeroContent = dynamic(
  () => import("../sub/hero-content").then((mod) => mod.HeroContent),
  {
    ssr: false,
    loading: () => <LoadingPlaceholder />,
  }
);

const LoadingPlaceholder = () => (
  <div className="w-full h-full flex flex-col justify-center items-center gap-3">
    <div className="w-12 h-12 border-2 border-t-purple-500 border-r-cyan-400 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
    <span className="text-xs font-mono text-cyan-400/70 tracking-widest uppercase">Loading 3D Interface...</span>
  </div>
);

const HeroText = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    className="h-full w-full flex flex-col gap-4 sm:gap-5 justify-center m-auto text-center lg:text-start"
  >
    <motion.div variants={slideInFromTop}>
      <div className="Welcome-box py-[6px] px-[12px] border border-[#7042f88b] opacity-[0.95] mx-auto lg:mx-0">
        <SparklesIcon className="text-[#b49bff] mr-[8px] h-4 w-4 sm:h-5 sm:w-5 inline" />
        <h1 className="Welcome-text text-[12px] sm:text-[13px] font-medium tracking-wide">
          Fullstack Developer & AI Engineer
        </h1>
      </div>
    </motion.div>

    <motion.div
      variants={slideInFromLeft(0.4)}
      className="flex flex-col gap-2 mt-2 sm:mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold text-white max-w-[650px] w-auto leading-tight"
    >
      <span>
        Hi, I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
          Satya Dev
        </span>
      </span>
    </motion.div>

    <motion.div variants={slideInFromLeft(0.6)}>
      <Typewriter />
    </motion.div>

    <motion.div variants={slideInFromLeft(0.8)} className="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
      <a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector('#projects');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        className="py-2.5 px-6 button-primary text-center text-white text-sm sm:text-base font-medium cursor-pointer rounded-xl transition-all shadow-lg hover:shadow-purple-500/25"
      >
        Explore Projects ✨
      </a>
      <a
        href="#about-me"
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector('#about-me');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        className="py-2.5 px-6 border border-cyan-500/30 hover:border-cyan-400/60 bg-cyan-950/20 hover:bg-cyan-900/30 text-center text-cyan-300 text-sm sm:text-base font-medium cursor-pointer rounded-xl transition-all"
      >
        About Me
      </a>
    </motion.div>
  </motion.div>
);

export const Hero = () => {
  const isMobile = useIsMobile();
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <section className="relative flex flex-col justify-center min-h-[92vh] sm:min-h-screen w-full overflow-hidden" id="home">
      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="rotate-180 absolute top-[-260px] md:top-[-300px] lg:top-[-340px] xl:top-[-370px] left-0 w-full h-full object-cover -z-10 pointer-events-none opacity-80"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      )}

      <div className="relative flex items-center justify-center w-full h-full z-[20] pt-[85px] sm:pt-[100px] md:pt-[110px] pb-8 sm:pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 md:px-10 gap-8 lg:gap-4">
          <div className="w-full lg:w-1/2">
            <HeroText />
          </div>
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[420px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromRight(0.5)}
              className="w-full h-full"
            >
              <HeroContent onLoad={() => setIsSplineLoaded(true)} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
