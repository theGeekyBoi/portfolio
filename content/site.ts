// ============================================================================
// SITE-WIDE SETTINGS — edit this file to change your identity, links,
// résumé, navigation, and which sections appear on the page.
// Every email / social / document path on the site comes from here.
// ============================================================================

export const site = {
  name: "Aaditya Sharma",
  // Short monogram shown in the nav and footer.
  monogram: "AS",
  tagline: "Computer Engineer · Robotics · Machine Learning",
  // One-line value proposition under the name in the hero.
  blurb: "Building systems where hardware, software, and intelligence meet.",
  // A quiet status line shown in the About section.
  currently: "Currently: President of VT CRO · senior year · having fun",

  email: "aaditya07@vt.edu",

  socials: {
    linkedin: "https://www.linkedin.com/in/aaditya-sharma-0611002b1",
    github: "https://github.com/theGeekyBoi",
    letterboxd: "https://letterboxd.com/ado_19/films/",
  },

  // Résumé: "view" opens in a new tab, "download" saves the file.
  // To swap in a new résumé, drop the PDF in public/documents/ and
  // change these two paths (usually to the same file).
  resume: {
    view: "/documents/aaditya-sharma-resume.pdf",
    download: "/documents/aaditya-sharma-resume.pdf",
  },

  // Sticky-nav links. `id` must match a section id on the page.
  nav: [
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "research", label: "Research" },
    { id: "contact", label: "Contact" },
  ],

  // Set any of these to false to hide that whole section.
  sections: {
    about: true,
    work: true,
    experience: true,
    projects: true,
    research: true,
    leadership: true,
    awards: true,
    skills: true,
    contact: true,
  },

  footer: {
    line: "Designed & built by Aaditya Sharma",
  },
} as const;

export type SectionKey = keyof typeof site.sections;
