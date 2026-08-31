import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type StoryDimension = "builder" | "ecosystem" | "tech-dna" | "connect-radar";

interface EngineCompositionProps {
  mode: StoryDimension;
}

export const EngineComposition: React.FC<EngineCompositionProps> = ({ mode }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const cycle = (frame % 60) / 60;
  const pulse = Math.sin(cycle * Math.PI * 2) * 0.5 + 0.5;

  return (
    <AbsoluteFill className="bg-[#030014] text-white font-mono select-none overflow-hidden flex flex-col justify-between p-5 sm:p-7">
      {/* Dynamic Cyberpunk Background Grid */}
      <BackgroundGrid frame={frame} />

      {/* Top Header HUD */}
      <TopHUD frame={frame} mode={mode} />

      {/* Main Center Stage */}
      <div className="relative flex-1 flex items-center justify-center my-3 z-10 w-full">
        {mode === "builder" && <BuilderStoryScene frame={frame} fps={fps} pulse={pulse} />}
        {mode === "ecosystem" && <EcosystemStoryScene frame={frame} fps={fps} pulse={pulse} />}
        {mode === "tech-dna" && <TechDNAStoryScene frame={frame} fps={fps} pulse={pulse} />}
        {mode === "connect-radar" && <ConnectRadarStoryScene frame={frame} fps={fps} pulse={pulse} />}
      </div>

      {/* Bottom Timeline & Telemetry */}
      <BottomTelemetry frame={frame} mode={mode} durationInFrames={durationInFrames} />
    </AbsoluteFill>
  );
};

/* --- Background Grid & Hologram Ambience --- */
const BackgroundGrid: React.FC<{ frame: number }> = ({ frame }) => {
  const gridOffsetY = (frame * 0.7) % 40;

  return (
    <div className="absolute inset-0 pointer-events-none opacity-25">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(112, 66, 248, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: `0px ${gridOffsetY}px`,
        }}
      />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030014]/70 to-[#030014]" />
    </div>
  );
};

