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
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        minimal: "0 2px 8px rgba(8, 14, 36, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
