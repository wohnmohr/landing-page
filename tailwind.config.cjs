/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        mist: "var(--color-mist)",
        sand: "var(--color-sand)",
        slate: "var(--color-slate)",
        accent: "var(--color-accent)",
        "accent-deep": "var(--color-accent-deep)",
        coral: "var(--color-coral)",
        gold: "var(--color-gold)",
        aqua: "var(--color-aqua)",
        line: "var(--color-line)",
      },
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        sans: ["Source Sans 3", "sans-serif"],
      },
      screens: {
        midmd: "880px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "hero-pan": {
          "0%, 100%": { transform: "scale(1) translate3d(0, 0, 0)" },
          "50%": { transform: "scale(1.04) translate3d(-1.5%, 1%, 0)" },
        },
        "accent-line": {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.85s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1s ease-out both",
        "hero-pan": "hero-pan 18s ease-in-out infinite",
        "accent-line": "accent-line 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
