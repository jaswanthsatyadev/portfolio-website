"use client";

import Spline from '@splinetool/react-spline/next';
import { useEffect, useState } from 'react';

export const HeroContent = ({ onLoad }: { onLoad?: () => void }) => {
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    // Shorter fallback timeout
    const timeout = setTimeout(() => {
      if (onLoad) onLoad();
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, [onLoad]);
  
  if (hasError) {
    // Fallback content for errors
    if (onLoad) onLoad();
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-6xl">🤖</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[110%]">
        <Spline
          scene="https://prod.spline.design/bBhlEoaOEcVn6tGT/scene.splinecode"
          onLoad={onLoad}
          onError={() => {
            setHasError(true);
            if (onLoad) onLoad();
          }}
        />
      </div>
    </div>
  );
}
