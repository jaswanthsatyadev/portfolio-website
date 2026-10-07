"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export type StoryDimension = "builder" | "ecosystem" | "tech-dna" | "connect-radar";

const DIMENSIONS: { id: StoryDimension; label: string; icon: string; subtitle: string }[] = [
  { id: "builder", label: "01: The Builder", icon: "👤", subtitle: "Identity & Metrics" },
  { id: "ecosystem", label: "02: Shipped Apps", icon: "🚀", subtitle: "Live Apps & Products" },
  { id: "tech-dna", label: "03: Tech DNA", icon: "🧬", subtitle: "AI, Android & Fullstack" },
  { id: "connect-radar", label: "04: Social Radar", icon: "📡", subtitle: "GitHub, X & Network" },
];

export const RemotionShowcase: React.FC = () => {
  const [activeMode, setActiveMode] = useState<StoryDimension>("builder");
  const [isPlaying, setIsPlaying] = useState(true);
  const [tickerIndex, setTickerIndex] = useState(0);

  // Auto-advance dimension when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveMode((prev) => {
        const idx = DIMENSIONS.findIndex((d) => d.id === prev);
        return DIMENSIONS[(idx + 1) % DIMENSIONS.length].id;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Code ticker simulation
  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(tickerInterval);
  }, []);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextDimension = () => {
    const currentIndex = DIMENSIONS.findIndex((d) => d.id === activeMode);
    setActiveMode(DIMENSIONS[(currentIndex + 1) % DIMENSIONS.length].id);
  };

  const handlePrevDimension = () => {
    const currentIndex = DIMENSIONS.findIndex((d) => d.id === activeMode);
    setActiveMode(DIMENSIONS[(currentIndex - 1 + DIMENSIONS.length) % DIMENSIONS.length].id);
  };

  const tickerMessages = [
    "Building Custom AI & LLM solutions with RAG & fine-tuning...",
    "Engineering Android (Kotlin) & Jetpack Compose native architectures...",
    "Automating accessibility & ad skipping with 10K+ Play Store downloads...",
    "Deploying Next.js 14, Python FastAPI & Supabase edge services...",
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      {/* Interactive Dimension Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full mb-6 z-20">
        {DIMENSIONS.map((dim) => (
          <button
            key={dim.id}
            type="button"
            onClick={() => {
              setActiveMode(dim.id);
              setIsPlaying(false);
            }}
            className={`p-3 sm:p-4 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
              activeMode === dim.id
                ? "bg-purple-950/90 border-cyan-400 text-white shadow-[0_0_25px_rgba(6,182,212,0.35)] scale-[1.02]"
                : "bg-gray-950/70 border-purple-500/20 text-gray-400 hover:text-gray-200 hover:border-purple-500/40"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{dim.icon}</span>
              <span className="text-xs sm:text-sm font-bold tracking-wide">{dim.label}</span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono mt-1">{dim.subtitle}</span>
          </button>
        ))}
      </div>

      {/* Cyberpunk HUD Video Player Frame */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-purple-500/30 bg-[#030014] shadow-[0_0_60px_rgba(112,66,248,0.25)]">
        {/* Top Video Header Bar */}
        <div className="w-full px-4 py-2.5 bg-[#060219] border-b border-purple-500/20 flex items-center justify-between text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-cyan-300 font-semibold ml-1.5 text-[11px] sm:text-xs">
              SATYA DEV OS // INTERACTIVE BUILDER REEL
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrevDimension}
              title="Previous Story"
              className="px-2 py-1 rounded bg-purple-900/30 hover:bg-purple-900/60 border border-purple-500/30 text-gray-300 transition-colors text-[11px] cursor-pointer"
            >
              ⏮
            </button>

            <button
              type="button"
              onClick={handleTogglePlay}
              className="px-2.5 py-1 rounded bg-purple-900/40 hover:bg-purple-900/60 border border-purple-500/30 text-cyan-300 transition-colors text-[11px] cursor-pointer"
            >
              {isPlaying ? "⏸ PAUSE" : "▶ AUTO-PLAY"}
            </button>

            <button
              type="button"
              onClick={handleNextDimension}
              title="Next Story"
              className="px-2 py-1 rounded bg-purple-900/30 hover:bg-purple-900/60 border border-purple-500/30 text-gray-300 transition-colors text-[11px] cursor-pointer"
            >
              ⏭
            </button>

            <span className="hidden sm:inline text-emerald-400 ml-2 text-[10px] font-bold">
              60 FPS REALTIME
            </span>
          </div>
        </div>

        {/* Dynamic Interactive Stage */}
        <div className="w-full min-h-[380px] sm:min-h-[440px] p-6 sm:p-8 flex flex-col justify-between relative bg-[#030014]">
          {/* Cyber Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(112, 66, 248, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />

          <AnimatePresence mode="wait">
            {activeMode === "builder" && (
              <motion.div
                key="builder"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full flex-1 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
              >
                {/* Left: Avatar Badge */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_40px_rgba(112,66,248,0.5)]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-950 flex items-center justify-center relative">
                      <Image
                        src="/logo.png"
                        alt="Satya Dev"
                        width={144}
                        height={144}
                        priority
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Bio & Kinetic Stats Grid */}
                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
                      Jaswanth Satya Dev
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-mono mt-1">
                      20-Year-Old AI Engineer, Android Developer & Product Builder • Hyderabad, IN
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2">
                    <Link
                      href="https://play.google.com/store/apps/dev?id=8851828516936708433"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-3 rounded-xl bg-gray-950/80 border border-purple-500/30 hover:border-cyan-400/60 hover:scale-105 transition-all flex flex-col items-center justify-center shadow-lg group cursor-pointer"
                    >
                      <span className="text-lg sm:text-xl font-bold text-cyan-300 group-hover:text-cyan-200">10K+</span>
                      <span className="text-[11px] font-semibold text-gray-200">Play Store</span>
                      <span className="text-[9px] text-gray-400">Downloads ↗</span>
                    </Link>

                    <Link
                      href="#projects"
                      className="p-3 rounded-xl bg-gray-950/80 border border-purple-500/30 hover:border-purple-400/60 hover:scale-105 transition-all flex flex-col items-center justify-center shadow-lg group cursor-pointer"
                    >
                      <span className="text-lg sm:text-xl font-bold text-purple-300 group-hover:text-purple-200">50+</span>
                      <span className="text-[11px] font-semibold text-gray-200">Projects</span>
                      <span className="text-[9px] text-gray-400">Delivered ↗</span>
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/jaswanth-satya-dev/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-3 rounded-xl bg-gray-950/80 border border-purple-500/30 hover:border-pink-400/60 hover:scale-105 transition-all flex flex-col items-center justify-center shadow-lg group cursor-pointer"
                    >
                      <span className="text-lg sm:text-xl font-bold text-pink-300 group-hover:text-pink-200">3+</span>
                      <span className="text-[11px] font-semibold text-gray-200">Internships</span>
                      <span className="text-[9px] text-gray-400">Industry Exp ↗</span>
                    </Link>

                    <Link
                      href="https://github.com/jaswanthsatyadev"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-3 rounded-xl bg-gray-950/80 border border-purple-500/30 hover:border-emerald-400/60 hover:scale-105 transition-all flex flex-col items-center justify-center shadow-lg group cursor-pointer"
                    >
                      <span className="text-lg sm:text-xl font-bold text-emerald-300 group-hover:text-emerald-200">AI-First</span>
                      <span className="text-[11px] font-semibold text-gray-200">Architecture</span>
                      <span className="text-[9px] text-gray-400">Genkit & LLMs ↗</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {activeMode === "ecosystem" && (
              <motion.div
                key="ecosystem"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full flex-1 flex flex-col justify-center items-center relative z-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                  {/* TextPilot AI */}
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.evolvarc.textpilot"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-3.5 rounded-xl bg-gray-950/85 border border-cyan-400/50 hover:border-cyan-300 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">🤖</span>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">TextPilot AI</h4>
                          <p className="text-[10px] text-gray-400">System-Wide Android AI Assistant</p>
                        </div>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono">
                        Play Store Live ↗
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-gray-400 border-t border-gray-800/60 pt-2 font-mono mt-2">
                      <span>Kotlin • Jetpack Compose • Genkit</span>
                      <span className="text-emerald-400 font-bold">ONLINE ●</span>
                    </div>
                  </Link>

                  {/* MrCakeWala */}
                  <Link
                    href="https://app.mrcakewala.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-3.5 rounded-xl bg-gray-950/85 border border-purple-400/50 hover:border-purple-300 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(168,85,247,0.25)] flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">🎂</span>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">MrCakeWala</h4>
                          <p className="text-[10px] text-gray-400">E-Commerce Cake Delivery & Wallet</p>
                        </div>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-950 border border-purple-500/30 text-purple-300 font-mono">
                        Production Live ↗
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-gray-400 border-t border-gray-800/60 pt-2 font-mono mt-2">
                      <span>Next.js • Razorpay • Supabase • Borzo</span>
                      <span className="text-emerald-400 font-bold">ACTIVE ●</span>
                    </div>
                  </Link>

                  {/* Adskipper: Auto Skip Ads */}
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.evolvarc.adskipper"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-3.5 rounded-xl bg-gray-950/85 border border-pink-400/50 hover:border-pink-300 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(236,72,153,0.25)] flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">⏭</span>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">Adskipper: Auto Skip Ads</h4>
                          <p className="text-[10px] text-gray-400">Native Automation & Accessibility Tool</p>
                        </div>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-pink-950 border border-pink-500/30 text-pink-300 font-mono">
                        Play Store Live ↗
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-gray-400 border-t border-gray-800/60 pt-2 font-mono mt-2">
                      <span>Kotlin • Android Development • Accessibility</span>
                      <span className="text-emerald-400 font-bold">ONLINE ●</span>
                    </div>
                  </Link>

                  {/* StockPulse */}
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.evolvarc.stockpulse"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-3.5 rounded-xl bg-gray-950/85 border border-emerald-400/50 hover:border-emerald-300 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(160,185,129,0.25)] flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">📈</span>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">StockPulse</h4>
                          <p className="text-[10px] text-gray-400">Market Intelligence News Engine</p>
                        </div>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 font-mono">
                        Play Store Live ↗
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-gray-400 border-t border-gray-800/60 pt-2 font-mono mt-2">
                      <span>Flutter • Kotak Neo API • Postgres</span>
                      <span className="text-emerald-400 font-bold">ONLINE ●</span>
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}

            {activeMode === "tech-dna" && (
              <motion.div
                key="tech-dna"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full flex-1 flex flex-col justify-center items-center relative z-10"
              >
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {/* AI & INTELLIGENCE */}
                  <div className="p-4 rounded-xl bg-gray-950/90 border border-pink-500/40 text-pink-300 bg-pink-950/30 flex flex-col justify-between shadow-xl">
                    <span className="text-xs font-bold tracking-wider mb-2">AI & INTELLIGENCE</span>
                    <div className="flex flex-col gap-1.5">
                      {[
                        "Custom AI & LLM's",
                        "Chat & Voice agents",
                        "AI & Automation Integrations",
                        "ML Models fine-tuning & Rag",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-[11px] text-gray-200 bg-black/40 px-2.5 py-1.5 rounded-md border border-gray-800 hover:border-pink-500/50 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* MOBILE ENGINEERING */}
                  <div className="p-4 rounded-xl bg-gray-950/90 border border-cyan-500/40 text-cyan-300 bg-cyan-950/30 flex flex-col justify-between shadow-xl">
                    <span className="text-xs font-bold tracking-wider mb-2">MOBILE ENGINEERING</span>
                    <div className="flex flex-col gap-1.5">
                      {[
                        "Android (Kotlin) & Jetpack Compose",
                        "Flutter",
                        "Backend & Databases",
                        "AI powered Apps",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-[11px] text-gray-200 bg-black/40 px-2.5 py-1.5 rounded-md border border-gray-800 hover:border-cyan-500/50 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FULLSTACK WEB & CLOUD */}
                  <div className="p-4 rounded-xl bg-gray-950/90 border border-purple-500/40 text-purple-300 bg-purple-950/30 flex flex-col justify-between shadow-xl">
                    <span className="text-xs font-bold tracking-wider mb-2">FULLSTACK WEB & CLOUD</span>
                    <div className="flex flex-col gap-1.5">
                      {[
                        "Next.js & React.js",
                        "Python FastAPI & Node.js",
                        "Supabase & Postgres",
                        "Razorpay & Borzo Integrations",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-[11px] text-gray-200 bg-black/40 px-2.5 py-1.5 rounded-md border border-gray-800 hover:border-purple-500/50 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeMode === "connect-radar" && (
              <motion.div
                key="connect-radar"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full flex-1 flex flex-col justify-center items-center relative z-10"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
                  <Link
                    href="https://github.com/jaswanthsatyadev"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-4 rounded-xl bg-gray-950/80 border border-purple-500/40 hover:border-purple-400 hover:scale-105 transition-all flex flex-col items-center text-center justify-between shadow-lg group cursor-pointer"
                  >
                    <span className="text-3xl mb-1">🐙</span>
                    <div>
                      <span className="text-xs font-bold text-white block group-hover:text-purple-300">GitHub</span>
                      <span className="text-[10px] text-cyan-300 font-mono block mt-0.5">@jaswanthsatyadev</span>
                    </div>
                    <span className="text-[9px] text-gray-400 mt-1">Code & Repos ↗</span>
                  </Link>

                  <Link
                    href="https://x.com/jaswanthsatydev"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-4 rounded-xl bg-gray-950/80 border border-cyan-500/40 hover:border-cyan-400 hover:scale-105 transition-all flex flex-col items-center text-center justify-between shadow-lg group cursor-pointer"
                  >
                    <span className="text-3xl mb-1">🐦</span>
                    <div>
                      <span className="text-xs font-bold text-white block group-hover:text-cyan-300">X / Twitter</span>
                      <span className="text-[10px] text-cyan-300 font-mono block mt-0.5">@jaswanthsatydev</span>
                    </div>
                    <span className="text-[9px] text-gray-400 mt-1">Tech & AI Logs ↗</span>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/jaswanth-satya-dev/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-4 rounded-xl bg-gray-950/80 border border-blue-500/40 hover:border-blue-400 hover:scale-105 transition-all flex flex-col items-center text-center justify-between shadow-lg group cursor-pointer"
                  >
                    <span className="text-3xl mb-1">💼</span>
                    <div>
                      <span className="text-xs font-bold text-white block group-hover:text-blue-300">LinkedIn</span>
                      <span className="text-[10px] text-cyan-300 font-mono block mt-0.5">Satya Dev</span>
                    </div>
                    <span className="text-[9px] text-gray-400 mt-1">Network & Career ↗</span>
                  </Link>

                  <Link
                    href="https://www.instagram.com/jaswanthsatyadev/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-4 rounded-xl bg-gray-950/80 border border-pink-500/40 hover:border-pink-400 hover:scale-105 transition-all flex flex-col items-center text-center justify-between shadow-lg group cursor-pointer"
                  >
                    <span className="text-3xl mb-1">📸</span>
                    <div>
                      <span className="text-xs font-bold text-white block group-hover:text-pink-300">Instagram</span>
                      <span className="text-[10px] text-cyan-300 font-mono block mt-0.5">@jaswanthsatyadev</span>
                    </div>
                    <span className="text-[9px] text-gray-400 mt-1">Life & Creator ↗</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Telemetry Bar */}
          <div className="w-full mt-6 pt-3 border-t border-purple-500/20 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs font-mono text-gray-400 gap-2 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-300">{tickerMessages[tickerIndex]}</span>
            </div>
            <span className="text-cyan-400 font-semibold">HYDERABAD, IN // SATYA DEV</span>
          </div>
        </div>
      </div>

      {/* Interactive Helper Footer */}
      <div className="mt-4 text-center text-xs font-mono text-gray-400 flex items-center justify-center gap-2 flex-wrap">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>Click any pill, project card, or stat badge to interact live.</span>
      </div>
    </div>
  );
};
