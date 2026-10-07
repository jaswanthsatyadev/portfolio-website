"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id="about-me"
      className="flex flex-col items-center justify-center gap-4 py-12 sm:py-16 md:py-20 px-4 sm:px-6 z-20"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 py-4 text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 max-w-6xl w-full mt-4">
        {/* Left Side: Photo with Futuristic Glowing Border */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          className="relative w-[260px] h-[380px] sm:w-[320px] sm:h-[480px] md:w-[360px] md:h-[580px] lg:w-[400px] lg:h-[650px] flex-shrink-0"
        >
          <div className="w-full h-full relative p-[2px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 blur-sm opacity-70" />
            <div className="h-full w-full relative rounded-2xl bg-gray-950/90 border border-purple-500/30 overflow-hidden p-2 shadow-2xl">
              <Image
                src="/satyadev.jpg"
                alt="Satya Dev"
                fill
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 360px, 400px"
                style={{ objectFit: "contain" }}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Bio */}
        <motion.div
          variants={slideInFromRight(0.3)}
          className="flex flex-col justify-center gap-4 sm:gap-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl text-center md:text-left leading-relaxed"
        >
          <p className="bg-purple-950/20 border border-purple-500/20 p-4 sm:p-5 rounded-2xl backdrop-blur-sm shadow-inner">
            I&apos;m <span className="text-white font-semibold">Satya Dev</span>, a developer and builder based in Hyderabad, India. I specialize in engineering AI-powered solutions, cross-platform apps, and high-performance web systems that drive operational efficiency.
          </p>
          <p className="bg-cyan-950/20 border border-cyan-500/20 p-4 sm:p-5 rounded-2xl backdrop-blur-sm shadow-inner">
            I prioritize practical, high-value execution over complex abstract theory. Whether architecting real-time automation microservices, AI roadmaps, or scalable web platforms, my focus is always on solving real-world challenges with speed and elegance.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
