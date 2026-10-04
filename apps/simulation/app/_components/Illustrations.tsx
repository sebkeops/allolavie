/*
 * Visages expressifs des motifs de consultation (« Vous vous reconnaissez ? »).
 * Dessins vectoriels SIGWEB, décoratifs (aria-hidden) : le sens est porté par
 * le texte de la carte. Même tête galet pour les quatre, seule l'expression et
 * le petit signe orange autour changent. Couleurs = jetons du thème.
 */

export type Emotion = "perdu" | "angoisse" | "schemas" | "vivant";

const tete = "M48 20c16 0 27 11 27 27 0 18-11 31-27 31S21 65 21 47c0-16 11-27 27-27z";
const meche = "M27 36c4-12 16-18 28-15 8 2 14 7 17 14-7-4-15-5-22-3-8 2-15 3-23 4z";

function Base({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 96 96" className="h-24 w-24 shrink-0" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="48" cy="50" r="44" className="fill-paper" />
      <path d={tete} className="fill-leaf stroke-teal-deep" strokeWidth={2.5} />
      <path d={meche} className="fill-teal-deep" />
      {children}
    </svg>
  );
}

const trait = { className: "stroke-teal-deep", strokeWidth: 2.5 };
const accent = { className: "stroke-orange", strokeWidth: 3 };

export function VisageEmotion({ emotion }: { emotion: Emotion }) {
  switch (emotion) {
    // Perdu·e : regard qui cherche, sourcils inégaux, spirale au-dessus.
    case "perdu":
      return (
        <Base>
          <path d="M34 41q5-3 9 0M54 39q5-2 9 2" {...trait} />
          <circle cx="38" cy="48" r="2.6" className="fill-teal-deep" />
          <circle cx="57" cy="47" r="2.6" className="fill-teal-deep" />
          <path d="M41 63q3-2 5 0t5 0t4 0" {...trait} />
          <path d="M80 22a5 5 0 1 1-5-5 9 9 0 1 1 9 9" {...accent} />
        </Base>
      );
    // Angoissé·e : sourcils relevés au centre, bouche crispée, goutte et nuage.
    case "angoisse":
      return (
        <Base>
          <path d="M33 42l9-4M63 42l-9-4" {...trait} />
          <circle cx="39" cy="48" r="2.6" className="fill-teal-deep" />
          <circle cx="57" cy="48" r="2.6" className="fill-teal-deep" />
          <path d="M38 64q3-3 5 0t5 0t5 0t5 0" {...trait} />
          <path d="M76 38c0 0 5 6 5 9a5 5 0 0 1-10 0c0-3 5-9 5-9z" className="fill-orange" />
          <path d="M66 16a6 6 0 0 1 11-2 5 5 0 0 1 4 9H66a4 4 0 0 1 0-7z" {...accent} strokeWidth={2.5} />
        </Base>
      );
    // Toujours les mêmes schémas : regard las, bouche droite, boucle qui tourne.
    case "schemas":
      return (
        <Base>
          <path d="M34 48h8M54 48h8" {...trait} />
          <path d="M34 42q4-1 8 0M54 42q4-1 8 0" {...trait} />
          <path d="M41 63h14" {...trait} />
          <path d="M86 52a38 38 0 1 1-6-24" {...accent} />
          <path d="M82 18l-1 11-10-3" {...accent} />
        </Base>
      );
    // Vivant·e : yeux rieurs, grand sourire, joues et rayons de soleil.
    case "vivant":
      return (
        <Base>
          <path d="M34 48q4-5 8 0M54 48q4-5 8 0" {...trait} />
          <path d="M37 58q11 11 22 0" {...trait} />
          <circle cx="32" cy="56" r="3.5" className="fill-orange" opacity={0.7} />
          <circle cx="64" cy="56" r="3.5" className="fill-orange" opacity={0.7} />
          <path d="M48 4v7M24 10l4 6M72 10l-4 6M10 26l7 3M86 26l-7 3" {...accent} />
        </Base>
      );
  }
}
