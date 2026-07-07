import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-background hover:bg-accent-dim border border-transparent",
  outline:
    "border border-line-strong text-foreground hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-foreground border border-transparent",
};

/**
 * The one button/link style used across the site.
 * - internal routes (e.g. /projects/workcell) use next/link
 * - documents & external URLs open in a new tab
 * - `download` forces a file download instead of opening
 */
export function LinkButton({
  href,
  children,
  variant = "outline",
  newTab,
  download,
  className,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  newTab?: boolean;
  download?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const base = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.12em] transition-colors",
    styles[variant],
    className
  );

  const external =
    href.startsWith("http") || href.startsWith("/documents/") || href.startsWith("mailto:");
  const openInNewTab = newTab ?? (external && !href.startsWith("mailto:") && !download);

  if (!external && !href.startsWith("#")) {
    return (
      <Link href={href} className={base} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={base}
      aria-label={ariaLabel}
      download={download || undefined}
      {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
