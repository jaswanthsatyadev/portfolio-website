"use client";

import React from "react";
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
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const tiltOptions = {
    max: 15,
    scale: 1.02,
    speed: 500,
    glare: true,
    "max-glare": 0.2,
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full h-full animate-float"
    >
      <Tilt options={tiltOptions} className="w-full h-full">
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="neon-card block w-full h-full"
        >
          {/* The main card body with the glass effect */}
          <div
            className="w-full h-full bg-[#0f172a]/60 backdrop-blur-md border border-cyan-500/20 p-4 rounded-lg shadow-xl"
          >
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-auto rounded-md object-cover"
            />

            <div className="relative mt-4">
              <h1 className="text-xl sm:text-2xl font-semibold text-white">{title}</h1>
              <p className="mt-2 text-gray-400 text-xs sm:text-sm">{description}</p>
              <div className="flex flex-wrap mt-4 gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
};
