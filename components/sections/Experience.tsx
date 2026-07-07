import { ArrowUpRight } from "lucide-react";
import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TracingBeam, BeamDot } from "@/components/ui/TracingBeam";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading index="03" eyebrow="Experience" title="Where I've worked" />

        <TracingBeam className="max-w-3xl">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.05} className="relative">
              <BeamDot />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  {job.org}
                </h3>
                <p className="font-mono text-xs text-faint">{job.dates}</p>
              </div>
              <p className="mt-0.5 text-sm text-faint">{job.location}</p>

              {/* Role progression: newest first */}
              <ul className="mt-3 space-y-1">
                {job.roles.map((role, ri) => (
                  <li
                    key={role.title}
                    className="flex flex-wrap items-baseline gap-x-3 text-sm"
                  >
                    <span
                      className={
                        ri === 0 ? "font-medium text-accent" : "text-muted"
                      }
                    >
                      {role.title}
                    </span>
                    {role.dates && (
                      <span className="font-mono text-xs text-faint">
                        {role.dates}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 32)}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-px w-3 shrink-0 bg-accent/60"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              {job.link && (
                <a
                  href={job.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  {job.link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </Reveal>
          ))}
        </TracingBeam>
      </div>
    </section>
  );
}
