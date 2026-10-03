type Props = {
  id?: string;
  titre: string;
  surtitre?: string;
  fond?: "paper" | "pale";
  children: React.ReactNode;
};

/*
 * Chaque section est un panneau clair posé sur le fond feuillage (identité du
 * site actuel). Opacités choisies pour garder l'AA au pixel le plus sombre de
 * la photo (PARTI-PRIS.md §3).
 */
const fonds = { paper: "bg-paper/90", pale: "bg-pale/[0.92]" };

export function Section({ id, titre, surtitre, fond = "paper", children }: Props) {
  const idTitre = id ? `${id}-titre` : undefined;
  return (
    <section id={id} aria-labelledby={idTitre} className="px-3 py-4 sm:px-6 md:py-6">
      <div className={`mx-auto max-w-5xl rounded-[2rem] ${fonds[fond]} px-5 py-10 shadow-sm md:px-10 md:py-14`}>
        {surtitre && <p className="mb-2 text-sm font-bold uppercase tracking-wider text-terra">{surtitre}</p>}
        <h2 id={idTitre} className="font-serif text-3xl leading-tight text-teal md:text-4xl">
          {titre}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
