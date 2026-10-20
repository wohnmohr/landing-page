/** @type {import('tailwindcss').Config} */

// wohnmohr design system.
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
        sb: token("sb"),
        nl: token("nl"),
        cma: token("cma"),
        mtp: token("mtp"),
        line: "rgb(var(--ink) / 0.14)",
        "line-dark": "rgb(255 255 255 / 0.1)",

      },
      fontFamily: {
        display: ['"Mona Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Mona Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.6rem, 6.2vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.1rem, 4.4vw, 3.75rem)", { lineHeight: "1.04", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(1.6rem, 2.8vw, 2.4rem)", { lineHeight: "1.12", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(1.25rem, 1.9vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        brand: "16px",
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
        loop: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
