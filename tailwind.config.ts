import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "warm-white": "#fbf8f1",
        cotton: "#fffdf8",
        sand: "#dcc7a3",
        beige: "#b99f7c",
        sage: "#8fa58a",
        "soft-blue": "#8fb6c8",
        "deep-blue": "#31596b",
        ink: "#2f342f",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
