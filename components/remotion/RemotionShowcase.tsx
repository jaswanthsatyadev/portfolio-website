"use client";

import React, { useState, useRef } from "react";
import { Player, PlayerRef } from "@remotion/player";
import { EngineComposition, StoryDimension } from "./EngineComposition";
import { motion } from "framer-motion";

export const RemotionShowcase: React.FC = () => {
  const [activeMode, setActiveMode] = useState<StoryDimension>("builder");
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const playerRef = useRef<PlayerRef>(null);

  const dimensions: { id: StoryDimension; label: string; icon: string; subtitle: string }[] = [
    { id: "builder", label: "01: The Builder", icon: "👤", subtitle: "Identity & Creator Impact" },
    { id: "ecosystem", label: "02: Shipped Apps", icon: "🚀", subtitle: "Live Evolvarc Products" },
    { id: "tech-dna", label: "03: Tech DNA", icon: "🧬", subtitle: "AI, Android & Fullstack" },
    { id: "connect-radar", label: "04: Social Radar", icon: "📡", subtitle: "GitHub, X & Network" },
  ];

  const handleTogglePlay = () => {
    if (!playerRef.current) return;
    if (playerRef.current.isPlaying()) {
      playerRef.current.pause();
      setIsPlaying(false);
    } else {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleNextDimension = () => {
    const currentIndex = dimensions.findIndex((d) => d.id === activeMode);
    const nextIndex = (currentIndex + 1) % dimensions.length;
    setActiveMode(dimensions[nextIndex].id);
  };

  const handlePrevDimension = () => {
    const currentIndex = dimensions.findIndex((d) => d.id === activeMode);
    const prevIndex = (currentIndex - 1 + dimensions.length) % dimensions.length;
    setActiveMode(dimensions[prevIndex].id);
  };

  const togglePlaybackRate = () => {
    const nextRate = playbackRate === 1 ? 1.5 : playbackRate === 1.5 ? 2 : 1;
    setPlaybackRate(nextRate);
    if (playerRef.current) {
      // playerRef allows rate adjustment if supported or re-renders at higher pace
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      {/* Interactive Dimension Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full mb-6 z-20">
        {dimensions.map((dim) => (
          <button
            key={dim.id}
            onClick={() => setActiveMode(dim.id)}
            className={`p-3 rounded-2xl text-left transition-all border flex flex-col justify-between ${
              activeMode === dim.id
                ? "bg-purple-950/80 border-cyan-400 text-white shadow-[0_0_25px_rgba(6,182,212,0.35)] scale-[1.02]"
                : "bg-gray-950/60 border-purple-500/20 text-gray-400 hover:text-gray-200 hover:border-purple-500/40"
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

      {/* Cyberpunk HUD Video Player Wrapper */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-purple-500/30 bg-[#030014] shadow-[0_0_60px_rgba(112,66,248,0.25)]">
        {/* Top Video Header Bar */}
        <div className="w-full px-4 py-2.5 bg-[#060219] border-b border-purple-500/20 flex items-center justify-between text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-cyan-300 font-semibold ml-1.5 text-[11px] sm:text-xs">
              REMOTION // SATYA DEV INTERACTIVE REEL
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev Story */}
            <button
              onClick={handlePrevDimension}
              title="Previous Story"
              className="px-2 py-1 rounded bg-purple-900/30 hover:bg-purple-900/60 border border-purple-500/30 text-gray-300 transition-colors text-[11px]"
            >
              ⏮
            </button>

            {/* Play/Pause */}
            <button
              onClick={handleTogglePlay}
              className="px-2.5 py-1 rounded bg-purple-900/40 hover:bg-purple-900/60 border border-purple-500/30 text-cyan-300 transition-colors text-[11px]"
            >
              {isPlaying ? "⏸ PAUSE" : "▶ PLAY"}
            </button>

            {/* Next Story */}
            <button
              onClick={handleNextDimension}
              title="Next Story"
              className="px-2 py-1 rounded bg-purple-900/30 hover:bg-purple-900/60 border border-purple-500/30 text-gray-300 transition-colors text-[11px]"
            >
              ⏭
            </button>

            <span className="hidden sm:inline text-purple-400 ml-2 text-[10px]">
              1280x720 • 60 FPS
            </span>
          </div>
        </div>

        {/* Remotion Player Container */}
        <div className="w-full aspect-video relative bg-[#030014]">
          <Player
            ref={playerRef}
            component={EngineComposition}
            inputProps={{ mode: activeMode }}
            durationInFrames={240}
            compositionWidth={1280}
            compositionHeight={720}
            fps={30}
            style={{
              width: "100%",
              height: "100%",
            }}
            playbackRate={playbackRate}
            controls={false}
            autoPlay
            loop
          />
        </div>
      </div>

      {/* Interactive Helper Footer */}
      <div className="mt-4 text-center text-xs font-mono text-gray-400 flex items-center justify-center gap-2 flex-wrap">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>Click the story pills above to explore my real products, architecture, and network live.</span>
      </div>
    </div>
  );
};
