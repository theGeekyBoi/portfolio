// ============================================================================
// RECOGNITION — the animated stat cards + the awards list.
// `stats` are the big count-up numbers (value is split into number + suffix
// automatically, e.g. "140+" animates to 140 then shows the +).
// `awards` is a simple list: copy a line to add one. Order = display order.
// ============================================================================

export type Stat = {
  value: string; // e.g. "0.2mm", "140+", "350+", "15"
  label: string;
};

export type Award = {
  title: string;
  detail?: string; // where / when / for what
};

export const stats: Stat[] = [
  { value: "0.2mm", label: "WorkCell gantry accuracy" },
  { value: "140+", label: "engineers led at VT CRO" },
  { value: "350+", label: "students taught" },
  { value: "15", label: "lives saved via Plasmassist" },
];

export const awards: Award[] = [
  {
    title: "Gold Award — National Robotics Challenge 2025",
    detail: "Workcell category · WorkCell",
  },
  {
    title: "Honda Innovation Award in Manufacturing",
    detail: "National Robotics Challenge 2025 · WorkCell",
  },
  {
    title: "Selected to exhibit at OpenSauce 2026",
    detail: "WorkCell",
  },
  {
    title: "Winner ($1,500) — NFTE World Series of Innovation",
    detail: "1st place, MetLife Foundation Good Health & Wellbeing Challenge, 2022–23 · MADS",
  },
  {
    title: "Peer-reviewed publication — IJISRT",
    detail: "September 2024 · IJISRT24AUG1182",
  },
  {
    title: "Best in Course — Integrated Design Project (ECE 2804)",
    detail: "Virginia Tech, Spring 2025 · Wireless Sensor Node",
  },
  {
    title: "Advanced Embedded Systems pilot cohort",
    detail: "Selected for the pilot offering of ECE 4534, Virginia Tech",
  },
  {
    title: "Speaker — NFTE UN Global Goals Conversation 2023",
  },
  {
    title: "Commendation letter — Nestlé Corporate Affairs",
    detail: "MADS pitch at the Moga factory",
  },
  {
    title: "Dean's List '23, '24, '25 · Honors College",
    detail: "Virginia Tech",
  },
];
