import { Riviere, Vague } from "./Icones";

type Props = {
  id?: string;
  titre: string;
  surtitre?: string;
  fond?: "paper" | "pale" | "leaf";
  vague?: number;
  children: React.ReactNode;
};

const fonds = { paper: "bg-paper", pale: "bg-pale", leaf: "bg-leaf" };
const encres = { paper: "text-paper", pale: "text-pale", leaf: "text-leaf" };

export function Section({ id, titre, surtitre, fond = "paper", vague = 0, children }: Props) {
  const idTitre = id ? `${id}-titre` : undefined;
  return (
    <section id={id} aria-labelledby={idTitre} className={`relative ${fonds[fond]} px-4 py-14 sm:px-6 md:py-20`}>
      <Vague className={encres[fond]} variante={vague} />
      <div className="mx-auto max-w-5xl">
        {surtitre && <p className="mb-2 text-sm font-bold uppercase tracking-wider text-terra">{surtitre}</p>}
        <h2 id={idTitre} className="font-serif text-3xl leading-tight text-teal md:text-4xl">
          {titre}
        </h2>
        <Riviere className="mt-3 !h-3 !w-28 text-orange" />
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
