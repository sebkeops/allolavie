import type { Config } from "tailwindcss";

/**
 * Thème SCOPÉ à apps/simulation (ne rien imposer au futur site de prod).
 *
 * Les couleurs sont des JETONS neutres par défaut, déclarés en variables CSS
 * (triplets RVB) dans app/globals.css et référencés ici via
 * `rgb(var(--x) / <alpha-value>)` — ce qui préserve les modificateurs d'opacité
 * de Tailwind (`bg-brand/10`). La vraie palette se dérive du logo/identité du
 * client au LOT 0 (voir PARTI-PRIS.md) : il suffit alors de changer les triplets
 * dans globals.css, sans toucher aux composants.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          accent: "rgb(var(--brand-accent) / <alpha-value>)",
        },
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
