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

**V3 retenue par Sébastien** (« on reste sur cette version, à consolider ») : on ne
change plus de direction, on peaufine. Formes ondulées (vagues entre sections, trait
« rivière » sous les titres, photos en galet), pictos dans des pastilles orange, et la
section **Séances mise en avant** : seule section sur fond sombre (`teal-deep`), prix en
grand, encart orange « Si le tarif est un frein, discutons-en ! ».
En-tête sur **fond vert anis vif** (demande de Sébastien) : le logo orange y est posé sur
un galet clair, car l'orange ne se lit pas sur ce vert (1,3:1). Sur mobile et tablette, le logo est
**centré**, menu à droite, et **pas d'icône téléphone dans l'en-tête** (décision de
Sébastien : la barre fixe du bas et l'accroche portent déjà l'appel). Écart assumé au
brief lot 0 §4.2 (« numéro cliquable en header sticky ») ; sur ordinateur, le numéro
reste dans l'en-tête.
**Boutons « Appeler » / « Prendre RDV » en version douce** (pleins orange et bleu-vert
jugés « trop agressifs ») : fond pêche `#FCE3C6` bordé d'orange, et contour bleu-vert sur
fond clair.

## 4. Données non tranchées

Liste tenue à jour dans `apps/simulation/PARTI-PRIS.md §8`. À demander à Nathalie :
zone d'intervention, publication de l'adresse privée, photos HD et droits, autres
témoignages, SIRET et statut, réponses de FAQ (mutuelle, durée, première séance).

Décidé : le vocabulaire du site (« soutien psychothérapeutique ») est **conservé**.

## 5. Identité visuelle

Validée en V3 après deux recettes (`apps/simulation/PARTI-PRIS.md §3`) :
- V1 sable / terre cuite : couleurs trop éloignées du site actuel ;
- V2 fond photo feuillage : « trop vieillot ».

**Retenu : la mise en page de la V1, avec les couleurs de l'identité actuelle**, soit vert
anis (`#9BCB3C` en liseré, teintes douces en fond), bleu-vert `#156669` pour les titres et
orange du logo `#F68808` pour le bouton « Appeler ». **Pas de fond photo.**

- Le vert anis vif et l'orange ne sont jamais des couleurs de texte (≤ 2,4:1).
- Texte sur orange : `--night`.
- Typo : Lora (titres) + Nunito Sans (texte, 18 px), via `next/font`.

## 6. Verrou d'indexation

Principe dans `SIGWEB.md §16`. Les emplacements qui portent le verrou pour ce projet
(à basculer ensemble au go-live), listables par `grep -rn "GO-LIVE" apps/site` :

1. `apps/site/app/layout.tsx` — `robots: { index: false, follow: false }`
2. `apps/site/app/robots.ts` — la règle `{ userAgent: "*", disallow: "/" }`
3. Les variables Vercel — `NEXT_PUBLIC_SITE_URL` sur le domaine définitif

## 7. Éléments à ne pas « corriger »

- **Les verts sont voulus** : c'est l'identité de la cliente. Ne pas revenir vers une
  palette neutre ou sable (V1 refusée).
- **Pas de fond photo de feuillage** : essayé en V2 et refusé (« trop vieillot »).

## 8. Formulaire de devis

Ici un **formulaire de prise de contact** (pas de devis), sans champ « urgence » : une
mention renvoie vers le 3114 ou le 15 en cas de détresse. Pas d'agenda en ligne pour le
moment. Défauts SIGWEB : aucune donnée stockée, destinataire par variable
d'environnement. Adresse de réception (contact@allolavie.fr ?) et accusé de réception :
à préciser au lot 1.

## 9. Périmètre par lot

Un lot livre ce qu'il annonce, rien de plus. Les envies de restructuration hors périmètre
se notent dans la PR — elles ne se codent pas.
