"use client";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { ALL_SKILLS } from "@/constants";
import { useInView } from "react-intersection-observer";

type Skill = typeof ALL_SKILLS[number];

const SkillRow = ({ skills, direction }: { skills: Skill[]; direction: "left" | "right" }) => {
  const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className={`flex ${animationClass}`}>
      {skills.map((skill) => (
        <div key={skill.skill_name} className="flex-shrink-0 px-3 sm:px-5 md:px-7">
          <SkillDataProvider
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={0}
          />
        </div>
      ))}
      {skills.map((skill) => (
        <div key={`${skill.skill_name}-clone`} aria-hidden="true" className="flex-shrink-0 px-3 sm:px-5 md:px-7">
          <SkillDataProvider
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={0}
          />
        </div>
      ))}
    </div>
  );
};

export const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "250px",
  });

  const midpoint = Math.ceil(ALL_SKILLS.length / 2);
  const firstHalf = ALL_SKILLS.slice(0, midpoint);
  const secondHalf = ALL_SKILLS.slice(midpoint);

  return (
    <section
      ref={ref}
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative py-[40px] sm:py-[60px] md:py-[80px] overflow-hidden"
    >
      <SkillText />
      <div className="flex flex-col gap-4 sm:gap-6 mt-3 w-full overflow-hidden">
        <SkillRow skills={firstHalf} direction="left" />
        <SkillRow skills={secondHalf} direction="right" />
      </div>
      
      {/* Background Video - Loaded only when section is approached */}
      <div className="w-full h-full absolute inset-0 pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-25 absolute flex items-center justify-center bg-cover">
          {inView ? (
            <video
              className="w-full h-auto object-cover"
              preload="none"
              playsInline
              loop
              muted
              autoPlay
            >
              <source src="/videos/skills-bg.webm" type="video/webm" />
            </video>
          ) : (
            <div className="w-full h-full bg-radial-gradient from-purple-900/10 to-transparent" />
          )}
        </div>
      </div>
    </section>
  );
};
