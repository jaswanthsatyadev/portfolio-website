"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      id="about-me"
      className="flex flex-col items-center justify-center gap-3 py-12 sm:py-16 md:py-24" // Adjusted padding and gap
    >
      <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-8 md:py-10">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-10 px-4 sm:px-6 md:px-10">
        {/* Left Side: Image with Neon Border */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="relative w-[250px] h-[400px] sm:w-[280px] sm:h-[500px] md:w-[350px] md:h-[650px] lg:w-[400px] lg:h-[700px]" // Increased height
        >
          <div className="w-full h-full relative p-[2px]">
            <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_90deg_at_50%_50%,#ec4899_0%,#8b5cf6_33%,#3b82f6_66%,#ec4899_100%)] animate-spin-slow" />
            <div className="h-full w-full relative rounded-2xl bg-gray-900/80 p-2">
              <Image
                src="/satyadev.jpg"
                alt="Satya Dev"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Bio and Hobbies */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col justify-center gap-4 sm:gap-6 text-base sm:text-lg text-gray-300 max-w-lg text-center md:text-left px-2 sm:px-0" // Centered text vertically
        >
          <p>
            I&apos;m Satya Dev, a 20-year-old developer and aspiring entrepreneur from Hyderabad, India. I love building AI-powered solutions that drive efficiency. For me, it&apos;s about finding smarter ways to get things done—optimizing workflows and saving time.
          </p>
          <p>
            I prioritize practical, high-value results over complex theory. Whether I&apos;m working on automation tools or scalable web apps, my focus is on execution and solving real problems. I&apos;m constantly exploring new tech in AI and Machine Learning to build products that matter.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
