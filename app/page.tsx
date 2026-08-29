import About from "@/components/main/about";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { RemotionSection } from "@/components/main/remotion-section";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <About />
        <RemotionSection />
        <Projects />
      </div>
    </main>
  );
}
