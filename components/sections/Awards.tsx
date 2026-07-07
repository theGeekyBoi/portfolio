import { Trophy } from "lucide-react";
import { stats, awards } from "@/content/awards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

export function Awards() {
  return (
    <section id="awards" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading index="07" eyebrow="Recognition" title="Numbers & honors" />

        {/* Count-up stat cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div className="rounded-card border border-line bg-surface p-5 sm:p-6">
                <p className="font-mono text-3xl font-medium tracking-tight text-accent sm:text-4xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2 text-xs text-faint sm:text-sm">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Awards list */}
        <Reveal delay={0.1} className="mt-12">
          <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
            {awards.map((award) => (
              <li key={award.title} className="flex gap-3">
                <Trophy
                  className="mt-1 h-4 w-4 shrink-0 text-accent/70"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium leading-snug">{award.title}</p>
                  {award.detail && (
                    <p className="mt-0.5 text-xs text-faint">{award.detail}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
