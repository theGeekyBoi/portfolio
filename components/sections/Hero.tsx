import { ArrowDown } from "lucide-react";
import { site } from "@/content/site";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[92svh] items-center overflow-hidden"
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Accessible name; the animated SVG treatment is decorative */}
        <h1 className="sr-only">{site.name} — {site.tagline}</h1>

        <Reveal className="text-center">
          <p className="font-mono text-sm text-faint" aria-hidden="true">
            <span className="text-accent">~ $</span> whoami
            <span className="animate-blink text-accent">▌</span>
          </p>
        </Reveal>

        <div className="mx-auto max-w-4xl">
          <TextHoverEffect text={site.name} />
        </div>

        <Reveal delay={0.15} className="text-center">
          <p className="font-mono text-sm tracking-[0.18em] text-accent sm:text-base">
            {site.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-muted sm:text-xl">
            {site.blurb}
          </p>
        </Reveal>

        <Reveal
          delay={0.3}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <LinkButton href="#work" variant="primary">
            View work
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </LinkButton>
          <LinkButton href={site.resume.view} variant="outline">
            Résumé
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
