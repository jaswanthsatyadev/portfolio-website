"use client";

import React from "react";
import Image from "next/image";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index?: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
}: SkillDataProviderProps) => {
  return (
    <div
      title={name}
      className="flex items-center justify-center p-2 sm:p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/10 hover:border-cyan-400/40 hover:bg-purple-900/30 transition-all duration-300 group/skill"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={name}
        className="w-[36px] h-[36px] sm:w-[46px] sm:h-[46px] md:w-[54px] md:h-[54px] object-contain transition-transform duration-300 group-hover/skill:scale-115"
      />
    </div>
  );
};
