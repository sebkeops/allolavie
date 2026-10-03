"use client";

import { useState, type FormEvent } from "react";
import { BoutonAppeler } from "./Boutons";
import { formulaire, libelles } from "@/content/site";

/*
 * Simulation (brief §4.3) : `onSubmit` → confirmation côté navigateur, AUCUN
 * envoi réel. Le backend (Resend) relève du site de production.
 */
export function FormulaireContact() {
  const [envoye, setEnvoye] = useState(false);

  function soumettre(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnvoye(true);
  }

  const champ =
    "mt-1 block w-full min-h-12 rounded-2xl border-2 border-sand bg-paper px-4 py-2 text-ink focus:border-teal focus:outline-none";
  const etiquette = "block font-bold text-teal";
  const oblig = <span className="font-normal text-muted"> ({formulaire.obligatoire})</span>;

  if (envoye) {
    return (
      <div role="status" className="rounded-3xl bg-leaf p-6">
        <p className="font-serif text-2xl text-teal">{formulaire.confirmationTitre}</p>
        <p className="mt-2">{formulaire.confirmationTexte}</p>
        <BoutonAppeler texte={libelles.appeler} className="mt-4" />
        <p className="mt-4 text-sm text-muted">{formulaire.noteSimulation}</p>
      </div>
    );
  }

  return (
    <form onSubmit={soumettre} className="grid gap-5 rounded-3xl bg-paper p-6 shadow-sm">
      <div>
        <label htmlFor="nom" className={etiquette}>
          {formulaire.champs.nom}
          {oblig}
        </label>
        <input id="nom" name="nom" required autoComplete="name" className={champ} />
      </div>
      <div>
        <label htmlFor="telephone" className={etiquette}>
          {formulaire.champs.telephone}
          {oblig}
        </label>
        <input id="telephone" name="telephone" type="tel" required autoComplete="tel" inputMode="tel" className={champ} />
      </div>
      <div>
        <label htmlFor="email" className={etiquette}>
          {formulaire.champs.email}
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={champ} />
      </div>
      <div>
        <label htmlFor="type" className={etiquette}>
          {formulaire.champs.typeSeance}
        </label>
        <select id="type" name="type" defaultValue="" className={champ}>
          <option value="" disabled>
            {formulaire.choisir}
          </option>
          {formulaire.optionsSeance.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={etiquette}>
          {formulaire.champs.message}
        </label>
        <textarea id="message" name="message" rows={4} className={champ} />
      </div>
      <div className="flex gap-3">
        <input id="rgpd" name="rgpd" type="checkbox" required className="mt-1 h-6 w-6 shrink-0 accent-teal" />
        <label htmlFor="rgpd" className="text-base">
          {formulaire.rgpdAvant}
          <a href="/confidentialite" className="font-bold text-teal underline underline-offset-2">
            {formulaire.rgpdLien}
          </a>
        </label>
      </div>
      <button type="submit" className="min-h-12 rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-teal-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">
        {formulaire.envoyer}
      </button>
    </form>
  );
}
