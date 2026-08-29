"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Tilt } from "react-tilt";

export type SubLink = {
  label: string;
  url: string;
  icon?: string;
  description?: string;
  badge?: string;
};

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  subLinks?: SubLink[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  tags,
  subLinks,
}: ProjectCardProps) => {
  const [enableTilt, setEnableTilt] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Only enable 3D tilt on desktop devices with mouse pointers
    const isMobileOrTouch = window.innerWidth < 768 || "ontouchstart" in window;
    setEnableTilt(!isMobileOrTouch);
  }, []);

  const handleCardClick = (e: React.MouseEvent) => {
    if (subLinks && subLinks.length > 0) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const cardInner = (
    <div className="w-full h-full bg-[#0b0f19]/85 backdrop-blur-md border border-cyan-500/20 group-hover:border-cyan-400/50 p-4 sm:p-5 rounded-xl shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      <div>
        {/* Project Thumbnail */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-gray-900/50">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {subLinks && subLinks.length > 0 && (
            <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-purple-950/90 border border-purple-400/50 backdrop-blur-md text-[10px] font-mono font-bold text-cyan-300 shadow-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>2 Deployments</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
          <span>{title}</span>
          <span className="text-xs text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity">
            {subLinks && subLinks.length > 0 ? "⚡" : "↗"}
          </span>
        </h3>

        {/* Description */}
        <p className="mt-2 text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Tags */}
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
  );

  const cardElement = subLinks && subLinks.length > 0 ? (
    <div
      onClick={handleCardClick}
      className="neon-card block w-full h-full group cursor-pointer"
      role="button"
      tabIndex={0}
    >
      {cardInner}
    </div>
  ) : (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="neon-card block w-full h-full group"
    >
      {cardInner}
    </Link>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="w-full h-full"
      >
        {enableTilt && !isModalOpen ? (
          <Tilt
            options={{
              max: 12,
              scale: 1.02,
              speed: 600,
              glare: false,
            }}
            className="w-full h-full"
          >
            {cardElement}
          </Tilt>
        ) : (
          cardElement
        )}
      </motion.div>

      {/* Multi-Deployment Selection Modal */}
      <AnimatePresence>
        {isModalOpen && subLinks && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#08021d] border border-cyan-500/40 rounded-2xl p-6 sm:p-7 shadow-[0_0_50px_rgba(6,182,212,0.3)] z-50 text-white font-sans"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-purple-500/25 pb-4 mb-5">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                    Select Deployment
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {title}
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-purple-950/60 border border-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-900/80 flex items-center justify-center transition-all text-sm ml-2 flex-shrink-0"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* SubLinks Options */}
              <div className="flex flex-col gap-3.5">
                {subLinks.map((item, idx) => (
                  <Link
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => setIsModalOpen(false)}
                    className="p-4 rounded-xl bg-gray-950/80 border border-purple-500/30 hover:border-cyan-400 hover:bg-purple-950/40 transition-all duration-200 group flex items-center justify-between shadow-lg"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 text-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon || (idx === 0 ? "🌐" : "⚡")}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {item.label}
                          </h4>
                          {item.badge && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="text-cyan-400 font-mono text-sm group-hover:translate-x-1 transition-transform pl-3 flex-shrink-0">
                      Launch ↗
                    </div>
                  </Link>
                ))}
              </div>

              {/* Footer info */}
              <div className="mt-5 pt-3 border-t border-purple-500/20 flex justify-between items-center text-[11px] font-mono text-gray-400">
                <span>AutoFare Mass Transit Engine</span>
                <span className="text-emerald-400">Live Services Active ●</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

