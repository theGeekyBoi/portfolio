import Image from "next/image";
import { site } from "@/content/site";
import { about } from "@/content/about";
import { education } from "@/content/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading index="02" eyebrow="About" title="A little context" />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
              <p className="border-l-2 border-accent/50 pl-4 italic text-foreground">
                {about.closing}
              </p>
            </div>

            <p className="mt-8 font-mono text-sm text-accent">
              {site.currently}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Interests">
              {about.interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-sm border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-faint"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-line bg-surface">
              <Image
                src={about.photo.src}
                alt={about.photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="rounded-card border border-line bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Education
              </p>
              <p className="mt-3 font-semibold">{education.school}</p>
              <p className="mt-1 text-sm text-muted">{education.degree}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-faint">
                {education.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p className="mt-4 flex gap-5 text-sm">
                <span>
                  <span className="text-faint">GPA </span>
                  <span className="font-medium">{education.gpa}</span>
                </span>
                <span>
                  <span className="text-faint">Class of </span>
                  <span className="font-medium">{education.graduation}</span>
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
