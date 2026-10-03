type Props = {
  id?: string;
  titre: string;
  surtitre?: string;
  fond?: "paper" | "sand" | "leaf";
  children: React.ReactNode;
};

const fonds = { paper: "bg-paper", sand: "bg-sand", leaf: "bg-leaf" };

export function Section({ id, titre, surtitre, fond = "paper", children }: Props) {
  const idTitre = id ? `${id}-titre` : undefined;
  return (
    <section id={id} aria-labelledby={idTitre} className={`${fonds[fond]} px-4 py-14 sm:px-6 md:py-20`}>
      <div className="mx-auto max-w-5xl">
        {surtitre && <p className="mb-2 text-sm font-bold uppercase tracking-wider text-terra">{surtitre}</p>}
        <h2 id={idTitre} className="font-serif text-3xl leading-tight text-teal md:text-4xl">
          {titre}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
