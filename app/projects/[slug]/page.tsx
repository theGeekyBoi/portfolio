import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FileText, Github } from "lucide-react";
import { projects } from "@/content/projects";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";
import { Reveal } from "@/components/ui/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const images = project.media?.filter((m) => m.type === "image") ?? [];
  const videos = project.media?.filter((m) => m.type === "youtube") ?? [];

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All projects
        </Link>

        {/* Header */}
        <header className="mt-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-muted">{project.subtitle}</p>

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            {project.role && (
              <div>
                <dt className="text-faint">Role</dt>
                <dd className="mt-0.5">{project.role}</dd>
              </div>
            )}
            {project.dates && (
              <div>
                <dt className="text-faint">Timeline</dt>
                <dd className="mt-0.5 font-mono text-sm">{project.dates}</dd>
              </div>
            )}
            <div>
              <dt className="text-faint">Tags</dt>
              <dd className="mt-0.5">{project.tags.join(" · ")}</dd>
            </div>
          </dl>
        </header>
      </Reveal>

      {/* Metrics band */}
      {project.metrics && project.metrics.length > 0 && (
        <Reveal delay={0.05} className="mt-10">
          <div className="grid gap-4 rounded-card border border-line bg-surface p-6 sm:grid-cols-2">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-2xl font-semibold text-accent sm:text-3xl">
                  {m.value}
                </p>
                <p className="mt-1 text-sm text-faint">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {/* Case study: Problem → Approach → What I built → Result */}
      <div className="mt-12 space-y-12">
        {project.caseStudy && (
          <Reveal>
            <CaseSection title="Problem" body={project.caseStudy.problem} />
          </Reveal>
        )}
        {project.caseStudy && (
          <Reveal>
            <CaseSection title="Approach" body={project.caseStudy.approach} />
          </Reveal>
        )}

        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              What I built
            </h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((h) => (
                <li
                  key={h.slice(0, 32)}
                  className="flex gap-3 leading-relaxed text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[11px] h-px w-3 shrink-0 bg-accent/60"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {project.caseStudy && (
          <Reveal>
            <CaseSection title="Result" body={project.caseStudy.result} />
          </Reveal>
        )}

        {/* Media */}
        {(videos.length > 0 || images.length > 0) && (
          <Reveal>
            <section>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Media
              </h2>
              <div className="mt-4 space-y-5">
                {videos.map((v) => (
                  <YouTubeFacade
                    key={v.src}
                    url={v.src}
                    title={v.alt ?? `${project.title} video`}
                  />
                ))}
                {images.map((img) => (
                  <div
                    key={img.src}
                    className="relative aspect-video overflow-hidden rounded-card border border-line bg-surface"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt ?? project.title}
                      fill
                      sizes="(min-width: 768px) 768px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <Reveal>
            <section>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Links
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-line-strong px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.12em] transition-colors hover:border-accent hover:text-accent"
                  >
                    <LinkIcon kind={link.kind} />
                    {link.label}
                  </a>
                ))}
              </div>
            </section>
          </Reveal>
        )}
      </div>
    </article>
  );
}

function CaseSection({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {title}
      </h2>
      <p className="mt-4 leading-relaxed text-muted">{body}</p>
    </section>
  );
}

function LinkIcon({ kind }: { kind?: "external" | "document" | "repo" | "paper" }) {
  const className = "h-4 w-4";
  if (kind === "document") return <FileText className={className} aria-hidden="true" />;
  if (kind === "repo") return <Github className={className} aria-hidden="true" />;
  return <ExternalLink className={className} aria-hidden="true" />;
}
