import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Paleta Subida com Vanessa
        ink: {
          DEFAULT: "#05030A",
          deep: "#020108",
          soft: "#0B0814",
        },
        royal: {
          50: "#F4EDFF",
          100: "#E4D2FF",
          200: "#C7A5FF",
          300: "#A678FF",
          400: "#8B4DFF",
          500: "#7C3AED",
          600: "#6826D9",
          700: "#4F1AA8",
          800: "#371175",
          900: "#1F0A45",
        },
        gold: {
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFD970",
          300: "#FBC740",
          400: "#E9B026",
          500: "#D4961A",
          600: "#A87410",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-purple":
          "radial-gradient(circle at 30% 20%, rgba(124,58,237,0.25), transparent 60%)",
        "radial-gold":
          "radial-gradient(circle at 80% 80%, rgba(212,150,26,0.18), transparent 55%)",
        "gradient-hero":
          "linear-gradient(135deg, #05030A 0%, #150A2E 50%, #05030A 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(124,58,237,0.6)",
        "glow-gold": "0 0 50px -10px rgba(212,150,26,0.55)",
        "glow-soft": "0 0 80px -20px rgba(166,120,255,0.35)",
        premium: "0 30px 80px -30px rgba(124,58,237,0.5)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2.2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
