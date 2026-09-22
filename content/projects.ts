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
//     public/documents/, "external"/"repo"/"paper" open a URL in a new tab,
//     and "appstore" additionally renders the big download button at the top
//     of the case-study page and an "On the App Store" badge on the cards.
// ============================================================================

export type ProjectTag =
  | "Robotics"
  | "Embedded"
  | "ML"
  | "Web"
  | "iOS"
  | "Impact"
  | "Research";

export type ProjectLink = {
  label: string;
  href: string; // external URL, or a /documents/... path for PDFs
  kind?: "external" | "document" | "repo" | "paper" | "appstore";
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
    subtitle: "Plant your thoughts — AI notes on iOS and the web",
    featured: true,
    tags: ["ML", "Web", "iOS"],
    role: "Founder & Full-Stack Developer",
    dates: "May 2026 – Present",
    summary:
      "A private, AI-assisted notes app shipping as two first-class clients — a native SwiftUI iOS app on the App Store and a Next.js web app — on one Supabase backend. Notes sort themselves by meaning, and the system gets more accurate every time you correct it.",
    metrics: [
      { value: "iOS + Web", label: "two native clients, one Postgres backend" },
      { value: "1536-dim", label: "pgvector embeddings behind Smart Sort" },
      { value: "~42k", label: "lines of TypeScript and Swift" },
      { value: "37", label: "test suites, run in parallel on both clients" },
    ],
    highlights: [
      "Shipped on the App Store — a native SwiftUI app (~22k lines of Swift) chosen over React Native so dictation and rich text are the real system frameworks: TextKit with a custom NSLayoutManager for the editor, Speech + AVAudioEngine for dictation, VisionKit for document scanning.",
      "A dual-editor product thesis — the Home inbox creates uncategorized drafts and categorizes only on explicit intent, while the Note editor autosaves onto the existing row and never re-runs AI. Typing never spends tokens, leaving never loses a thought, and editing an old note never silently reclassifies it.",
      "Smart Sort is a hybrid vector pipeline, not a prompt — categories are embedded as name + description + hidden semantic anchors, and a Postgres RPC blends baseline cosine similarity (70%) with the 5 nearest prior notes decayed on a ~30-day half-life (30%). Confidence thresholds then decide whether to auto-assign, offer a choice, or suggest a new category.",
      "The LLM is a narrow tie-breaker — gpt-4o-mini is called only when the top two candidates both clear the medium threshold and sit within 0.02 of each other, receives exactly two allowed names, and any deviation falls back to the vector winner. Per-note model calls are usually zero after the first embedding.",
      "A self-improving loop — correcting a category enqueues a pgmq job drained by a Deno Edge Function worker (pg_cron every 10s, authenticated by a Vault secret) that extracts note-grounded anchors, consolidates to at most 15 via compare-and-swap, and clears the embedding so it regenerates.",
      "Capture treated as a durability problem — client-reserved UUIDs written to localStorage before any async work, retry-safe upserts on conflict, a serialized save queue, ref-based debounce / visibilitychange / unmount triggers, auth-gated one-time hydration, and a validated warm handoff that continues a phone draft on a laptop without resurrecting stale ones.",
      "Offline-first iOS sync — a SyncEngine reconciles SwiftData against Supabase with watermark-based incremental pulls, an outbound pending queue, last-write-wins conflict resolution with self-echo suppression, Realtime channels with reconnect auto-drain, and a guard that refuses to advance the watermark on a suspicious zero-category sync.",
      "Cross-platform rigor — categorization decisions, fuzzy search (Damerau–Levenshtein), save semantics, and the HTML sanitizer pair were ported as pure, separately-tested logic so web and iOS run the same rules, verified by parallel test suites on both sides.",
      "Attachments as a security boundary — images and PDFs are immutable, write-once rows whose storage path is pinned by a check constraint to user_id/note_id/attachment_id.ext, so RLS on the first path segment makes owning the row and owning the object the same claim by construction. A 250 MB quota is enforced by a trigger under a per-user advisory lock.",
      "Deliberate restraint on privacy — PDF text is extracted client-side, handed to the classifier, and discarded rather than indexed; there is no OCR anywhere; browsers hold only the publishable key behind RLS, and service-role and OpenAI keys never leave the server.",
    ],
    caseStudy: {
      problem:
        "Notes apps make you do the filing, and folders rot because organizing by hand is exactly the chore people skip. They also conflate two different activities — capturing a thought and reviewing one — so the same editor that should quietly hold a half-written idea is the one re-classifying and re-saving it while you type.",
      approach:
        "Split capture from review into two editors with deliberately different persistence rules, then make categorization a vector problem rather than a prompt. Every note and category is embedded (OpenAI text-embedding-3-small); a Postgres RPC blends category similarity with a time-decayed vote from the user's own recent notes; confidence thresholds pick the interaction; and an LLM is consulted only for near-ties inside a 0.02 margin. Corrections feed a Postgres-native job queue that reinforces each category's semantic anchors. The whole thing ships twice — a Next.js 16 web app and a native SwiftUI client — over one Supabase project, with everything the two share ported as pure, separately-tested functions.",
      result:
        "A shipped product: live on the App Store as an offline-first native iOS app and on the web at petal-notes.com, built over ~20k lines of TypeScript and ~22k of Swift across 26 SQL migrations and 37 test suites. Categorization that improves with use while making almost no model calls, a fault-tolerant background job system living entirely inside Postgres, and a capture path engineered so a killed tab, a lost response, or a switched device doesn't cost you a thought.",
    },
    media: [
      {
        type: "image",
        src: "/images/petal.png",
        alt: "Petal — plant your thoughts (petal-notes.com)",
      },
    ],
    links: [
      {
        label: "Download on the App Store",
        href: "https://apps.apple.com/app/petal-notes/id6785715493",
        kind: "appstore",
      },
      { label: "petal-notes.com", href: "https://petal-notes.com", kind: "external" },
      // TODO: point at the dedicated Petal repo when it's public
      // (currently the GitHub profile).
      { label: "GitHub", href: "https://github.com/theGeekyBoi", kind: "repo" },
    ],
  },
  // --------------------------------------------------------------------------
  {
    slug: "birdseye",
    title: "BirdsEye",
    subtitle: "Vision-based autonomous rover, sim-to-real",
    featured: true,
    tags: ["Robotics", "ML", "Embedded", "Research"],
    role: "Team Lead & Lead Programmer",
    dates: "Spring 2026 · ECE 4524",
    summary:
      "An autonomous rover that navigates to a target using only an overhead camera — a Double DQN trained in simulation and transferred to physical hardware via a custom computer-vision perception pipeline.",
    metrics: [
      { value: "100%", label: "sim-to-real success rate (50/50 episodes)" },
      { value: "22-dim", label: "state vector from vision alone" },
    ],
    highlights: [
      "Led a 5-person team as Team Lead and Lead Programmer — owning the PyGame reinforcement-learning environment, the Double DQN, and the integration of the trained model into the physical rover.",
      "Computer-vision perception pipeline — dual-range HSV masking, contour and min-area-rect fitting, and a white-tape heading marker reconstruct a 22-dimensional state (car corners, heading, target position, wall distances) from a raw 1920×1080 camera frame.",
      "State-space generation: designed the normalized 22-feature state representation and reward ruleset that let a compact MLP (256-256-128) learn navigation without raw pixels or convolutions.",
      "Double DQN trained over ~4000 episodes with experience replay, a target network, epsilon-greedy exploration, Huber loss, and gradient clipping — decoupling action selection from evaluation to curb Q-value overestimation.",
      "Sim-to-real transfer: a calibration script aligned simulation linear/angular velocities to the rover's real motion, and temporal heading smoothing plus a 2.5° deadband stabilized closed-loop control on physical hardware (Arduino Uno, L289n driver, HC-05 Bluetooth).",
    ],
    caseStudy: {
      problem:
        "Autonomous navigation usually leans on expensive per-robot sensor suites, with cost scaling linearly for every robot added. BirdsEye asks whether a single cheap overhead camera and a learned policy can drive a rover to a goal in real time — a proof of concept that scales to settings like warehouses.",
      approach:
        "Train a Double Deep Q-Network in a calibrated PyGame simulation, then transfer the policy to a 3D-printed RC rover. Since a real system has no ground-truth state, a computer-vision pipeline reconstructs the same 22-dimensional state vector the agent trained on — isolating the rover with HSV color masks, fitting a rotated bounding box, recovering heading from a tape marker, and locating the target — and feeds it to the model, which issues discrete actions over Bluetooth.",
      result:
        "A 100% success rate across 50 real-world episodes (average reward 108.97, ~26.6 steps to target) with smooth, collision-free trajectories — confirming that a structured state representation plus classical vision can bridge the sim-to-real gap on low-cost hardware.",
    },
    media: [
      {
        type: "image",
        src: "/images/birdseye.png",
        alt: "The BirdsEye rover and its green cylindrical target",
      },
    ],
    links: [
      {
        label: "View final report",
        href: "/documents/birdseye-final-report.pdf",
        kind: "document",
      },
      {
        label: "View presentation",
        href: "/documents/birdseye-presentation.pptx",
        kind: "document",
      },
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
  "iOS",
  "Impact",
  "Research",
];
