import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: "#E8806B",
          light: "#F2A088",
          dark: "#C9684F",
        },
        beige: {
          DEFAULT: "#F5EFE6",
          dark: "#EFE3D3",
          deep: "#E3D2BC",
        },
        ink: "#5C4A3D",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out forwards",
        "soft-pulse": "soft-pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
