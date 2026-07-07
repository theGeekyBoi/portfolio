import { site } from "@/content/site";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Research } from "@/components/sections/Research";
import { Leadership } from "@/components/sections/Leadership";
import { Awards } from "@/components/sections/Awards";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

// The page is just a composition of sections; each section renders from
// content/ and can be hidden with a flag in content/site.ts.
export default function HomePage() {
  const s = site.sections;
  return (
    <>
      <Hero />
      {s.work && <FeaturedWork />}
      {s.about && <About />}
      {s.experience && <Experience />}
      {s.projects && <ProjectsGrid />}
      {s.research && <Research />}
      {s.leadership && <Leadership />}
      {s.awards && <Awards />}
      {s.skills && <Skills />}
      {s.contact && <Contact />}
    </>
  );
}
