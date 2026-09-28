/** @type {import('tailwindcss').Config} */

// wohnmohr design system — "The Loop".
// Colour values live in src/styles/brand.css as RGB channels so every token
// supports opacity modifiers (e.g. bg-ink/60, border-lime/40).
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: token("ink"),
        "ink-2": token("ink-2"),
        "ink-3": token("ink-3"),
        paper: token("paper"),
        "paper-2": token("paper-2"),
        fog: token("fog"),
        graphite: token("graphite"),
        lime: token("lime"),
        "lime-deep": token("lime-deep"),
        cobalt: token("cobalt"),
        "cobalt-deep": token("cobalt-deep"),
        "cobalt-soft": token("cobalt-soft"),
        line: "rgb(var(--ink) / 0.12)",
        "line-dark": "rgb(255 255 255 / 0.1)",

        // Legacy aliases so older pages inherit the new brand.
        mist: token("paper"),
        sand: token("paper-2"),
        slate: token("graphite"),
        accent: token("cobalt"),
        "accent-deep": token("cobalt-deep"),
        coral: token("cobalt"),
        gold: token("lime"),
        aqua: token("cobalt-soft"),
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6.4vw, 5.5rem)", { lineHeight: "0.95", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.25rem)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(1.75rem, 3.4vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(1.35rem, 2.2vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        brand: "1.25rem",
      },
      opacity: {
        4: "0.04",
        6: "0.06",
        12: "0.12",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      screens: {
        midmd: "880px",
      },
      transitionTimingFunction: {
        loop: "cubic-bezier(0.22, 1, 0.36, 1)",
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
        "accent-line": {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        "hero-pan": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.85s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1s ease-out both",
        "accent-line": "accent-line 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "hero-pan": "hero-pan 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
