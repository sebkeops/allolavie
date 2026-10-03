import { BoutonAppeler, BoutonRdv } from "./Boutons";
import { ImageDouce } from "./ImageDouce";
import { IconeCalendrier, IconeCarte, IconeHorloge, IconeMaison, IconeRepere, IconeTelephone, IconeVisio, Riviere } from "./Icones";
import { Section } from "./Section";
import {
  contact,
  faq,
  hero,
  images,
  libelles,
  maieusthesie,
  pourquoi,
  qui,
  seances,
  temoignages,
  zone,
} from "@/content/site";

export function Accroche() {
  return (
    <section id="haut" className="bg-gradient-to-b from-leaf to-pale px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-16">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-terra">{hero.surtitre}</p>
          <h1 className="font-serif text-[2rem] leading-tight text-teal sm:text-4xl md:text-5xl">{hero.titre}</h1>
          <p className="mt-5 max-w-xl text-lg text-ink">{hero.texte}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BoutonAppeler texte={hero.ctaAppeler} />
            <BoutonRdv texte={hero.ctaRdv} />
          </div>
          <p className="mt-5 font-serif italic text-muted">{contact.phraseContact}</p>
        </div>
        <ImageDouce {...images.portrait} priority galet className="mx-auto w-full shadow-xl ring-8 ring-lime" />
      </div>
    </section>
  );
}

