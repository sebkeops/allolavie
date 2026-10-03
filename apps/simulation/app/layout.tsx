import type { Metadata, Viewport } from "next";
import "./globals.css";

/*
 * Métadonnées PLACEHOLDER du starter. À compléter au lot 0 (title, description
 * locale, OpenGraph, JSON-LD LocalBusiness) une fois le parti pris validé.
 *
 * GO-LIVE : la simulation reste en `noindex` — c'est une démo jetable. Le vrai
 * site (apps/site) portera son propre verrou d'indexation (cf. SIGWEB.md §16).
 */
export const metadata: Metadata = {
  title: "Simulation — SIGWEB",
  description: "Simulation de refonte (démo non contractuelle).",
  robots: { index: false, follow: false },
};

// Viewport standard : le zoom reste autorisé (accessibilité).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
