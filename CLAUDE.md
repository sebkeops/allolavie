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

Validée par Sébastien (lot 0). Détail et contrastes : `apps/simulation/PARTI-PRIS.md §3`.

- `--teal` `21 102 105` (#156669, couleur du site actuel) : marque, titres, bouton principal.
- `--orange` `246 136 8` (#F68808, logo) : **logo et décor uniquement** (2,4:1 sur fond clair).
- `--terra` `168 71 12` (#A8470C) : accents de texte, bouton « Appeler » (5,9:1 en blanc).
- Fonds `--paper` `251 248 242`, `--sand` `241 234 220`, `--leaf` `228 237 207` ; texte
  `--ink` `36 50 51`, `--muted` `79 93 92`.
- Typo : Lora (titres) + Nunito Sans (texte, 18 px), via `next/font`.

## 6. Verrou d'indexation

Principe dans `SIGWEB.md §16`. Les emplacements qui portent le verrou pour ce projet
(à basculer ensemble au go-live), listables par `grep -rn "GO-LIVE" apps/site` :

1. `apps/site/app/layout.tsx` — `robots: { index: false, follow: false }`
2. `apps/site/app/robots.ts` — la règle `{ userAgent: "*", disallow: "/" }`
3. Les variables Vercel — `NEXT_PUBLIC_SITE_URL` sur le domaine définitif

## 7. Éléments à ne pas « corriger »

<Lister ici les choix qui ont l'air d'oublis mais n'en sont pas, pour qu'aucune session
ultérieure ne les « répare » (ex. un logo rendu d'une certaine façon, une donnée absente
volontairement). Vide au départ.>

## 8. Formulaire de devis

Ici un **formulaire de prise de contact** (pas de devis), sans champ « urgence » : une
mention renvoie vers le 3114 ou le 15 en cas de détresse. Pas d'agenda en ligne pour le
moment. Défauts SIGWEB : aucune donnée stockée, destinataire par variable
d'environnement. Adresse de réception (contact@allolavie.fr ?) et accusé de réception :
à préciser au lot 1.

## 9. Périmètre par lot

Un lot livre ce qu'il annonce, rien de plus. Les envies de restructuration hors périmètre
se notent dans la PR — elles ne se codent pas.
