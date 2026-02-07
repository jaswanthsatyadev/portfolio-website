import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { ALL_SKILLS } from "@/constants";

// Define the 'Skill' type
type Skill = typeof ALL_SKILLS[number];

// The SkillRow component now renders the skill list twice for a seamless loop
const SkillRow = ({ skills, direction }: { skills: Skill[]; direction: "left" | "right" }) => {
  const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className={`flex ${animationClass}`}>
      {/* Render the skills list the first time */}
      {skills.map((skill) => (
        <div key={skill.skill_name} className="flex-shrink-0 px-4 sm:px-6 md:px-8">
          <SkillDataProvider
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={0} // index is not needed for this animation type
          />
        </div>
      ))}
      {/* Render the exact same list a second time to create the infinite effect */}
      {skills.map((skill) => (
        <div key={`${skill.skill_name}-clone`} aria-hidden="true" className="flex-shrink-0 px-4 sm:px-6 md:px-8">
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
  const midpoint = Math.ceil(ALL_SKILLS.length / 2);
  const firstHalf = ALL_SKILLS.slice(0, midpoint);
  const secondHalf = ALL_SKILLS.slice(midpoint);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative py-[50px] sm:py-[70px] md:py-[90px] overflow-hidden"
    >
      <SkillText />
      <div className="flex flex-col gap-5 mt-4 w-full overflow-hidden">
        <SkillRow skills={firstHalf} direction="left" />
        <SkillRow skills={secondHalf} direction="right" />
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="metadata"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