export function Pourquoi() {
  return (
    <Section id="pourquoi" titre={pourquoi.titre} vague={1}>
      <p className="text-muted">{pourquoi.intro}</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {pourquoi.motifs.map((m) => (
          <li key={m.titre} className="rounded-3xl border-l-8 border-lime bg-pale p-6">
            <h3 className="font-serif text-xl text-teal">{m.titre}</h3>
            <p className="mt-2">{m.texte}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <ImageDouce {...images.chevaux} className="w-full" />
        <div className="text-center md:text-left">
          <p className="font-serif text-2xl text-teal">{pourquoi.conclusion}</p>
          <BoutonAppeler texte={libelles.appeler} className="mt-4" />
        </div>
      </div>
    </Section>
  );
}

export function Maieusthesie() {
  return (
    <Section id="maieusthesie" titre={maieusthesie.titre} fond="leaf" vague={2}>
      <p className="max-w-2xl">{maieusthesie.intro}</p>
      <ol className="mt-8 grid gap-6 md:grid-cols-3">
        {maieusthesie.points.map((p, i) => (
          <li key={p.titre} className="rounded-3xl bg-paper p-6">
            <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-orange font-serif text-lg font-bold text-night">
              {i + 1}
            </span>
            <h3 className="mt-4 font-serif text-xl text-teal">{p.titre}</h3>
            <p className="mt-2">{p.texte}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row">
        <ImageDouce {...images.coucherSoleil} className="w-full" />
        <a href={maieusthesie.lienUrl} rel="noopener" className="inline-flex min-h-12 items-center font-bold text-teal underline decoration-orange decoration-2 underline-offset-4 hover:text-terra">
          {maieusthesie.lienTexte}
        </a>
      </div>
    </Section>
  );
}

export function QuiSuisJe() {
  return (
    <Section id="qui" titre={qui.titre} surtitre={qui.surtitre} vague={3}>
      <div className="grid gap-10 md:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <blockquote className="border-l-4 border-lime pl-5 font-serif text-2xl italic leading-snug text-teal">
            {qui.citation}
          </blockquote>
          {qui.paragraphes.map((p) => (
            <p key={p.slice(0, 20)} className="mt-5">
              {p}
            </p>
          ))}
        </div>
        <ImageDouce {...images.cheval} galet className="mx-auto w-full self-start" />
      </div>
      <Riviere className="my-10 text-lime" />
      <ul className="grid gap-6 md:grid-cols-2">
        {qui.etapes.map((e) => (
          <li key={e.titre} className="rounded-3xl bg-pale p-6">
            <h3 className="font-serif text-xl text-teal">{e.titre}</h3>
            <p className="mt-2">{e.texte}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/*
 * Section mise en avant (demande de Sébastien) : seule section sur fond sombre,
 * prix en grand, appel à l'action et message sur le tarif en encart orange.
 * Contrastes : paper / leaf sur teal-deep 9,7 / 8,1 ; night sur orange 6,1.
 */
export function Seances() {
  return (
    <Section id="seances" titre={seances.titre} surtitre={seances.surtitre} fond="profond" vague={4}>
      <p className="text-leaf">{seances.intro}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {seances.modalites.map((m, i) => (
          <li key={m} className="inline-flex items-center gap-2 rounded-full border-2 border-lime px-4 py-1.5 text-base font-bold text-paper">
            {i === 0 ? <IconeVisio className="h-5 w-5 text-lime" /> : <IconeMaison className="h-5 w-5 text-lime" />}
            {m}
          </li>
        ))}
      </ul>
      <ul className="mt-10 grid gap-5 lg:grid-cols-3">
        {seances.formules.map((f) => (
          <li key={f.titre} className="flex flex-col rounded-[2rem_3.5rem_2rem_3.5rem] border-t-8 border-lime bg-paper p-6 text-ink shadow-xl">
            <h3 className="font-serif text-2xl text-teal">{f.titre}</h3>
            <p className="text-muted">{f.detail}</p>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-2">
              <span className="font-serif text-5xl font-bold text-teal">{f.tarif}</span>
              <span className="text-muted">{seances.parSeance}</span>
            </p>
            <p className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-leaf px-4 py-1.5 font-bold text-teal-deep">
              <IconeHorloge />
              <span className="sr-only">{seances.libelleDuree} : </span>
              {f.duree}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col items-start gap-5 rounded-[2rem] bg-orange p-5 text-night md:flex-row md:items-center md:justify-between md:p-8">
        <p className="font-serif text-2xl italic md:text-3xl">{seances.frein}</p>
        <a href={contact.telephoneLien} aria-label={libelles.telephoneAria} className="inline-flex min-h-12 max-w-full items-center gap-2 rounded-full bg-night px-5 py-3 font-bold text-paper hover:bg-teal-deep md:shrink-0">
          <IconeTelephone />
          {seances.ctaFrein}
        </a>
      </div>
      <div className="mt-8 text-center">
        <a href="#contact" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-paper px-8 py-3 font-bold text-teal hover:bg-leaf">
          <IconeCalendrier />
          {seances.ctaRdv}
        </a>
      </div>
    </Section>
  );
}

export function Temoignages() {
  return (
    <Section titre={temoignages.titre} id="temoignages" vague={5}>
      {temoignages.liste.map((t) => (
        <figure key={t.texte.slice(0, 20)} className="relative rounded-3xl bg-leaf p-6 md:p-10">
          <span aria-hidden="true" className="absolute -top-6 left-6 font-serif text-7xl leading-none text-orange">
            “
          </span>
          <blockquote className="font-serif text-xl italic leading-relaxed">« {t.texte} »</blockquote>
          <figcaption className="mt-4 text-muted">— {t.auteur}</figcaption>
        </figure>
      ))}
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" titre={faq.titre} fond="pale" vague={6}>
      <div className="divide-y divide-paper overflow-hidden rounded-3xl bg-paper/60">
        {faq.questions.map((q) => (
          <details key={q.question} className="group px-5">
            <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 py-3 font-bold text-teal">
              {q.question}
              <span aria-hidden="true" className="text-2xl text-terra transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="pb-5">
              <p>{q.reponse}</p>
              {q.aValider && (
                <p className="mt-2 inline-block rounded-full bg-pale px-3 py-0.5 text-sm text-muted">{libelles.aValider}</p>
              )}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* Pastille ronde qui porte un picto (orange du logo, picto en `night`). */
function Pastille({ children }: { children: React.ReactNode }) {
  return (
    <span aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-orange text-night shadow-md">
      {children}
    </span>
  );
}

export function Zone() {
  return (
    <Section id="zone" titre={zone.titre} vague={7}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[2rem_3.5rem_2rem_3.5rem] border-t-8 border-lime bg-leaf p-6">
          <Pastille>
            <IconeVisio />
          </Pastille>
          <h3 className="mt-4 font-serif text-2xl text-teal">{zone.visio.titre}</h3>
          <p className="mt-2">{zone.visio.texte}</p>
        </div>
        <div className="rounded-[3.5rem_2rem_3.5rem_2rem] border-t-8 border-lime bg-leaf p-6">
          <Pastille>
            <IconeMaison />
          </Pastille>
          <h3 className="mt-4 font-serif text-2xl text-teal">{zone.presentiel.titre}</h3>
          <p className="mt-2">{zone.presentiel.texte}</p>
          <p className="mt-4 flex items-center gap-2 rounded-2xl border-2 border-dashed border-teal/40 bg-paper/60 px-4 py-2 text-base text-muted">
            <IconeRepere className="h-5 w-5 shrink-0 text-teal" />
            {zone.presentiel.zonePlaceholder}
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-6 rounded-[2rem] bg-pale p-6 sm:flex-row sm:items-center">
        <ImageDouce {...images.montagne} className="w-full sm:w-56 sm:shrink-0" />
        <div className="min-w-0">
          <h3 className="flex items-center gap-3 font-serif text-xl text-teal">
            <Pastille>
              <IconeCarte />
            </Pastille>
            {zone.teaser.titre}
          </h3>
          <p className="mt-3">{zone.teaser.texte}</p>
        </div>
      </div>
    </Section>
  );
}
