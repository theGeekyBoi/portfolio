import { BookOpenCheck, FlaskConical, Handshake } from "lucide-react";
import { research, type ResearchItem } from "@/content/research";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";

const icons: Record<ResearchItem["icon"], typeof BookOpenCheck> = {
  paper: BookOpenCheck,
  handshake: Handshake,
  flask: FlaskConical,
};

export function Research() {
  return (
    <section id="research" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="05"
          eyebrow="Research"
          title={research.heading}
          lede={research.intro}
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {research.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={(i % 2) * 0.08}>
                <article className="flex h-full flex-col rounded-card border border-accent/20 bg-accent-faint/40 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      {item.badge}
                    </p>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  {item.venue && (
                    <p className="mt-2 text-sm text-muted">{item.venue}</p>
                  )}
                  <p className="mt-1 font-mono text-xs text-faint">
                    {item.detail}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>

                  {item.links.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      {item.links.map((link) => (
                        <LinkButton
                          key={link.href}
                          href={link.href}
                          variant="outline"
                        >
                          {link.label}
                        </LinkButton>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
