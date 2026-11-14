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
        projekta: {
          deep: "#063b27",      // Vert profond d'accent institutionnel
          primary: {
            50: "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",      // Vert profond principal
            950: "#022c22",
          },
          accent: {
            light: "#6ee7b7",
            DEFAULT: "#10b981",
            hover: "#059669",
          },
          dark: {
            DEFAULT: "#0f172a",
            muted: "#334155",
            card: "#1e293b",
          },
          surface: {
            light: "#f8fafc",
            card: "#ffffff",
            subtle: "#f1f5f9",
          }
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
