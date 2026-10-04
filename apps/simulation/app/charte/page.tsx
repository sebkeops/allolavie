import type { Metadata } from "next";
import { PageAnnexe } from "../_components/PageAnnexe";
import { pagesAnnexes } from "@/content/site";

const page = pagesAnnexes.charte;

export const metadata: Metadata = { title: `${page.titre} — Allo la Vie` };

export default function Page() {
  return <PageAnnexe {...page} />;
}
