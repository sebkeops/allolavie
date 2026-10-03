# CLAUDE.md — spécificités du projet allolavie

> **Lire d'abord [SIGWEB.md](./SIGWEB.md)** : il porte le socle commun à tous les
> projets clients — modes de travail, interdits, stack, conventions de base de données,
> workflow Git, journalisation, leçons d'incident.
>
> **Ce fichier ne contient que ce qui est propre à ce client** et prime sur `SIGWEB.md`
> en cas de contradiction.

> ⚠️ **GABARIT À REMPLIR.** Ce fichier est un modèle issu du starter SIGWEB. Chaque
> section ci-dessous est à compléter (ou à supprimer si sans objet) au fil du lot 0,
> une fois l'analyse menée et la note de parti pris validée. Garder le critère
> d'appartenance de `SIGWEB.md` : une règle vraie chez n'importe quel artisan va dans
> `SIGWEB.md`, une règle propre à ce client reste ici.

Contexte long et justifications : [CONTEXT.md](./CONTEXT.md) · versions :
[STACK.md](./STACK.md) · historique : [CHANGELOG.md](./CHANGELOG.md) · briefs de lot :
[briefs/](./briefs/).

---

## Le client

**Allo la Vie** — Nathalie Brousse Ducrocq, praticienne en maïeusthésie (approche de
Thierry Tournebise). Séances par Zoom ou en présentiel au domicile de la personne
accompagnée. Forme juridique et SIRET : à demander. Zone desservie : à demander
(Gif-sur-Yvette, 91, n'est que l'adresse de l'éditeur). Prestataire : SIGWEB.

Un site existe déjà sur **allolavie.fr** (HTML statique en tableaux, hébergé chez OVH) :
la bascule DNS est le dernier geste du projet.

## 1. Tarifs sur le site

**Tarifs affichés** (décision de Sébastien, lot 0) — exception au défaut SIGWEB, comme sur
le site actuel : séance individuelle 1h30 – 80 € (enfant 1 h – 60 €), couple ou famille
2 h – 100 €, avec « Si le tarif est un frein, discutons-en ! ». Les montants vivent dans
`content/`, jamais en dur.

## 2. `apps/simulation` est figée (dès validation)

Une fois la simulation validée par le client, elle reste montrable telle quelle :
**on n'y touche plus**. L'extraction vers `packages/ui` se fait par **copie sortante**
(cf. `SIGWEB.md §8`).

## 3. Design

<Le design est-il validé sans réserve ? Les retours attendus portent-ils sur le contenu
ou aussi sur la forme ? À préciser après le parti pris.>

## 4. Données non tranchées

Liste tenue à jour dans `apps/simulation/PARTI-PRIS.md §8`. À demander à Nathalie :
zone d'intervention, publication de l'adresse privée, photos HD et droits, autres
témoignages, SIRET et statut, réponses de FAQ (mutuelle, durée, première séance).

Décidé : le vocabulaire du site (« soutien psychothérapeutique ») est **conservé**.

## 5. Identité visuelle

**On garde l'identité du site actuel** (décision de Sébastien après la première recette :
une palette sable / terre cuite a été refusée). Fond feuillage photo, vert anis du menu
(`#ADDD4B`), texte bleu-vert (`#156669`), logo orange (`#F68808`). Jetons, rôles et
contrastes : `apps/simulation/PARTI-PRIS.md §3`.

- Le texte repose **toujours** sur un panneau clair semi-opaque, jamais directement sur
  la photo : l'AA est calculé au pixel le plus sombre du fond.
- L'orange n'est jamais une couleur de texte (2,4:1) : logo, bouton « Appeler » (texte
  `--night`), pastilles.
- Typo : Lora (titres) + Nunito Sans (texte, 18 px), via `next/font`.

## 6. Verrou d'indexation

Principe dans `SIGWEB.md §16`. Les emplacements qui portent le verrou pour ce projet
(à basculer ensemble au go-live), listables par `grep -rn "GO-LIVE" apps/site` :

1. `apps/site/app/layout.tsx` — `robots: { index: false, follow: false }`
2. `apps/site/app/robots.ts` — la règle `{ userAgent: "*", disallow: "/" }`
3. Les variables Vercel — `NEXT_PUBLIC_SITE_URL` sur le domaine définitif

## 7. Éléments à ne pas « corriger »

- **Le fond photo de feuillage et le vert vif sont voulus** : c'est l'identité de la
  cliente. Ne pas les « adoucir » vers une palette neutre ou sable.
- Le logo apparaît deux fois sur l'accueil (en-tête + en grand sur le feuillage) : la
  seconde occurrence est décorative (`aria-hidden`), comme en tête du site actuel.

## 8. Formulaire de devis

Ici un **formulaire de prise de contact** (pas de devis), sans champ « urgence » : une
mention renvoie vers le 3114 ou le 15 en cas de détresse. Pas d'agenda en ligne pour le
moment. Défauts SIGWEB : aucune donnée stockée, destinataire par variable
d'environnement. Adresse de réception (contact@allolavie.fr ?) et accusé de réception :
à préciser au lot 1.

## 9. Périmètre par lot

Un lot livre ce qu'il annonce, rien de plus. Les envies de restructuration hors périmètre
se notent dans la PR — elles ne se codent pas.
