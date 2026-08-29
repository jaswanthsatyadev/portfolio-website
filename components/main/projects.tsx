"use client";

import React from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto w-full z-20"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 py-6 sm:py-10 text-center"
      >
        Featured Projects
      </motion.h2>
      
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.title || index}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
            subLinks={"subLinks" in project ? (project.subLinks as any) : undefined}
          />
        ))}
      </div>
    </section>
  );
};
