import Image from "next/image";
import { PiedDePage } from "./PiedDePage";
import { images, pagesAnnexes } from "@/content/site";

type Props = {
  titre: string;
  blocs: { titre: string; texte: string }[];
  note?: string;
};

/* Gabarit des pages annexes (stubs de la simulation, brief §4.7). */
export function PageAnnexe({ titre, blocs, note }: Props) {
  return (
    <>
      <header className="border-b border-pale bg-paper px-4 sm:px-6">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between">
          <a href="/">
            <Image src={images.logo.src} width={images.logo.width} height={images.logo.height} alt={images.logo.alt} className="h-9 w-auto" />
          </a>
          <a href="/" className="inline-flex min-h-12 items-center font-bold text-teal">
            {pagesAnnexes.retour}
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-serif text-4xl text-teal">{titre}</h1>
        {blocs.map((b) => (
          <section key={b.titre} className="mt-8">
            <h2 className="font-serif text-2xl text-teal">{b.titre}</h2>
            <p className="mt-2">{b.texte}</p>
          </section>
        ))}
        {note && <p className="mt-10 rounded-2xl bg-pale p-4 text-base text-muted">{note}</p>}
      </main>
      <PiedDePage />
    </>
  );
}
