import Image from "next/image";
import { BoutonAppeler, BoutonRdv } from "./Boutons";
import { ImageDouce } from "./ImageDouce";
import { Riviere } from "./Icones";
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
    <section id="haut" className="px-3 pb-4 pt-8 sm:px-6 md:pt-12">
      {/* Le logo en grand sur le feuillage, comme en tête du site actuel. */}
      <Image src={images.logo.src} width={images.logo.width} height={images.logo.height} alt="" aria-hidden="true" priority className="mx-auto h-auto w-64 md:w-96" />
      <div className="mx-auto mt-6 grid max-w-5xl items-center gap-8 rounded-[2rem] bg-paper/90 px-5 py-10 shadow-sm md:grid-cols-[1fr_auto] md:px-10">
        <div className="min-w-0">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-terra">{hero.surtitre}</p>
          <h1 className="font-serif text-4xl leading-tight text-teal md:text-5xl">{hero.titre}</h1>
          <p className="mt-5 max-w-xl text-lg">{hero.texte}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BoutonAppeler texte={hero.ctaAppeler} />
            <BoutonRdv texte={hero.ctaRdv} />
          </div>
          <p className="mt-5 font-serif italic text-muted">{contact.phraseContact}</p>
        </div>
        <ImageDouce {...images.portrait} priority className="mx-auto w-full shadow-xl ring-8 ring-lime" />
      </div>
    </section>
  );
}

export function Pourquoi() {
  return (
    <Section id="pourquoi" titre={pourquoi.titre}>
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
    <Section id="maieusthesie" titre={maieusthesie.titre} fond="pale">
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
    <Section id="qui" titre={qui.titre} surtitre={qui.surtitre}>
      <div className="grid gap-10 md:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <blockquote className="border-l-4 border-orange pl-5 font-serif text-2xl italic leading-snug text-teal">
            {qui.citation}
          </blockquote>
          {qui.paragraphes.map((p) => (
            <p key={p.slice(0, 20)} className="mt-5">
              {p}
            </p>
          ))}
        </div>
        <ImageDouce {...images.cheval} className="mx-auto w-full self-start" />
      </div>
      <Riviere className="my-10 text-orange/60" />
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

export function Seances() {
  return (
    <Section id="seances" titre={seances.titre} fond="pale">
      <p>{seances.intro}</p>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {seances.formules.map((f) => (
          <li key={f.titre} className="flex flex-col rounded-3xl bg-paper p-6 shadow-sm">
            <h3 className="font-serif text-2xl text-teal">{f.titre}</h3>
            <p className="text-muted">{f.detail}</p>
            <dl className="mt-6 grid grid-cols-2 gap-2 border-t border-lime pt-4">
              <div>
                <dt className="text-sm text-muted">{seances.libelleDuree}</dt>
                <dd className="text-xl font-bold">{f.duree}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">{seances.libelleTarif}</dt>
                <dd className="text-xl font-bold text-terra">{f.tarif}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
      <ul className="mt-6 flex flex-wrap gap-2">
        {seances.modalites.map((m) => (
          <li key={m} className="rounded-full bg-anis px-4 py-2 text-base font-bold text-teal">
            {m}
          </li>
        ))}
      </ul>
      <p className="mt-8 font-serif text-2xl italic text-terra">{seances.frein}</p>
    </Section>
  );
}

export function Temoignages() {
  return (
    <Section titre={temoignages.titre} id="temoignages">
      {temoignages.liste.map((t) => (
        <figure key={t.texte.slice(0, 20)} className="relative rounded-3xl bg-anis p-6 md:p-10">
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
    <Section id="faq" titre={faq.titre} fond="pale">
      <div className="divide-y divide-lime overflow-hidden rounded-3xl bg-paper">
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

export function Zone() {
  return (
    <Section id="zone" titre={zone.titre}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-anis p-6">
          <h3 className="font-serif text-xl text-teal">{zone.visio.titre}</h3>
          <p className="mt-2">{zone.visio.texte}</p>
        </div>
        <div className="rounded-3xl bg-anis p-6">
          <h3 className="font-serif text-xl text-teal">{zone.presentiel.titre}</h3>
          <p className="mt-2">{zone.presentiel.texte}</p>
          <p className="mt-3 rounded-2xl border-2 border-dashed border-teal/40 px-4 py-2 text-base text-muted">
            {zone.presentiel.zonePlaceholder}
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-6 rounded-3xl bg-pale p-6 sm:flex-row sm:items-center">
        <ImageDouce {...images.montagne} className="w-full sm:w-56 sm:shrink-0" />
        <div className="min-w-0">
          <h3 className="font-serif text-xl text-teal">{zone.teaser.titre}</h3>
          <p className="mt-2">{zone.teaser.texte}</p>
        </div>
      </div>
    </Section>
  );
}
