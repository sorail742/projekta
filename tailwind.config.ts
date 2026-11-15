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
        // Design tokens extraits directement des logos officiels PROJEKTA
        primary: {
          DEFAULT: "#4FA764", // Vert végétal du logo (#58A766 / #4FA764)
          50: "#F2F9F4",
          100: "#E3F3E7",
          200: "#C6E7CD",
          300: "#A2D7AC",
          400: "#7BC389",
          500: "#4FA764",
          600: "#418F53",
          700: "#347242",
          800: "#275532",
          900: "#1B3922",
          hover: "#459758",
          subtle: "#F0F8F3",
        },
        secondary: {
          DEFAULT: "#3D74AC", // Bleu technologique de l'arc (#3D74AC / #3871A8)
          50: "#F2F7FC",
          100: "#E4EFF8",
          200: "#C6DCF0",
          300: "#A0C4E6",
          400: "#6FA4D8",
          500: "#3D74AC",
          600: "#316091",
          700: "#264C73",
          800: "#1C3754",
          900: "#132336",
          hover: "#346698",
          subtle: "#EDF4FA",
        },
        ink: {
          DEFAULT: "#181818", // Noir doux du tracé et du lettrage PROJEKTA
          pure: "#0D0D0D",
          deep: "#121212",
          soft: "#262626",
          muted: "#666666",
          light: "#909090",
          border: "#E8E9EC",
          divider: "rgba(24, 24, 24, 0.07)",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F8FA", // Gris très clair prescrit par la charte
          subtle: "#EFF1F5",
          dark: "#141414",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          "Montserrat",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.03em",
        tight: "-0.015em",
        normal: "0em",
        wide: "0.06em",
        wider: "0.14em",
        widest: "0.22em",
        tagline: "0.26em", // Signature "INNOVATION • TECHNOLOGY • PROJECTS"
      },
      boxShadow: {
        soft: "0 2px 12px -2px rgba(24, 24, 24, 0.04), 0 1px 3px -1px rgba(24, 24, 24, 0.02)",
        card: "0 10px 30px -5px rgba(24, 24, 24, 0.04), 0 1px 2px 0 rgba(24, 24, 24, 0.02)",
        "card-hover": "0 20px 40px -10px rgba(24, 24, 24, 0.08), 0 1px 3px 0 rgba(24, 24, 24, 0.03)",
        glass: "0 8px 32px 0 rgba(24, 24, 24, 0.05)",
      },
      borderWidth: {
        thin: "1px",
      },
    },
  },
  plugins: [],
};

export default config;
