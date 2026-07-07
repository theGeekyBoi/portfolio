import { ArrowUpRight } from "lucide-react";
import { leadership } from "@/content/leadership";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="06"
          eyebrow="Leadership"
          title="Initiatives & leadership"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <article className="flex h-full flex-col rounded-card border border-line bg-surface p-6">
                <h3 className="font-semibold leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-accent">
                  {item.role}
                  {item.dates ? (
                    <span className="ml-2 font-mono text-xs text-faint">
                      {item.dates}
                    </span>
                  ) : null}
                </p>

                {item.stat && (
                  <p className="mt-4">
                    <span className="text-2xl font-semibold">{item.stat.value}</span>
                    <span className="ml-2 text-sm text-faint">{item.stat.label}</span>
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>

                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex min-h-11 items-center gap-1 pt-4 text-sm font-medium text-accent hover:underline"
                  >
                    {item.link.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
