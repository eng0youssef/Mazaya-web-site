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
        brand: {
          navy: "#0A507A",
          "navy-hover": "#083E5F",
          "navy-dark": "#06324D",
          "navy-deep": "#032841",
          gold: "#F2C12E",
          "gold-hover": "#DEAA20",
          "gold-dark": "#6F5400",
          "gold-light": "#FEF9C3",
          ice: "#F0F7FB",
          "ice-subtle": "#F4F9FC",
          canvas: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0",
          text: "#0F172A",
          muted: "#475569",
        },
      },
      fontFamily: {
        arabic: ["var(--font-ibm-plex-arabic)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgba(10, 80, 122, 0.04), 0 1px 2px -1px rgba(10, 80, 122, 0.02)",
        card: "0 4px 20px -2px rgba(10, 80, 122, 0.06), 0 2px 6px -1px rgba(10, 80, 122, 0.04)",
        elevated: "0 12px 30px -4px rgba(10, 80, 122, 0.10), 0 4px 12px -2px rgba(10, 80, 122, 0.05)",
        gold: "0 8px 25px -4px rgba(242, 193, 46, 0.35)",
        navy: "0 8px 25px -4px rgba(10, 80, 122, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
