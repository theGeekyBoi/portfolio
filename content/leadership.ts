// ============================================================================
// LEADERSHIP & INITIATIVES — the cards in the Leadership section.
// To add one: copy an object, change the values. Order = display order.
// `stat` is the big number shown on the card (optional).
// ============================================================================

export type LeadershipItem = {
  title: string;
  role: string;
  dates?: string;
  description: string;
  stat?: { value: string; label: string };
  link?: { label: string; href: string };
};

export const leadership: LeadershipItem[] = [
  {
    title: "Virginia Tech Competitive Robotics Organization",
    role: "President",
    dates: "Feb 2026 – Present",
    description:
      "Leads Virginia Tech's largest robotics organization — directing strategy and technical vision across electrical, mechanical, and software systems, after progressing from Member to VP of Engineering to President.",
    stat: { value: "140+", label: "engineers · 7 teams · 4 divisions" },
    link: { label: "Visit VT CRO", href: "https://vtcro.org" },
  },
  {
    title: "Courses By You",
    role: "Founder & Teacher",
    description:
      "Designed and taught certified workshops on coding, robotics, and debate, with partnerships including FuturoKnowledge and the Ratna Nidhi Charitable Trust — all money raised donated to give underprivileged students access to technology.",
    stat: { value: "350+", label: "students taught across 10+ courses" },
    link: { label: "coursesbyyou.com", href: "https://coursesbyyou.com" },
  },
  {
    title: "Plasmassist",
    role: "Founder",
    description:
      "Built a plasma-donation platform during COVID-19 — a live database of 175+ recipients and 25+ donors, run with a team of 14 volunteers.",
    stat: { value: "15", label: "lives saved via plasma aid" },
  },
  {
    title: "Covassist",
    role: "Founder",
    description:
      "A COVID-19 resource platform with an interactive resource-finder map and live database, run with a team of 11 volunteers.",
    stat: { value: "1,500+", label: "users reached" },
  },
  {
    title: "Terra House",
    role: "House Captain (2021 & 2022)",
    description:
      "Led 120 students to win the Annual House Cup — ending a 9-year drought.",
    stat: { value: "9-year", label: "drought ended" },
  },
];
