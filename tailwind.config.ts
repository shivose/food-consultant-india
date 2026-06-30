import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        accent: "#16A34A",
        background: "#F8FAFC",
        card: "#FFFFFF",
        "text-dark": "#1E293B",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        "soft-lg": "0 8px 40px -8px rgba(15, 23, 42, 0.12)",
        card: "0 2px 16px -2px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
