import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Tabs from "@/components/sections/Tab";

export default function Home() {
  return (
    <div>
      <Hero />
      <Tabs/>
      <Skills />
      <FeaturedProjects />
    </div>
  );
}