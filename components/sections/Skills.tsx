import { skillGroups, skillMarquee } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading index="08" eyebrow="Skills" title="Tools of the trade" />

        <Reveal>
          <Marquee items={skillMarquee} className="mb-12" />
        </Reveal>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.06}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-sm border border-line bg-surface px-3 py-1.5 text-sm text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
