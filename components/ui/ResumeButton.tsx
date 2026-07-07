import { Download } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Split résumé control: the main segment opens the résumé in a new tab
 * (view), the icon segment downloads it. Both paths come from
 * site.resume in content/site.ts.
 */
export function ResumeButton({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-stretch overflow-hidden rounded-sm border border-line-strong",
        className
      )}
    >
      <a
        href={site.resume.view}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex min-h-11 items-center font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-raised hover:text-accent",
          compact ? "px-4" : "px-5"
        )}
      >
        Résumé
      </a>
      <span aria-hidden="true" className="w-px bg-line-strong" />
      <a
        href={site.resume.download}
        download
        aria-label="Download résumé"
        className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 text-muted transition-colors hover:bg-raised hover:text-accent"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
      </a>
    </span>
  );
}
