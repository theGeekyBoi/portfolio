// ============================================================================
// VT CRO — the dedicated Virginia Tech Competitive Robotics section.
//
// This is the one section built around a single organization, because four
// years of it is the spine of the Virginia Tech story. Everything here feeds
// components/sections/VTCRO.tsx:
//   - `intro`   : the two paragraphs beside the logo
//   - `growth`  : the before/after table (Aug 2025 = the start of leadership)
//   - `journey` : the role progression, oldest first
//   - `impact`  : what the leadership work changed, beyond the org itself
// ============================================================================

export type GrowthRow = {
  label: string;
  before: string;
  after: string;
};

export type JourneyStage = {
  dates: string;
  role: string;
  team?: string; // the team or scope the role sat on
  body: string;
  note?: string; // a result worth calling out (award, outcome)
};

export type ImpactItem = {
  title: string;
  body: string;
};

export const vtcro = {
  name: "Virginia Tech Competitive Robotics Organization",
  short: "VT CRO",
  dates: "Sep 2023 – Present",
  link: { label: "Visit VT CRO", href: "https://vtcro.org" },
  logo: {
    src: "/images/vtcro-wordmark.png",
    alt: "Virginia Tech Competitive Robotics Organization",
  },

  lede: "Four years, four roles — from a freshman engineer on a SoutheastCon hardware team to President of what is now the largest active ECE organization at Virginia Tech.",

  intro: [
    "VT CRO is the part of Virginia Tech I've given the most to and gotten the most out of. I joined as a freshman engineer in 2023, built competition hardware, led the electrical and software side of an award-winning autonomous manufacturing cell, and then spent two terms running the organization — first as Vice President of Engineering, now as President.",
    "It's no longer a club that runs beside the curriculum. It's the default destination for ECE majors who want to apply what they learn to real systems, and the work coming out of it now represents the department externally.",
  ],

  // The honest before/after: what the organization looked like when I stepped
  // into leadership (Aug 2025) versus today.
  growth: {
    beforeLabel: "Aug 2025",
    afterLabel: "Today",
    rows: [
      { label: "Engineers", before: "~75", after: "140+" },
      { label: "Teams", before: "5", after: "12 (7 design · 5 support)" },
      { label: "K-12 students reached / yr", before: "670", after: "1,600+" },
    ] as GrowthRow[],
    funding: {
      value: "$32,500",
      label:
        "secured in funding, plus the physical space to sustain the growth — both were fights, and both were won in time to matter.",
    },
  },

  journey: [
    {
      dates: "Sep 2023 – May 2024",
      role: "Engineer",
      team: "SoutheastCon Hardware Competition",
      body: "Joined as a freshman engineer on the IEEE SoutheastCon hardware team, building the competition robot end to end — electronics, fabrication, and the debugging that happens the night before it ships.",
      note: "2nd place — SoutheastCon Hardware Design Competition",
    },
    {
      dates: "Aug 2024 – 2025",
      role: "Engineer",
      team: "WorkCell",
      body: "Moved onto WorkCell, the organization's autonomous multi-printer 3D manufacturing cell — working across firmware, sensor and actuator control, and the communication layer tying the gantry, printers, and storage together.",
    },
    {
      dates: "2025 – Feb 2026",
      role: "ECE & Software Lead · VP of Engineering",
      team: "WorkCell · organization-wide",
      body: "Took the electrical and software side of WorkCell as its lead — owning the closed-loop vision calibration, the print queue, and the integration of firmware, backend, and mechanical systems — and stepped up to Vice President of Engineering (Aug 2025) with technical direction across every team.",
      note: "Gold Award + Honda Innovation Award, National Robotics Challenge",
    },
    {
      dates: "Feb 2026 – Present",
      role: "President",
      team: "140+ engineers · 12 teams",
      body: "Runs the whole organization: strategy, technical vision, funding, space, recruitment, and the leadership transitions that keep it alive year over year — including my own handoff out of the VP seat. Also manages the GitHub repositories and engineering workflow across all 12 teams.",
    },
  ] as JourneyStage[],

  impact: [
    {
      title: "Built the curriculum into the organization",
      body: "Helped launch EmbArch, VT CRO's first ECE-only team — an advanced embedded architecture team created with ECE 4534 (Embedded System Design) and Dr. Leyla Nazhandali. It gives students a direct path from a departmental course into a working engineering team, and it's a template other courses could follow.",
    },
    {
      title: "Structure beyond competition",
      body: "Innovation, catering, startup, and product-based teams now sit alongside the traditional design teams, so there's a place for engineers whose work doesn't end at a competition scoresheet.",
    },
    {
      title: "Turned funding into capacity",
      body: "The $32,500 and the additional lab space weren't ends in themselves — they're what let the organization absorb nearly twice as many engineers without the experience degrading for the students already here.",
    },
    {
      title: "Widened the pipeline into ECE",
      body: "K-12 outreach grew from 670 students a year to more than 1,600, reaching students well before they choose a major.",
    },
    {
      title: "Represented the department externally",
      body: "Delivered presentations and pitches to distinguished ECE alumni, spoke at department events about the robotics community being built here, and hosted visitors and alumni in the lab spaces.",
    },
  ] as ImpactItem[],
} as const;
