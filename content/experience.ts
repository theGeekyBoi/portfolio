// ============================================================================
// EXPERIENCE — the timeline in the Experience section.
// To add a job: copy an object, change the values. Order here = order shown.
// `roles` lets one organization show a progression (newest role first).
// ============================================================================

export type Experience = {
  org: string;
  location: string;
  dates: string; // overall span shown next to the org
  roles: { title: string; dates?: string }[]; // newest first
  bullets: string[];
  link?: { label: string; href: string };
};

export const experience: Experience[] = [
  {
    org: "Micron Technology",
    location: "Manassas, VA",
    dates: "May 2025 – Aug 2025",
    roles: [{ title: "SPC & Run-to-Run Engineer (Intern)" }],
    bullets: [
      "Designed and built a proprietary Change Point Monitoring (CPM) system for run-to-run automation — real-time detection of unintended process shifts from live fab data, deployed globally across Micron fabs.",
      "Developed ARIMA time-series models on GeRM RPA data to surface trends, shifts, and clamps early, flagging potential wafer-processing issues before they affected yield.",
      "Automated Metric Data Reports with Tableau API pipelines, eliminating manual weekly report assembly for SPC engineering teams.",
    ],
  },
  {
    org: "Virginia Tech Competitive Robotics Organization",
    location: "Blacksburg, VA",
    dates: "Sep 2023 – Present",
    roles: [
      { title: "President", dates: "Feb 2026 – Present" },
      { title: "VP of Engineering", dates: "Aug 2025 – Feb 2026" },
      { title: "ECE & Software Lead — WorkCell", dates: "2025 – Feb 2026" },
      { title: "Engineer — WorkCell", dates: "Aug 2024 – 2025" },
      { title: "Engineer — SoutheastCon", dates: "Sep 2023 – May 2024" },
    ],
    bullets: [
      "Leads 140+ engineers across 12 teams (7 design, 5 support) at Virginia Tech's largest active ECE organization — grown from ~75 engineers and 5 teams since stepping into leadership in Aug 2025.",
      "Raised over $65,000 as President and grew the organization from two lab spaces to four — the capacity needed to absorb that growth without degrading the experience for the engineers already there.",
      "Helped launch EmbArch, VT CRO's first ECE-only team — an advanced embedded architecture team created with ECE 4534 and Dr. Leyla Nazhandali, giving students a direct path from a departmental course into a working engineering team.",
      "Grew K-12 outreach from 670 students a year to 1,600+, and represents the Bradley Department to distinguished alumni, visitors, and department events.",
      "ECE & Software Lead for WorkCell, the award-winning autonomous 3D print farm; manages GitHub repositories and engineering workflow across all 12 teams.",
      "Started as a freshman engineer on the IEEE SoutheastCon hardware team — 2nd place in the Hardware Design Competition.",
    ],
    link: { label: "Visit VT CRO", href: "https://vtcro.org" },
  },
  {
    org: "Virginia Tech",
    location: "Blacksburg, VA",
    dates: "Aug 2024 – Present",
    roles: [
      {
        title: "Lead Teaching Assistant — ECE 4534 (Embedded System Design)",
        dates: "Aug 2026 – Present",
      },
      {
        title: "Undergraduate Teaching Assistant — ECE 2564 & ECE 2514",
        dates: "Aug 2024 – Present",
      },
    ],
    bullets: [
      "Lead TA for ECE 4534 (Embedded System Design), Virginia Tech's most advanced embedded course — contributes to the syllabus and assignments, and helps teach the course alongside the instructor.",
      "Owns the project track that makes up ~70% of the course: the main point of contact for every team, guiding project scoping and planning, tracking milestones and deadlines, and debugging hardware and firmware alongside students.",
      "Selected for the role after being chosen for the ECE 4534 pilot cohort, excelling in both the embedded systems and advanced embedded systems courses, and TA'ing ECE 2564 — plus the systems work on VT CRO project teams.",
      "TA for ECE 2564 (Embedded Systems) and ECE 2514 (Computational Engineering) — foundational embedded systems, computer architecture, and C/C++.",
      "Leads in-person lab sessions and mentors students in microcontroller fundamentals, hardware/software debugging, Git, CMake, and logic visualization.",
    ],
  },
];
