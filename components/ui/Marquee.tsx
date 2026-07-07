import { cn } from "@/lib/utils";

/**
 * Infinite horizontal marquee (Aceternity InfiniteMovingCards style).
 * The item list is duplicated and translated by exactly half its width, so
 * the loop is seamless. Pauses entirely under prefers-reduced-motion
 * (see globals.css) and on hover.
 */
export function Marquee({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex w-max shrink-0 gap-3 pr-3"
    >
      {items.map((item) => (
        <li
          key={item}
          className="whitespace-nowrap rounded-sm border border-line bg-surface px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn(
        "relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
