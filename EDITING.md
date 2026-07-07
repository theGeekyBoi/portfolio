# How to edit this site (no coding required)

Everything you see on the site — every project, job, award, skill, link, and number — lives in the **`content/`** folder as plain text files. You never need to touch anything in `app/` or `components/`.

The general recipe is always the same:

1. Open the matching file in `content/`.
2. Copy an existing entry (everything between `{` and `},`).
3. Change the values. Keep the quotes and commas.
4. Save. The site updates automatically while `npm run dev` is running.

If you make a typo in the structure, the site will show an error telling you which file and line — undo and try again.

---

## Run the site

```bash
npm install     # once
npm run dev     # then open http://localhost:3000
```

---

## Add or edit a project

Open **`content/projects.ts`**. Copy an existing project block and change the fields:

```ts
{
  slug: "my-robot",                    // becomes the page URL: /projects/my-robot
  title: "My Robot",
  subtitle: "A robot that does things",
  featured: false,                     // true = shows in the big homepage trio (keep exactly 3 featured)
  tags: ["Robotics", "Embedded"],      // pick from: Robotics, Embedded, ML, Web, Impact, Research
  role: "Lead Developer",
  dates: "Jan 2026 – Present",
  summary: "One or two lines shown on the project card.",
  metrics: [
    { value: "2×", label: "faster than the old one" },  // metrics[0] shows on the card
  ],
  highlights: [
    "Bullet point shown under 'What I built' on the case-study page.",
    "Another bullet point.",
  ],
  caseStudy: {
    problem: "What was hard.",
    approach: "How you attacked it.",
    result: "What happened, with numbers.",
  },
  media: [
    { type: "image", src: "/images/my-robot.svg", alt: "My robot" },
    { type: "youtube", src: "https://www.youtube.com/watch?v=XXXXXXXXXXX", alt: "Demo video" },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/you/my-robot", kind: "repo" },
    { label: "View report", href: "/documents/my-report.pdf", kind: "document" },
    { label: "Read the paper", href: "https://example.com/paper", kind: "paper" },
  ],
},
```

- **Reorder projects** by reordering the blocks in the array.
- **Remove a project** by deleting its block.
- Every project automatically gets a case-study page at `/projects/<slug>`.

## Add or replace a document (résumé, report, letter)

1. Drop the PDF into **`public/documents/`**. Use a simple filename: lowercase, hyphens, no spaces or accents (e.g. `my-new-report.pdf`).
2. Point a link at it:
   - Résumé → edit `resume` in `content/site.ts`
   - A project button → add `{ label: "View report", href: "/documents/my-new-report.pdf", kind: "document" }` to that project's `links` in `content/projects.ts`

## Change the résumé

Open **`content/site.ts`** and edit:

```ts
resume: {
  view: "/documents/aaditya-sharma-resume.pdf",      // opens in a new tab
  download: "/documents/aaditya-sharma-resume.pdf",  // the Download button
},
```

Drop the new PDF in `public/documents/` first. Both usually point at the same file.

## Change email / LinkedIn / GitHub

Edit them **once** in **`content/site.ts`** (`email` and `socials`). Every button in the nav, contact section, and footer updates automatically.

## Add a job / award / skill / leadership item

| To change… | Edit… |
|---|---|
| Jobs & timeline | `content/experience.ts` |
| Awards list & big stat numbers | `content/awards.ts` |
| Skills & the scrolling marquee row | `content/skills.ts` |
| Leadership & initiatives cards | `content/leadership.ts` |
| Research / publication cards | `content/research.ts` |
| About paragraphs, interests, photo | `content/about.ts` |
| Education card | `content/education.ts` |
| Name, tagline, nav links | `content/site.ts` |

Same recipe everywhere: copy an entry, change the values.

## Hide a whole section

Open **`content/site.ts`** and set the section's flag to `false`:

```ts
sections: {
  ...
  leadership: false,   // the Leadership section disappears from the homepage
},
```

## Swap a placeholder image for a real one

1. Put your image in **`public/images/`** (JPG/PNG/SVG all fine — e.g. `workcell.jpg`).
2. Update the path where it's used:
   - Project image → that project's `media` entry in `content/projects.ts`
   - Your photo → `photo.src` in `content/about.ts`

The included `.svg` files in `public/images/` are labeled placeholders — delete them once replaced.

## Change the stat numbers (the animated counters)

Edit `stats` in **`content/awards.ts`**. The number part animates automatically (`"140+"` counts to 140 then shows the `+`; `"0.2mm"` counts to 0.2 then shows `mm`).
