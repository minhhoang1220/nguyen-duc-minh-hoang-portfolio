import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2D73",
          accent: "#273A86",
          night: "#080E24",
        },
        cream: "#FAF8F2",
        beige: "#ECEAE5",
        card: "#FFFFFF",
        line: "#DFE4E7",
        ink: "#333333",
        muted: "#646670",
        sky: "#9DC4FF",
      },
      fontFamily: {
        sans: ["Inter Display", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        minimal: "0 1px 3px rgba(8, 14, 36, 0.04)",
        card:    "0 2px 8px rgba(8, 14, 36, 0.06)",
        hover:   "0 8px 20px rgba(8, 14, 36, 0.10)",
        modal:   "0 16px 40px rgba(8, 14, 36, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
