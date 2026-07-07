// ============================================================================
// PROJECTS — every project on the site lives in this one array.
//
// To add a project: copy an existing object, change the values, done.
//   - Order in the array = order shown in the "All projects" grid.
//   - `featured: true` puts it in the big Featured Work trio on the homepage
//     (keep exactly 3 featured for the layout to look best).
//   - Every project automatically gets its own case-study page at
//     /projects/<slug> — no extra work needed.
//   - `metrics[0]` is the hard number shown on the project card.
//   - `media` accepts images (put files in public/images/) and YouTube videos.
//   - `links` become buttons: kind "document" opens a PDF from
//     public/documents/, "external"/"repo"/"paper" open a URL in a new tab.
// ============================================================================

export type ProjectTag =
  | "Robotics"
  | "Embedded"
  | "ML"
  | "Web"
  | "Impact"
  | "Research";

export type ProjectLink = {
  label: string;
  href: string; // external URL, or a /documents/... path for PDFs
  kind?: "external" | "document" | "repo" | "paper";
};

export type ProjectMedia = {
  type: "image" | "youtube";
  // image: a path under public/ (e.g. "/images/workcell.svg")
  // youtube: the full watch URL (e.g. "https://www.youtube.com/watch?v=...")
  src: string;
  alt?: string;
};

