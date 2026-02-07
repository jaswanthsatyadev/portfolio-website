"use client";

import { TypeAnimation } from "react-type-animation";

export const Typewriter = () => {
  const fullText = "I specialize in building native and cross-platform applications, dynamic websites, immersive 2D games, and AI-powered automation solutions that drive innovation and efficiency.";

  return (
    <div className="relative text-base sm:text-lg md:text-xl lg:text-2xl my-3 sm:my-5 max-w-[600px] tracking-wide min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
        <TypeAnimation
          sequence={[
            fullText,
            10000, 
          ]}
          wrapper="span"
          speed={60}
          cursor={true}
          // **THE FIX:** The 'className' is now applied to the wrapper, which allows the CSS to target the cursor.
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 custom-type-animation-cursor"
          repeat={10} 
        />
    </div>
  );
};
