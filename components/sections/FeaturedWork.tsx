import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="01"
          eyebrow="Featured work"
          title="Flagship projects"
          lede="Three systems I'm proudest of — hardware, numerics, and product, each with a number to show for it."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, i) => {
            const image = project.media?.find((m) => m.type === "image");
            return (
              <Reveal
                key={project.slug}
                delay={i * 0.08}
                className={cn(i === 0 && "md:col-span-2")}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full focus-visible:outline-none"
                  aria-label={`${project.title} — read the case study`}
                >
                  <SpotlightCard className="h-full">
                    <div
                      className={cn(
                        "flex h-full flex-col",
                        i === 0 && "md:flex-row"
                      )}
                    >
                      {image && (
                        <div
                          className={cn(
                            "relative aspect-[16/9] shrink-0 overflow-hidden border-b border-line",
                            i === 0 &&
                              "md:aspect-auto md:w-1/2 md:border-b-0 md:border-r"
                          )}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt ?? project.title}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                      )}

                      <div className="flex flex-1 flex-col p-6 sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                              {project.title}
                            </h3>
                            <p className="mt-1 text-sm text-muted">
                              {project.subtitle}
                            </p>
                          </div>
                          <ArrowUpRight
                            className="mt-1 h-5 w-5 shrink-0 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                            aria-hidden="true"
                          />
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-muted">
                          {project.summary}
                        </p>

                        {project.metrics?.[0] && (
                          <p className="mt-6">
                            <span className="text-2xl font-semibold text-accent">
                              {project.metrics[0].value}
                            </span>
                            <span className="ml-2 text-sm text-faint">
                              {project.metrics[0].label}
                            </span>
                          </p>
                        )}

                        <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                          {project.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-sm border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-faint"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
