"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/lib/motion";
import { useInView } from "react-intersection-observer";

export const Encryption = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "250px",
  });

  return (
    <div
      ref={ref}
      className="flex flex-col relative items-center justify-between min-h-[500px] sm:min-h-[600px] md:min-h-[700px] w-full py-12 sm:py-16 px-4 sm:px-6 overflow-hidden z-20"
    >
      {/* Top Header */}
      <div className="w-auto h-auto z-[5]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-gray-100"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            &
          </span>{" "}
          Security
        </motion.div>
      </div>

      {/* Center Interactive Lock */}
      <div className="flex flex-col items-center justify-center z-[20] my-8 sm:my-12">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={45}
            height={45}
            className="translate-y-4 transition-all duration-300 group-hover:translate-y-8 group-hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={65}
            height={65}
            className="z-10 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="Welcome-box px-4 py-1 z-[20] border my-4 border-[#7042F88B] opacity-90 shadow-[0_0_15px_rgba(112,66,248,0.3)]">
          <h2 className="Welcome-text text-xs tracking-wider uppercase font-mono">End-to-End Encrypted</h2>
        </div>
      </div>

      {/* Bottom Subtitle */}
      <div className="z-[20] px-4 text-center">
        <div className="cursive text-base sm:text-lg md:text-xl text-gray-300 drop-shadow-sm">
          Secure, optimized, and engineered for high-throughput scalability.
        </div>
      </div>

      {/* Background Video (Lazy loaded) */}
      <div className="w-full h-full absolute inset-0 flex items-center justify-center -z-10 pointer-events-none opacity-30">
        {inView ? (
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          >
            <source src="/videos/encryption-bg.webm" type="video/webm" />
          </video>
        ) : (
          <div className="w-full h-full bg-radial-gradient from-cyan-900/10 to-transparent" />
        )}
      </div>
    </div>
  );
};
