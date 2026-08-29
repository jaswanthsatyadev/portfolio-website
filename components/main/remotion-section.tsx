"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RemotionShowcase = dynamic(
  () => import("@/components/remotion/RemotionShowcase").then((mod) => mod.RemotionShowcase),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-5xl aspect-video mx-auto bg-gray-950/80 border border-purple-500/20 rounded-2xl flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-full border-2 border-t-purple-500 border-r-cyan-400 border-b-transparent border-l-transparent animate-spin" />
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          Initializing Builder Reel...
        </span>
      </div>
    ),
  }
);

export const RemotionSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "250px",
  });

  return (
    <section
      ref={ref}
      id="remotion-engine"
      className="flex flex-col items-center justify-center py-16 sm:py-20 md:py-28 px-4 sm:px-6 relative z-20 w-full"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-purple-900/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4 shadow-[0_0_20px_rgba(112,66,248,0.25)]"
        >
          <span>🎬 INTERACTIVE STORY REEL</span>
          <span>•</span>
          <span className="text-cyan-400">BUILT WITH REMOTION.DEV</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 py-2"
        >
          Satya Dev // Builder Wrapped
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-400 mt-2 font-mono leading-relaxed"
        >
          Explore my journey, shipped apps under Evolvarc, AI tech stack, and network metrics rendered programmatically in React.
        </motion.p>
      </div>

      {/* Main Remotion Player */}
      <div className="w-full max-w-6xl">
        {inView && <RemotionShowcase />}
      </div>
    </section>
  );
};
