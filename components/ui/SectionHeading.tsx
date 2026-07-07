import { Reveal } from "@/components/ui/Reveal";

/**
 * Consistent retro section header: numbered mono eyebrow (e.g. "01 / WORK"),
 * heading, optional lede.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
}: {
  index?: string; // e.g. "01" — rendered before the eyebrow
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {index ? (
          <>
            <span className="text-faint">{index}</span>
            <span className="mx-2 text-faint">/</span>
          </>
        ) : null}
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {lede ? <p className="mt-3 max-w-2xl text-muted">{lede}</p> : null}
    </Reveal>
  );
}
