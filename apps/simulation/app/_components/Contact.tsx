import { BoutonAppeler } from "./Boutons";
import { FormulaireContact } from "./FormulaireContact";
import { Section } from "./Section";
import { contact, formulaire } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" titre={formulaire.titre} fond="leaf" vague={2}>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="min-w-0">
          <p>{formulaire.intro}</p>
          <BoutonAppeler texte={contact.telephoneAffiche} className="mt-6" />
          <p className="mt-4">
            <a href={`mailto:${contact.email}`} className="inline-flex min-h-12 items-center font-bold text-teal underline underline-offset-4">
              {contact.email}
            </a>
          </p>
          <p className="mt-6 font-serif italic text-muted">{contact.phraseContact}</p>
          <p role="note" className="mt-8 rounded-2xl bg-paper p-4 text-base">
            {formulaire.urgence}
          </p>
        </div>
        <FormulaireContact />
      </div>
    </Section>
  );
}
