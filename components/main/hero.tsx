"use client";

import React, { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Typewriter } from "../sub/Typewriter";

// Custom Hook to detect if the user is on a mobile device
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
    loading: () => <LoadingSpinner />,
  }
);

const LoadingSpinner = () => (
  <div className="w-full h-full flex justify-center items-center">
    <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-white"></div>
  </div>
);

// The HeroText component with its slide-in animations
const HeroText = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start"
  >
    <motion.div variants={slideInFromTop}>
      <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Fullstack Developer Portfolio
        </h1>
      </div>
    </motion.div>
    <motion.div
      variants={slideInFromLeft(0.5)}
      className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
    >
      <span>
        Hi, I&apos;m
        <div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Satya - Dev{" "}
          </span>
        </div>
      </span>
    </motion.div>
    <motion.div variants={slideInFromLeft(0.8)}>
      <Typewriter />
    </motion.div>
    <motion.a
      href="#about-me"
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector('#about-me');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
      variants={slideInFromLeft(1)}
      className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto lg:mx-0"
    >
      Learn More!
    </motion.a>
  </motion.div>
);

// The main Hero component
export const Hero = () => {
  const isMobile = useIsMobile();
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <section className="relative flex flex-col min-h-screen w-full overflow-hidden" id="home">
      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="rotate-180 absolute top-[-280px] md:top-[-320px] lg:top-[-350px] xl:top-[-380px] 2xl:top-[-400px] left-0 w-full h-full object-cover -z-10"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      )}

      <div className="relative flex items-center justify-center w-full h-full z-[20] pt-[100px] sm:pt-[120px] md:pt-[100px] lg:pt-[80px]">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="w-full lg:w-1/2">
            <HeroText />
          </div>
          <div className="w-full lg:w-1/2 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] mt-6 lg:mt-0">
            {/* **THE FIX:** The animation is now directly controlled by the loading state */}
            {!isSplineLoaded && <LoadingSpinner />}
            <motion.div
              initial="hidden"
              animate={isSplineLoaded ? "visible" : "hidden"}
              variants={slideInFromRight(0.8)}
              className="w-full h-full"
              style={{ display: isSplineLoaded ? 'block' : 'none' }}
            >
              <HeroContent onLoad={() => setIsSplineLoaded(true)} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
