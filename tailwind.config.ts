import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#060D1A",
        dark: "#0C1628",
        card: "#111F35",
        border: "rgba(255,255,255,0.1)",
        orange: { DEFAULT: "#EA580C", 2: "#C2410C" },
        gold: "#F59E0B",
        text: { DEFAULT: "#F1F5F9", 2: "#CBD5E1", 3: "#64748B" },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.7)" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
        pulseSoft: "pulseSoft 2s infinite",
        ticker: "ticker 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
