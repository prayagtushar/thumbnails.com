import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0e14",
        ember: "#ff4d2e",
        haze: "#f4f0ea",
        accent: "#ffe14d"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 77, 46, 0.35)"
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out both"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
