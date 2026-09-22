import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { vtcro } from "@/content/vtcro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TracingBeam, BeamDot } from "@/components/ui/TracingBeam";
import { Reveal } from "@/components/ui/Reveal";

export function VTCRO() {
  const { growth } = vtcro;

  return (
    <section id="vtcro" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="04"
          eyebrow="VT CRO"
          title="Four years at VT CRO"
          lede={vtcro.lede}
        />

        {/* Masthead: wordmark + the narrative */}
        <Reveal>
          <div className="grid items-center gap-8 rounded-card border border-line bg-surface p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_1.4fr] md:gap-12">
            <div className="flex flex-col items-start gap-5">
              <Image
                src={vtcro.logo.src}
                alt={vtcro.logo.alt}
                width={3255}
                height={1024}
                sizes="(min-width: 768px) 360px, 80vw"
                className="h-auto w-full max-w-[320px]"
                priority={false}
              />
              <a
                href={vtcro.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {vtcro.link.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="space-y-4">
              {vtcro.intro.map((p) => (
                <p key={p.slice(0, 32)} className="leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Growth under my leadership: before → after */}
        <Reveal delay={0.05} className="mt-5">
          <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Growth since I stepped into leadership
            </h3>

            <dl className="mt-6 divide-y divide-line">
              <div className="flex items-baseline justify-between gap-6 pb-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                <span className="text-faint">Measure</span>
                <span className="text-faint">
                  {growth.beforeLabel}
                  <span className="mx-2" aria-hidden="true">
                    →
                  </span>
                  <span className="text-accent">{growth.afterLabel}</span>
                </span>
              </div>

              {growth.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
                >
                  <dt className="text-sm text-muted">{row.label}</dt>
                  {/* before → after stays on one line so the jump reads at a glance */}
                  <dd className="flex items-baseline gap-2.5">
                    <span className="font-mono text-sm text-faint">
                      {row.before}
                    </span>
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 self-center text-faint"
                      aria-hidden="true"
                    />
                    <span className="text-lg font-semibold text-foreground">
                      {row.after}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-line pt-6">
              <span className="text-2xl font-semibold text-accent">
                {growth.funding.value}
              </span>
              <span className="flex-1 text-sm leading-relaxed text-muted">
                {growth.funding.label}
              </span>
            </p>
          </div>
        </Reveal>

        {/* The journey, oldest first */}
        <div className="mt-16">
          <Reveal>
            <h3 className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              The path through
            </h3>
          </Reveal>

          <TracingBeam className="max-w-3xl">
            {vtcro.journey.map((stage, i) => (
              <Reveal key={stage.dates} delay={i * 0.05} className="relative">
                <BeamDot />

                <p className="font-mono text-xs text-faint">{stage.dates}</p>
                <h4 className="mt-1 text-lg font-semibold tracking-tight">
                  {stage.role}
                </h4>
                {stage.team && (
                  <p className="mt-0.5 text-sm text-accent">{stage.team}</p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {stage.body}
                </p>
                {stage.note && (
                  <p className="mt-3 inline-block rounded-sm border border-accent/40 bg-accent-faint px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                    {stage.note}
                  </p>
                )}
              </Reveal>
            ))}
          </TracingBeam>
        </div>

        {/* What it changed outside the organization */}
        <div className="mt-16">
          <Reveal>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              What it changed for the department
            </h3>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vtcro.impact.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.06}>
                <article className="flex h-full flex-col rounded-card border border-line bg-surface p-6">
                  <h4 className="font-semibold leading-snug tracking-tight">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Pointer to the flagship project that came out of it */}
        <Reveal delay={0.05}>
          <Link
            href="/projects/workcell"
            className="group mt-10 flex flex-wrap items-center justify-between gap-4 rounded-card border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-8"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
                The system it produced
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight">
                WorkCell — autonomous 3D print farm
              </p>
              <p className="mt-1 text-sm text-muted">
                Gold Award + Honda Innovation Award at the National Robotics
                Challenge 2025 · demoed at OpenSauce 2026.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
              Read the case study
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
