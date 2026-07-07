import { ArrowUp, Film, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-semibold tracking-tight">{site.name}</p>
          <p className="mt-1 text-sm text-faint">{site.footer.line}</p>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-sm text-muted transition-colors hover:text-foreground"
          >
            <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-sm text-muted transition-colors hover:text-foreground"
          >
            <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-sm text-muted transition-colors hover:text-foreground"
          >
            <Github className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a
            href={site.socials.letterboxd}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Letterboxd"
            className="flex h-11 w-11 items-center justify-center rounded-sm text-muted transition-colors hover:text-foreground"
          >
            <Film className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 flex h-11 w-11 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
