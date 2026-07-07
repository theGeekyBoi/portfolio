// ============================================================================
// SKILLS — grouped by domain. To add a skill: add a string to a group's
// `items`. To add a group: copy a whole object. Order = display order.
// `marquee` is the single scrolling row of highlight skills at the top of
// the section — keep it to ~12–16 short items.
// ============================================================================

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "C",
      "C++",
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "SQL (PostgreSQL / PL-pgSQL)",
      "HTML & CSS",
    ],
  },
  {
    title: "Embedded & hardware",
    items: [
      "Firmware development",
      "Real-time systems",
      "Control architectures",
      "Sensor / actuator control",
      "Communication protocols",
      "Power electronics (boost converters, PI control)",
      "Arduino / Arduino Q",
      "Raspberry Pi",
      "Jetson Nano",
      "ESP32",
      "MSP432",
      "Bluetooth",
    ],
  },
  {
    title: "Robotics & AI/ML",
    items: [
      "ROS",
      "Computer vision",
      "AprilTags",
      "PyTorch",
      "Pandas",
      "ARIMA / time-series modeling",
      "PCA (custom C implementation)",
      "OpenAI API",
      "Vector embeddings & semantic search",
      "pgvector",
      "LLM integration",
    ],
  },
  {
    title: "Web & data",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "pgmq / pg_cron / pg_net",
      "Deno & edge functions",
      "REST API design",
      "Tableau API",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git / GitHub",
      "VS Code",
      "CMake",
      "Fusion 360",
      "OnShape",
      "KiCAD",
      "ESLint",
      "Supabase migrations",
    ],
  },
];

// The infinite-scrolling highlight row at the top of the Skills section.
export const skillMarquee: string[] = [
  "C / C++",
  "Python",
  "TypeScript",
  "Embedded firmware",
  "ROS",
  "Computer vision",
  "PyTorch",
  "Control systems",
  "Next.js",
  "PostgreSQL",
  "Supabase",
  "Vector embeddings",
  "ARIMA modeling",
  "KiCAD",
];
