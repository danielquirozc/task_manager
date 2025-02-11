import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        "geist-mono": ["Geist Mono", "monospace"],
      },
      colors: {
        "light": "#f2f2f2",
        "dark": "#333",
      }
    },
  },
  plugins: [],
} satisfies Config;
