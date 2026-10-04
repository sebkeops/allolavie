import { contact, faq, meta, seances } from "@/content/site";

/*
 * JSON-LD : uniquement des données fournies (SIGWEB.md §7). Ni adresse, ni
 * `geo`, ni `areaServed` tant que zone et adresse ne sont pas tranchées
 * (PARTI-PRIS.md §8). Pas de note agrégée : aucune plateforme d'avis.
 */
export function DonneesStructurees() {
  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Allo la Vie",
    description: meta.description,
    telephone: "+33 6 76 84 36 48",
    email: contact.email,
    founder: { "@type": "Person", name: contact.nomComplet },
    makesOffer: seances.formules.map((f) => ({
      "@type": "Offer",
      name: `${f.titre} (${f.duree})`,
      price: f.tarif.replace(/[^\d]/g, ""),
      priceCurrency: "EUR",
    })),
  };

  const questions = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.questions
      .filter((q) => !q.aValider)
      .map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.reponse },
      })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(questions) }} />
    </>
  );
}
