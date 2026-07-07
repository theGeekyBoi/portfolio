# Aaditya Sharma - Portfolio

Personal portfolio built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**. Dark, minimal, and fully content-driven: every fact on the site lives in plain data files under [`content/`](content/), so updating it never requires touching a component.

## Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. No keys, database, or backend required.

Production build:

```bash
npm run build
npm start
```

## Where things live

| What | Where |
|---|---|
| **All written content** (name, links, projects, jobs, awards, skills…) | `content/*.ts` — see [EDITING.md](EDITING.md) |
| PDFs (résumé, Nestlé letter, WSN report) | `public/documents/` |
| Project images / photo | `public/images/` |
| Page composition | `app/page.tsx` (homepage), `app/projects/[slug]/page.tsx` (case studies) |
| Sections (dumb renderers) | `components/sections/` |
| Animation primitives (Aceternity-style) | `components/ui/` |

## Editing content

**Read [EDITING.md](EDITING.md)** — it has copy-paste recipes for adding a project, swapping the résumé, hiding a section, changing links, and more. Short version: open the matching file in `content/`, copy an existing entry, change the values. TypeScript will yell if an edit is malformed.

## Structure

```
app/                  # routes: homepage + /projects/[slug] case studies
components/
  sections/           # one component per homepage section
  ui/                 # TextHoverEffect, SpotlightCard, TracingBeam, Marquee, …
content/              # ← the only place content lives; edit here
public/
  documents/          # PDFs (ASCII filenames, opened in a new tab)
  images/             # project imagery (labeled placeholders included)
```