/* --- Top HUD Status Bar --- */
const TopHUD: React.FC<{ frame: number; mode: StoryDimension }> = ({ frame, mode }) => {
  const timecode = (frame / 30).toFixed(2);
  const titles: Record<StoryDimension, string> = {
    builder: "DIMENSION 01 // THE BUILDER & FOUNDER",
    ecosystem: "DIMENSION 02 // SHIPPED ECOSYSTEM (EVOLVARC)",
    "tech-dna": "DIMENSION 03 // FULLSTACK & AI TECH DNA",
    "connect-radar": "DIMENSION 04 // LIVE SOCIAL & NETWORK RADAR",
  };

  return (
    <div className="flex items-center justify-between border-b border-purple-500/25 pb-2.5 z-10 text-xs">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-bold tracking-wider">SATYA DEV OS</span>
        </div>
        <span className="text-purple-300 font-semibold tracking-wider hidden sm:inline">
          {titles[mode]}
        </span>
      </div>

      <div className="flex items-center gap-4 text-gray-400 font-mono text-[11px]">
        <div>
          FRAME: <span className="text-cyan-400 font-bold">{frame}</span>
        </div>
        <div>
          TIME: <span className="text-purple-300 font-bold">{timecode}s</span>
        </div>
        <div className="px-2 py-0.5 rounded bg-purple-900/40 border border-purple-500/30 text-emerald-400 text-[10px]">
          60 FPS REALTIME
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   STORY 1: THE BUILDER (Identity, Impact & Founder Stats)
   ========================================================================= */
const BuilderStoryScene: React.FC<{ frame: number; fps: number; pulse: number }> = ({
  frame,
  fps,
  pulse,
}) => {
  const avatarScale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  const textSlide = spring({ frame: frame - 6, fps, config: { damping: 14, stiffness: 90 } });

  const metrics = [
    { value: "10K+", label: "Play Store Downloads", tag: "Android Apps", color: "text-cyan-300" },
    { value: "50+", label: "Delivered Projects", tag: "Web & Mobile", color: "text-purple-300" },
    { value: "3+", label: "Internships", tag: "Industry Experience", color: "text-pink-300" },
    { value: "AI-First", label: "Architecture", tag: "Genkit & Gemini", color: "text-emerald-300" },
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-6 px-4 max-w-4xl">
      {/* Left: Hologram Profile Badge */}
      <div
        style={{
          transform: `scale(${avatarScale})`,
          opacity: avatarScale,
        }}
        className="flex flex-col items-center relative flex-shrink-0"
      >
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_40px_rgba(112,66,248,0.5)]">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-950 flex items-center justify-center relative">
            <Img
              src="/logo.png"
              className="w-full h-full object-cover rounded-full"
              alt="Satya Dev"
            />
          </div>
          {/* Orbital Radar Ring */}
          <div
            style={{
              transform: `rotate(${frame * 2}deg)`,
            }}
            className="absolute -inset-2 rounded-full border border-dashed border-cyan-400/50 pointer-events-none"
          />
        </div>
      </div>

      {/* Right: Bio & Kinetic Stats Grid */}
      <div
        style={{
          transform: `translateX(${(1 - textSlide) * 40}px)`,
          opacity: textSlide,
        }}
        className="flex-1 flex flex-col gap-4 text-center md:text-left"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
            Jaswanth Satya Dev
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-mono mt-1">
            20-Year-Old AI Engineer, Android Developer & Product Builder • Hyderabad, IN
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-1">
          {metrics.map((m, i) => {
            const cardSpring = spring({
              frame: frame - (10 + i * 4),
              fps,
              config: { damping: 12, stiffness: 120 },
            });
            return (
              <div
                key={m.label}
                style={{
                  transform: `scale(${cardSpring})`,
                  opacity: cardSpring,
                }}
                className="p-2.5 rounded-xl bg-gray-950/80 border border-purple-500/30 flex flex-col items-center justify-center shadow-lg"
              >
                <span className={`text-base sm:text-lg font-bold ${m.color}`}>{m.value}</span>
                <span className="text-[10px] font-semibold text-gray-200">{m.label}</span>
                <span className="text-[8px] text-gray-400">{m.tag}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   STORY 2: SHIPPED ECOSYSTEM (Interactive Products)
   ========================================================================= */
const EcosystemStoryScene: React.FC<{ frame: number; fps: number; pulse: number }> = ({
  frame,
  fps,
}) => {
  const products = [
    {
      title: "TextPilot AI",
      category: "System-Wide Android AI Assistant",
      stack: "Kotlin • Compose • Genkit",
      metric: "Play Store Live",
      icon: "🤖",
      glow: "border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    },
    {
      title: "MrCakeWala",
      category: "E-Commerce Cake Delivery & Wallet",
      stack: "Next.js • Razorpay • Supabase",
      metric: "Production Live",
      icon: "🎂",
      glow: "border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    },
    {
      title: "Adskipper: Auto Skip Ads",
      category: "Native Automation & Accessibility",
      stack: "Kotlin • Accessibility • Automation",
      metric: "Play Store Live",
      icon: "⏭",
      glow: "border-pink-400/50 shadow-[0_0_20px_rgba(236,72,153,0.3)]",
    },
    {
      title: "StockPulse",
      category: "Market Intelligence News Engine",
      stack: "Flutter • Kotak Neo • Postgres",
      metric: "Play Store Live",
      icon: "📈",
      glow: "border-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    },
  ];

  const activeIdx = Math.floor((frame % 120) / 30);

  return (
    <div className="w-full h-full flex flex-col justify-around items-center px-4 max-w-4xl">
      <div className="grid grid-cols-2 gap-3.5 w-full">
        {products.map((p, i) => {
          const isHighlight = activeIdx === i;
          const s = spring({
            frame: frame - i * 5,
            fps,
            config: { damping: 14, stiffness: 110 },
          });

          return (
            <div
              key={p.title}
              style={{
                transform: `scale(${s})`,
                opacity: s,
              }}
              className={`p-3.5 rounded-xl bg-gray-950/85 border transition-all flex flex-col justify-between h-28 relative overflow-hidden ${
                isHighlight ? `${p.glow} bg-purple-950/40 scale-105` : "border-purple-500/25"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{p.icon}</span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">{p.title}</h3>
                    <p className="text-[9px] text-gray-400">{p.category}</p>
                  </div>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono">
                  {p.metric}
                </span>
              </div>

              <div className="flex justify-between items-center text-[9px] text-gray-400 border-t border-gray-800/60 pt-1.5 font-mono">
                <span>{p.stack}</span>
                <span className="text-emerald-400 font-bold">ONLINE ●</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* =========================================================================
   STORY 3: TECH DNA MATRIX
   ========================================================================= */
const TechDNAStoryScene: React.FC<{ frame: number; fps: number; pulse: number }> = ({
  frame,
  fps,
}) => {
  const techCategories = [
    {
      domain: "AI & INTELLIGENCE",
      items: [
        "Custom AI & LLM's",
        "Chat & Voice agents",
        "AI & Automation Integrations",
        "ML Models fine-tuning & Rag",
      ],
      color: "border-pink-500/40 text-pink-300 bg-pink-950/30",
    },
    {
      domain: "MOBILE ENGINEERING",
      items: [
        "Android (Kotlin) & Jetpack Compose",
        "Flutter",
        "Backend & Databases",
        "AI powered Apps",
      ],
      color: "border-cyan-500/40 text-cyan-300 bg-cyan-950/30",
    },
    {
      domain: "FULLSTACK WEB & CLOUD",
      items: [
        "Next.js & React.js",
        "Python FastAPI & Node.js",
        "Supabase & Postgres",
        "Razorpay & Borzo Integrations",
      ],
      color: "border-purple-500/40 text-purple-300 bg-purple-950/30",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-around items-center px-4 max-w-4xl">
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {techCategories.map((cat, i) => {
          const s = spring({
            frame: frame - i * 6,
            fps,
            config: { damping: 12, stiffness: 100 },
          });

          return (
            <div
              key={cat.domain}
              style={{
                transform: `translateY(${(1 - s) * 30}px) scale(${s})`,
                opacity: s,
              }}
              className={`p-4 rounded-xl bg-gray-950/90 border ${cat.color} flex flex-col justify-between shadow-xl`}
            >
              <span className="text-xs font-bold tracking-wider mb-2">{cat.domain}</span>
              <div className="flex flex-col gap-1.5">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-200 bg-black/40 px-2.5 py-1 rounded-md border border-gray-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* =========================================================================
   STORY 4: LIVE SOCIAL & RADAR CONNECT
   ========================================================================= */
const ConnectRadarStoryScene: React.FC<{ frame: number; fps: number; pulse: number }> = ({
  frame,
  fps,
}) => {
  const socials = [
    { platform: "GitHub", handle: "@jaswanthsatyadev", tag: "Code Repositories", icon: "🐙", color: "border-purple-500/40 text-purple-300" },
    { platform: "X / Twitter", handle: "@jaswanthsatydev", tag: "Tech & AI Updates", icon: "🐦", color: "border-cyan-500/40 text-cyan-300" },
    { platform: "LinkedIn", handle: "Satya Dev", tag: "Professional Network", icon: "💼", color: "border-blue-500/40 text-blue-300" },
    { platform: "Instagram", handle: "@jaswanthsatyadev", tag: "Life & Creator Logs", icon: "📸", color: "border-pink-500/40 text-pink-300" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-around items-center px-4 max-w-4xl">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
        {socials.map((s, i) => {
          const cardSpring = spring({
            frame: frame - i * 5,
            fps,
            config: { damping: 14, stiffness: 120 },
          });

          return (
            <div
              key={s.platform}
              style={{
                transform: `scale(${cardSpring})`,
                opacity: cardSpring,
              }}
              className={`p-3.5 rounded-xl bg-gray-950/80 border ${s.color} flex flex-col items-center text-center justify-between h-28 shadow-lg`}
            >
              <span className="text-2xl">{s.icon}</span>
              <div>
                <span className="text-xs font-bold text-white block">{s.platform}</span>
                <span className="text-[10px] text-cyan-300 font-mono block mt-0.5">{s.handle}</span>
              </div>
              <span className="text-[8px] text-gray-400">{s.tag}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* --- Bottom Timeline Ticker --- */
const BottomTelemetry: React.FC<{
  frame: number;
  mode: StoryDimension;
  durationInFrames: number;
}> = ({ frame, durationInFrames }) => {
  const progress = (frame / durationInFrames) * 100;

  return (
    <div className="w-full flex flex-col gap-2 z-10">
      <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono">
        <span className="text-cyan-400">JASWANTH SATYA DEV // PERSONALIZED STORY ENGINE</span>
        <span>BUILDER • FOUNDER • AI DEVELOPER</span>
      </div>
    </div>
  );
};
