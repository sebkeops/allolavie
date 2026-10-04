# CHANGELOG

Tenu à jour à chaque lot. Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/).

---

## [lot 0] — Simulation de refonte (en cours)

- Note de parti pris (`apps/simulation/PARTI-PRIS.md`), validée : palette dérivée du site
  actuel, typo, ordre des sections.
- Maquette de l'accueil one-page, mobile d'abord : textes dans `content/site.ts`, photos
  du site actuel en WebP (EXIF supprimé), formulaire de contact simulé, FAQ en
  accordéon natif, JSON-LD `ProfessionalService` + `FAQPage`, pages annexes en stub.

## [starter] — Socle SIGWEB initialisé

Démarrage du monorepo depuis le starter SIGWEB : socle de règles (`SIGWEB.md`),
plomberie monorepo (workspaces, Turborepo, TypeScript strict), gabarits de
documentation et squelette `apps/simulation`. Rien de spécifique au client encore —
tout passe par le lot 0 (analyse + note de parti pris).
