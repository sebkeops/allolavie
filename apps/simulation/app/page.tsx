/*
 * Page placeholder du starter SIGWEB. Elle existe pour que le monorepo build et
 * se déploie dès le départ. Le vrai contenu de la simulation se construit au
 * LOT 0 (voir briefs/lot0-simulation-refonte.md), APRÈS la note de parti pris.
 */
export default function Page() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "36rem", textAlign: "center" }}>
        <p
          style={{
            display: "inline-block",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgb(var(--brand-accent))",
          }}
        >
          Starter SIGWEB
        </p>
        <h1 style={{ margin: "0.75rem 0", fontSize: "1.75rem", lineHeight: 1.2 }}>
          Monorepo initialisé — prêt pour le lot&nbsp;0
        </h1>
        <p style={{ color: "rgb(var(--ink) / 0.7)", lineHeight: 1.6 }}>
          Socle en place. Prochaine étape : l&apos;analyse des sources et la note de
          parti pris (<code>apps/simulation/PARTI-PRIS.md</code>), à valider avant
          d&apos;écrire la moindre ligne de design. Voir{" "}
          <code>briefs/lot0-simulation-refonte.md</code>.
        </p>
      </div>
    </main>
  );
}
