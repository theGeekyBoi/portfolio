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
      { title: "Member", dates: "Sep 2023 – Aug 2025" },
    ],
    bullets: [
      "Leads 140+ engineers across 7 technical design teams and 4 operational divisions at Virginia Tech's largest robotics organization.",
      "Directs organizational strategy and technical vision for multidisciplinary robotics projects spanning electrical, mechanical, and software systems.",
      "ECE Lead for WorkCell, the award-winning autonomous 3D print farm.",
    ],
    link: { label: "Visit VT CRO", href: "https://vtcro.org" },
  },
  {
    org: "Virginia Tech",
    location: "Blacksburg, VA",
    dates: "Aug 2024 – Present",
    roles: [{ title: "Undergraduate Teaching Assistant" }],
    bullets: [
      "TA for ECE 2564 (Embedded Systems) and ECE 2514 (Computational Engineering) — foundational embedded systems, computer architecture, and C/C++.",
      "Leads in-person lab sessions and mentors students in microcontroller fundamentals and hardware/software debugging.",
      "Supports student development with Git, CMake, and logic-visualization techniques.",
    ],
  },
];
