"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.removeProperty('overflow');
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Guaranteed timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.removeProperty('overflow');
    }, 2000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
      document.body.style.removeProperty('overflow');
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#030014] z-[999] flex flex-col items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-24 h-24 border-4 border-transparent border-t-purple-500 border-r-cyan-500 rounded-full absolute"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-16 h-16 border-4 border-transparent border-l-purple-500 border-b-cyan-500 rounded-full absolute"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-200 text-sm font-light tracking-[0.2em] z-10"
            >
              LOADING
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}