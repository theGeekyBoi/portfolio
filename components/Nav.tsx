"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Film, Github, Linkedin, Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Scroll-spy: highlight the nav link of the section currently in view.
  useEffect(() => {
    if (!isHome) return;
    const sections = site.nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  // Close the mobile menu when the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/75 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        {/* Monogram / name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-line-strong font-mono text-xs text-accent"
          >
            {site.monogram}
          </span>
          <span className="hidden whitespace-nowrap sm:max-md:inline lg:inline">
            {site.name}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <li key={item.id}>
              <a
                href={linkHref(item.id)}
                className={cn(
                  "relative rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors",
                  active === item.id
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden="true"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32 }
                    }
                    className="absolute inset-x-3 -bottom-px h-px bg-accent"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Persistent actions (icon links appear once there's room at lg) */}
        <div className="hidden items-center gap-2 md:flex">
          <span className="hidden items-center gap-2 lg:flex">
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
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-sm text-muted transition-colors hover:text-foreground"
            >
              <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
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
          </span>
          <ResumeButton compact />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-sm text-foreground md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="px-4 py-3">
              {site.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={linkHref(item.id)}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm px-3 py-3 font-mono text-sm uppercase tracking-[0.14em] text-muted transition-colors hover:bg-raised hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 border-t border-line px-7 py-4">
              <ResumeButton compact />
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-sm text-muted hover:text-foreground"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-sm text-muted hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={site.socials.letterboxd}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Letterboxd"
                className="flex h-11 w-11 items-center justify-center rounded-sm text-muted hover:text-foreground"
              >
                <Film className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
