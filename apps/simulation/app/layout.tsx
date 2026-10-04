import type { Metadata, Viewport } from "next";
import { Caveat, Lora, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { afficherBandeauSimulation, bandeau, meta } from "@/content/site";

// Polices auto-hébergées : next/font les télécharge au build et les sert depuis
// le site (aucune requête tierce au runtime, cf. SIGWEB.md §3).
const titre = Lora({ subsets: ["latin"], variable: "--font-titre", display: "swap" });
const texte = Nunito_Sans({ subsets: ["latin"], variable: "--font-texte", display: "swap" });
// Manuscrite, pour les accents seulement (émotions, témoignage, citations) — dans l'esprit
// du logo. Jamais pour le texte courant ni les formulaires.
const manuscrite = Caveat({ subsets: ["latin"], variable: "--font-manuscrite", display: "swap" });

/*
 * GO-LIVE : la simulation reste en `noindex` — c'est une démo jetable. Le vrai
 * site (apps/site) portera son propre verrou d'indexation (cf. SIGWEB.md §16).
 */
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false },
};

// Viewport standard : le zoom reste autorisé (accessibilité).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#156669",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable} ${manuscrite.variable}`}>
      <body className="font-sans antialiased">
        {afficherBandeauSimulation && (
          <p className="bg-ink px-4 py-1.5 text-center text-sm text-paper">{bandeau}</p>
        )}
        {children}
      </body>
    </html>
  );
}
