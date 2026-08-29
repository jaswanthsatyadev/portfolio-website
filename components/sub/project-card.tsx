"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Tilt } from "react-tilt";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export const ProjectCard = ({ src, title, description, link, tags }: ProjectCardProps) => {
  const [enableTilt, setEnableTilt] = useState(false);
  
  useEffect(() => {
    // Only enable 3D tilt on desktop devices with mouse pointers
    const isMobileOrTouch = window.innerWidth < 768 || ('ontouchstart' in window);
    setEnableTilt(!isMobileOrTouch);
  }, []);

  const cardContent = (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="neon-card block w-full h-full group"
    >
      <div className="w-full h-full bg-[#0b0f19]/80 backdrop-blur-md border border-cyan-500/20 group-hover:border-cyan-400/50 p-4 sm:p-5 rounded-xl shadow-xl transition-colors duration-300 flex flex-col justify-between">
        <div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-gray-900/50">
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
            {title}
            <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
          </h3>
          <p className="mt-2 text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap mt-4 gap-1.5 sm:gap-2">
          {tags.filter(Boolean).map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="px-2.5 py-0.5 sm:py-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-mono font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="w-full h-full"
    >
      {enableTilt ? (
        <Tilt
          options={{
            max: 12,
            scale: 1.02,
            speed: 600,
            glare: false,
          }}
          className="w-full h-full"
        >
          {cardContent}
        </Tilt>
      ) : (
        cardContent
      )}
    </motion.div>
  );
};
