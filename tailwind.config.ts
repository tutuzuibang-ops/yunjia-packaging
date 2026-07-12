import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans SC",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      colors: {
        ink: "#17202a",
        marine: "#0b5563",
        mint: "#4db6ac",
        citrus: "#f3b33d",
        paper: "#f7f6f1"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 32, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