export type Project = {
  slug: string; // URL-safe id; becomes /projects/<slug>
  title: string;
  subtitle: string; // short descriptor under the title
  featured: boolean; // true = homepage featured trio
  tags: ProjectTag[];
  role?: string;
  dates?: string;
  summary: string; // 1–2 lines shown on the card
  metrics?: { value: string; label: string }[]; // metrics[0] shows on the card
  highlights: string[]; // bullet detail (shown in "What I built")
  // The case-study page renders: Problem → Approach → What I built
  // (highlights) → Result → Media → Links.
  caseStudy?: {
    problem: string;
    approach: string;
    result: string;
  };
  media?: ProjectMedia[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  // --------------------------------------------------------------------------
  {
    slug: "workcell",
    title: "WorkCell",
    subtitle: "Autonomous 3D print farm",
    featured: true,
    tags: ["Robotics", "Embedded"],
    role: "ECE & Software Lead · VT CRO",
    dates: "Aug 2024 – Present",
    summary:
      "A fully custom, fully autonomous multi-printer 3D manufacturing workcell — dual printers, plate swapping, storage automation, and a continuous print queue.",
    metrics: [
      { value: "0.2mm", label: "gantry positioning accuracy" },
      { value: "2", label: "national awards (Gold + Honda)" },
    ],
    highlights: [
      "Closed-loop auto-calibration system — a novel approach using computer vision + AprilTags with dynamic camera tracking to achieve 0.2 mm gantry positioning accuracy.",
      "Dual printers with a plate-swapping mechanism, storage automation, and shelf management.",
      "Continuous print queue system for unattended printing — centralized queue management integrating print execution, automated part removal, and storage.",
      "Inventory-optimization algorithms that automate shelf-placement logic based on print-height constraints and real-time storage availability.",
      "Tight coordination of firmware, sensor/actuator control, communication protocols, backend software, and mechanical integration.",
    ],
    caseStudy: {
      problem:
        "3D printers still need a human: swapping plates, clearing parts, queuing jobs, recalibrating. Running a multi-printer farm continuously and unattended means solving calibration, part handling, storage, and scheduling as one integrated system.",
      approach:
        "Build the whole cell as a closed-loop system. A gantry serves dual printers; computer vision with AprilTags and dynamic camera tracking keeps the gantry calibrated automatically; a centralized queue coordinates print execution, automated part removal, and shelf storage.",
      result:
        "0.2 mm gantry positioning accuracy from the vision-based auto-calibration. Gold Award (Workcell category) and the Honda Innovation Award in Manufacturing at the National Robotics Challenge 2025, and selected to exhibit at OpenSauce 2026.",
    },
    media: [
      {
        type: "youtube",
        src: "https://www.youtube.com/watch?v=6d8gg3khpiE",
        alt: "WorkCell — autonomous 3D print farm demo",
      },
      {
        type: "image",
        src: "/images/workcell.jpg",
        alt: "WorkCell gantry and print head, with an AprilTag used for closed-loop vision calibration",
      },
      {
        type: "image",
        src: "/images/workcell-team.png",
        alt: "The VT CRO WorkCell team with the autonomous print farm at the National Robotics Challenge",
      },
    ],
    // TODO: add the VT News article URL when available (master profile §18).
  },
  // --------------------------------------------------------------------------
  {
    slug: "petal",
    title: "Petal",
    subtitle: "AI-powered notes that organize themselves",
    featured: true,
    tags: ["ML", "Web"],
    role: "Founder & Full-Stack Developer",
    summary:
      "A full-stack AI notes app that auto-categorizes entries by meaning using vector embeddings, an LLM tie-breaker, and a self-improving learning loop.",
    metrics: [
      { value: "1536-dim", label: "embeddings, semantic categorization" },
      { value: "100%", label: "of the job queue lives in Postgres" },
    ],
    highlights: [
      "Hybrid AI pipeline — vector similarity (pgvector, cosine search) plus an LLM tie-breaker with confidence thresholds; falls back to user prompts or AI-suggested new categories when confidence is low.",
      "Self-improving ML loop — user corrections trigger a background worker that extracts and reinforces semantic anchors, continuously refining each category's embedding.",
      "All-in-Postgres asynchronous job system — pgmq + pg_cron + pg_net drive Deno Edge Function workers with batch claiming, visibility timeouts, retries, idempotency, and optimistic concurrency. No separate queue service.",
      "Next.js 16 + React 19 + TypeScript 5 frontend with a custom contentEditable rich-text editor, voice dictation, and dark mode.",
      "Security throughout — Row-Level Security, SECURITY DEFINER functions with locked search_path, Supabase Vault secrets, DOMPurify sanitization.",
    ],
    caseStudy: {
      problem:
        "Notes apps make you do the filing. Folders and tags rot because organizing by hand is exactly the chore people skip — notes should land in the right place by meaning, automatically.",
      approach:
        "Embed every note (OpenAI text-embedding-3-small, 1536 dimensions) and match it to categories by cosine similarity in pgvector. When similarity alone can't decide, an LLM tie-breaker with confidence thresholds settles it — and when the user corrects a category, a background worker reinforces that category's semantic anchors so the system gets better with use.",
      result:
        "A production-grade app on Next.js + Supabase: automatic categorization that improves itself, and a fault-tolerant background job system built entirely inside Postgres (pgmq, pg_cron, pg_net) — auth, RLS isolation, onboarding, search, and soft delete included.",
    },
    media: [
      {
        type: "image",
        src: "/images/petal.png",
        alt: "Petal — plant your thoughts (petal-notes.com)",
      },
    ],
    links: [
      { label: "petal-notes.com", href: "https://petal-notes.com", kind: "external" },
      // TODO: point at the dedicated Petal repo when it's public
      // (currently the GitHub profile).
      { label: "GitHub", href: "https://github.com/theGeekyBoi", kind: "repo" },
    ],
  },
  // --------------------------------------------------------------------------
  {
    slug: "pca-framework",
    title: "PCA Framework",
    subtitle: "Embedded device authentication, from-scratch numerics in C",
    featured: false,
    tags: ["Embedded", "ML", "Research"],
    role: "Developer / Researcher · Independent research",
    summary:
      "A C-native PCA pipeline that fingerprints devices from frequency-sweep data and runs standalone on Arduino Q — including a custom Jacobi eigensolver.",
    metrics: [
      { value: "4–5×", label: "faster device flow (27–40 min → 6.5–10 min)" },
      { value: "2001", label: "data points per frequency sweep" },
    ],
    highlights: [
      "Custom cyclic Jacobi eigensolver implemented natively in C — no external libraries — with deterministic sign normalization to mirror scikit-learn behavior.",
      "Dual-covariance PCA formulation so the eigendecomposition scales with sample count rather than feature count; heap allocation to move past a 256-feature limit and handle 2001 points per sweep.",
      "Full C port of the original Python pipeline: loads CSV sweeps, builds single- and multi-sweep PCA identifiers, runs authentication, and emits diagnostic CSVs plus a Markdown report.",
      "Standalone Arduino Q architecture — the MCU side runs the frequency sweep and sensor measurements; the Linux side collects data over the Bridge and runs the C PCA pipeline. No tethered PC.",
      "Python exporter generates simulated test vectors into a C header, validating the C pipeline's accuracy against known data.",
    ],
    caseStudy: {
      problem:
        "Authenticate physical devices from their frequency-sweep signatures — on the device itself. The reference pipeline was Python on a tethered PC, and a full five-sweep authentication took 27–40 minutes.",
      approach:
        "Rewrite the numerics in portable float32 C: a public C API over custom kernels and a cyclic Jacobi eigensolver, using a dual-covariance PCA formulation to keep the eigendecomposition tractable at 2001 points per sweep. Then profile the real bottleneck — the physical sweep, not the math — and batch Bridge transfers while tuning sweep frequencies.",
      result:
        "The full device flow dropped from 27–40 minutes to 6.5–10 minutes (~4–5× faster), running standalone on Arduino Q with no tethered PC — sweeps per ~2 minutes instead of 5–8 — with C results validated against scikit-learn.",
    },
    media: [
      {
        type: "image",
        src: "/images/pca.jpg",
        alt: "The PCA Framework measurement circuit built on a breadboard",
      },
    ],
    // TODO: add the PCA Framework repo URL when confirmed (master profile §18).
  },
  // --------------------------------------------------------------------------
  {
    slug: "mads",
    title: "MADS",
    subtitle: "Milk adulteration detection under UV microscopy",
    featured: true,
    tags: ["Research", "ML", "Impact"],
    role: "Independent research",
    summary:
      "A low-cost device that quantitatively measures urea adulteration in milk — UV microscopy plus OpenCV image processing, down to a 0.018% average error rate.",
    metrics: [
      { value: "0.018%", label: "average error rate (MADS v2)" },
      { value: "$1,500", label: "NFTE World Series of Innovation winner" },
      { value: "1st", label: "MetLife Foundation Challenge" },
    ],
    highlights: [
      "Complete hardware build on an Arduino Nano — PTC heating element, temperature sensor, UV LEDs, and a 1000X-zoom USB microscope — for ~₹3,140 in parts.",
      "A 4–5-drop milk sample is heated to 100.5 °C, evaporating the water content in 10–15 seconds; under UV light the remaining urea particles stand apart from milk proteins and carbohydrates by their differing refractive indices.",
      "Proprietary Python + OpenCV/NumPy pipeline isolates the illuminated urea with HSV thresholding, draws contours around the particles, and computes their area to quantify concentration.",
      "MADS v2 scans a 30-second video (720 frames at 24 fps) and averages concentration across frames — cutting the average error rate from 1.47% (v1, single static image) to 0.018%.",
      "Peer-reviewed publication in IJISRT (Vol 9, Issue 8; September 2024); pitched live at Nestlé's Moga factory to QA leadership, earning a commendation letter from Nestlé Corporate Affairs.",
    ],
    caseStudy: {
      problem:
        "Urea is one of the most common and dangerous milk adulterants in India — 68.4% of 1,791 milk samples tested across 33 states were affected — and standard field tests only give a yes/no answer. Quantifying the concentration cheaply and quickly is the hard part.",
      approach:
        "Evaporate a few drops of milk on a heated plate (100.5 °C, 10–15 seconds), illuminate the residue with UV LEDs so the urea particles stand apart from other milk solids by refractive index, and film it through a 1000X USB microscope. A Python + OpenCV pipeline thresholds the footage in HSV space, contours the urea particles, and averages the measured concentration across 720 video frames.",
      result:
        "Quantitative urea detection with a 0.018% average error rate on a ₹3,140 device — a peer-reviewed IJISRT publication, a $1,500 NFTE World Series of Innovation win, 1st place in the MetLife Foundation Good Health & Wellbeing Challenge, and a live pitch at Nestlé's Moga factory that earned a corporate commendation letter.",
    },
    media: [
      {
        type: "image",
        src: "/images/mads.png",
        alt: "Aaditya presenting the MADS research as an NFTE VIP speaker",
      },
    ],
    links: [
      {
        label: "Read the paper",
        href: "https://ijisrt.com/urea-concentration-detection-in-milk-using-microscopic-image-processing-algorithm-under-ultraviolet-light-approach",
        kind: "paper",
      },
      {
        label: "View Nestlé letter",
        href: "/documents/nestle-moga-pitch.pdf",
        kind: "document",
      },
    ],
  },
  // --------------------------------------------------------------------------
  {
    slug: "wireless-sensor-node",
    title: "Wireless Sensor Node",
    subtitle: "Solar-powered fire-detection system",
    featured: false,
    tags: ["Embedded", "Impact"],
    role: "Developer · Integrated Design Project (ECE 2804)",
    dates: "Spring 2025",
    summary:
      "A solar-powered wireless sensor node for early fire monitoring — power electronics, embedded systems, and IoT in one build. Best in Course.",
    metrics: [{ value: "Best", label: "in Course, ECE 2804" }],
    highlights: [
      "Temperature and smoke detection for early fire monitoring.",
      "Closed-loop DC/DC boost converter with PI control for the solar power stage.",
      "Bluetooth communication with a custom GUI for live monitoring.",
      "Awarded Best in Course for ECE 2804 (Spring 2025), recognized for technical depth and system-level execution.",
    ],
    caseStudy: {
      problem:
        "Early fire detection in the field needs sensor nodes that run indefinitely without wall power or wired networking — which makes the power stage as important as the sensing.",
      approach:
        "Pair temperature and smoke sensing with a solar power stage regulated by a closed-loop DC/DC boost converter under PI control, and report readings over Bluetooth to a custom monitoring GUI.",
      result:
        "A working solar-powered node combining power electronics, embedded firmware, and IoT — awarded Best in Course for the ECE 2804 Integrated Design Project.",
    },
    media: [
      {
        type: "image",
        src: "/images/wsn.png",
        alt: "Wireless Sensor Node enclosure — CAD model (WSN | G3)",
      },
    ],
    links: [
      {
        label: "View final report",
        href: "/documents/wsn-final-report.pdf",
        kind: "document",
      },
      // TODO: add the GitHub repo link when available (master profile §18).
    ],
  },
  // --------------------------------------------------------------------------
  {
    slug: "medicle",
    title: "Medicle",
    subtitle: "Vital health checkups for rural India",
    featured: false,
    tags: ["Impact", "Embedded"],
    role: "Developer · CodeHack (Winner)",
    summary:
      "A real-time vitals-monitoring cubicle built to bring accessible health checkups to rural India. CodeHack winner.",
    metrics: [{ value: "1st", label: "CodeHack winner" }],
    highlights: [
      "Real-time vitals monitoring in a self-contained cubicle form factor.",
      "Designed for social impact — accessible healthcare for rural communities.",
      "Won CodeHack.",
    ],
    caseStudy: {
      problem:
        "Basic health checkups are out of reach for much of rural India — clinics are far, and routine vitals go unmeasured until problems become emergencies.",
      approach:
        "Package real-time vitals monitoring into a self-contained cubicle that can be deployed where clinics aren't, so a checkup takes minutes and no travel.",
      result:
        "A working vitals-monitoring cubicle prototype that won CodeHack.",
    },
    media: [
      {
        type: "image",
        src: "/images/medicle.png",
        alt: "Medicle — vitals-monitoring health cubicle concept render",
      },
    ],
    // TODO: add a demo/repo link and confirm the CodeHack year (master profile §18).
  },
];

/** The three projects shown in the homepage Featured Work section. */
export const featuredProjects = projects.filter((p) => p.featured);

/** Tag filter chips shown above the All Projects grid. */
export const projectTags: ProjectTag[] = [
  "Robotics",
  "Embedded",
  "ML",
  "Web",
  "Impact",
  "Research",
];
