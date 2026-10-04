import type { Config } from "tailwindcss";

/**
 * Thème SCOPÉ à apps/simulation (ne rien imposer au futur site de prod).
 *
 * Couleurs = jetons déclarés en triplets RVB dans app/globals.css et référencés
 * via `rgb(var(--x) / <alpha-value>)` (modificateurs d'opacité préservés).
 * Palette et contrastes : PARTI-PRIS.md §3.
 */
const jeton = (nom: string) => `rgb(var(--${nom}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: {
        paper: jeton("paper"),
        pale: jeton("pale"),
        lime: jeton("lime"),
        night: jeton("night"),
        leaf: jeton("leaf"),
        ink: jeton("ink"),
        muted: jeton("muted"),
        teal: { DEFAULT: jeton("teal"), deep: jeton("teal-deep") },
        peach: jeton("peach"),
        orange: jeton("orange"),
        terra: jeton("terra"),
      },
      fontFamily: {
        serif: ["var(--font-titre)", "Georgia", "serif"],
        sans: ["var(--font-texte)", "system-ui", "sans-serif"],
        manuscrite: ["var(--font-manuscrite)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
