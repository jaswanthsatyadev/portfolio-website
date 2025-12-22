"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Spline from '@splinetool/react-spline/next';

// Your personalized links
const myLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jaswanth-satya-dev/" },
  { name: "GitHub", url: "https://github.com/jaswanthsatyadev" },
];

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 md:p-8 relative mt-64">
      {/* **THE FIX:** The UFO container now has overflow-hidden to crop the logo */}
      <div className="w-full absolute -top-[450px] left-0 z-10 h-[800px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[110%]">
            <Spline scene="https://prod.spline.design/w-6vM6wIAfHOZuLN/scene.splinecode" />
        </div>
      </div>

      <div className="relative z-20 w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around flex-wrap">
          
          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                style={{ textShadow: '0 0 10px rgba(192, 77, 246, 0.5)' }}>
              Satya Dev
            </h3>
            <p className="text-sm text-gray-300" style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.3)' }}>
              Hyderabad, India
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                style={{ textShadow: '0 0 10px rgba(192, 77, 246, 0.5)' }}>
              Connect with Me
            </h3>
            {myLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm my-1 text-gray-300 hover:brightness-125 hover:text-white transition"
                style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.3)' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                style={{ textShadow: '0 0 10px rgba(192, 77, 246, 0.5)' }}>
              Support My Work
            </h3>
            <Link
              href="https://buymeacoffee.com/jaswanthsatyadev"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm my-1 text-gray-300 hover:brightness-125 hover:text-white transition cursor-pointer"
              style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.3)' }}
            >
              Buy me a coffee
            </Link>
          </div>
        </div>

        <div className="mt-16 mb-4 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Satya Dev. All rights reserved.
        </div>
      </div>
    </div>
  );
};
