"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import { projects, projectTags, type ProjectTag } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectTag;

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const reduceMotion = useReducedMotion();

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="04"
          eyebrow="All projects"
          title="Everything I've built"
        />

        {/* Filter chips */}
        <div
          role="group"
          aria-label="Filter projects by tag"
          className="mb-10 flex flex-wrap gap-2"
        >
          {(["All", ...projectTags] as Filter[]).map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setFilter(tag)}
              aria-pressed={filter === tag}
              className={cn(
                "min-h-11 rounded-sm border px-4 font-mono text-xs uppercase tracking-[0.1em] transition-colors",
                filter === tag
                  ? "border-accent bg-accent-faint text-accent"
                  : "border-line text-muted hover:border-line-strong hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.ul layout={!reduceMotion} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.li
                key={project.slug}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col rounded-card border border-line bg-surface p-6 transition-colors hover:border-line-strong"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  {project.metrics?.[0] && (
                    <span className="shrink-0 font-mono text-sm text-accent">
                      {project.metrics[0].value}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-faint">{project.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-faint"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    Case study
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>

                  {project.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.kind === "document" ? (
                        <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
