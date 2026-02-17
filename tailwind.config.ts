import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4A574",
          dark: "#B8956A",
          light: "#E8C9A8",
        },
        secondary: {
          DEFAULT: "#2D5A27",
          dark: "#1E3D1A",
          light: "#3D7A35",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          dark: "#F0EBE3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
