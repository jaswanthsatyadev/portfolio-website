"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  return (
    <motion.div className="flex items-center justify-center">
      <Image src={src} width={width} height={height} alt={name} className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[62px] md:h-[62px]" />
    </motion.div>
  );
};
