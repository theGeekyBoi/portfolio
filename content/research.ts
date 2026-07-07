// ============================================================================
// RESEARCH & PUBLICATIONS — the credibility band on the homepage.
// To add an entry: copy an object in `items`, change the values.
// Order in the array = order shown. `icon` picks the card icon:
//   "paper" (book), "handshake" (collaboration), or "flask" (research).
// ============================================================================

export type ResearchLink = {
  label: string;
  href: string; // external URL, /documents/... path, or internal route
  kind?: "external" | "document" | "paper";
};

export type ResearchItem = {
  icon: "paper" | "handshake" | "flask";
  badge: string; // small label above the title
  title: string;
  venue?: string; // e.g. the journal name (optional)
  detail: string; // dates / volume / location line
  summary: string;
  links: ResearchLink[];
};

export const research: {
  heading: string;
  intro: string;
  items: ResearchItem[];
} = {
  heading: "Research & publications",
  intro: "",

  items: [
    {
      icon: "paper",
      badge: "Peer-reviewed publication",
      title:
        "Urea Concentration Detection in Milk Using Microscopic Image Processing Algorithm under Ultraviolet Light Approach",
      venue:
        "International Journal of Innovative Science and Research Technology (IJISRT)",
      detail: "Volume 9, Issue 8 · Published September 13, 2024 · IJISRT24AUG1182",
      summary:
        "A novel UV-microscopic-imaging method for quantitative detection of urea adulteration in milk — the research behind MADS.",
      links: [
        {
          label: "Read the paper",
          href: "https://ijisrt.com/urea-concentration-detection-in-milk-using-microscopic-image-processing-algorithm-under-ultraviolet-light-approach",
          kind: "paper",
        },
      ],
    },
    {
      icon: "handshake",
      badge: "Industry collaboration",
      title: "Nestlé — Moga factory pitch & commendation",
      detail: "Moga, India · January 6, 2023",
      summary:
        "Pitched the urea-detection system with a live demonstration to Nestlé QA leadership, including the South Asia Region-Head of Quality Assurance. Nestlé cited its cost-effectiveness, quantitative detection, and sustainability, issued a commendation letter from Corporate Affairs, and requested follow-on research on classifying and counting sugar crystals in condensed milk.",
      links: [
        {
          label: "View Nestlé letter",
          href: "/documents/nestle-moga-pitch.pdf",
          kind: "document",
        },
      ],
    },
    {
      icon: "flask",
      badge: "Independent research",
      title: "PCA Framework — embedded device authentication",
      detail: "From-scratch PCA in C · custom Jacobi eigensolver · Arduino Q",
      summary:
        "A C-native principal-component-analysis pipeline that fingerprints devices from frequency-sweep data and runs standalone on embedded hardware — no tethered PC, and 4–5× faster than the original Python flow.",
      links: [
        {
          label: "Read the case study",
          href: "/projects/pca-framework",
        },
      ],
    },
  ],
};
