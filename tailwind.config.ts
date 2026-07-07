import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark-first palette. One restrained accent (emerald).
        background: "#09090b",
        surface: "#101013",
        raised: "#16161a",
        line: "rgba(255,255,255,0.08)",
        "line-strong": "rgba(255,255,255,0.14)",
        foreground: "#f4f4f5",
        muted: "#a1a1aa",
        faint: "#71717a",
        accent: {
          DEFAULT: "#34d399", // emerald-400
          dim: "#10b981", // emerald-500
          faint: "rgba(52,211,153,0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        // Retro geometry: near-square cards, hairline borders.
        card: "6px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 0.75rem))" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        spotlight: "spotlight 2s ease 0.4s 1 forwards",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
