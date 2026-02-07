"use client";

import Spline from '@splinetool/react-spline/next';
import { useEffect } from 'react';

export const HeroContent = ({ onLoad }: { onLoad?: () => void }) => {
  useEffect(() => {
    // Fallback in case Spline doesn't call onLoad
    const timeout = setTimeout(() => {
      if (onLoad) onLoad();
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [onLoad]);

  return (
    // **THE FIX:** The outer container acts as a frame to crop the content.
    <div className="w-full h-full relative overflow-hidden">
      {/* The Spline component is now absolutely positioned inside the frame */}
      <div className="absolute top-0 left-0 w-full h-[110%]">
        <Spline
          scene="https://prod.spline.design/bBhlEoaOEcVn6tGT/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
    </div>
  );
}
