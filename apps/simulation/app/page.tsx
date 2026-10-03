import { BarreMobile } from "./_components/BarreMobile";
import { Contact } from "./_components/Contact";
import { DonneesStructurees } from "./_components/DonneesStructurees";
import { EnTete } from "./_components/EnTete";
import { PiedDePage } from "./_components/PiedDePage";
import {
  Accroche,
  Faq,
  Maieusthesie,
  Pourquoi,
  QuiSuisJe,
  Seances,
  Temoignages,
  Zone,
} from "./_components/Sections";

/* Ordre des sections validé : PARTI-PRIS.md §6. */
export default function Page() {
  return (
    <>
      <DonneesStructurees />
      <EnTete />
      <main>
        <Accroche />
        <Pourquoi />
        <Maieusthesie />
        <QuiSuisJe />
        <Seances />
        <Temoignages />
        <Faq />
        <Zone />
        <Contact />
      </main>
      <PiedDePage />
      <BarreMobile />
    </>
  );
}
