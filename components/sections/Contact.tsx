import { Film, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { ResumeButton } from "@/components/ui/ResumeButton";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="09"
          eyebrow="Contact"
          title="Let's build something"
          lede="Open to conversations about robotics, embedded systems, ML, and interesting problems in general."
        />

        <Reveal className="flex flex-wrap items-center gap-3">
          <LinkButton href={`mailto:${site.email}`} variant="primary">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {site.email}
          </LinkButton>
          <LinkButton href={site.socials.linkedin} variant="outline">
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </LinkButton>
          <LinkButton href={site.socials.github} variant="outline">
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </LinkButton>
          <LinkButton href={site.socials.letterboxd} variant="outline">
            <Film className="h-4 w-4" aria-hidden="true" />
            Letterboxd
          </LinkButton>
          <ResumeButton />
        </Reveal>
      </div>
    </section>
  );
}
