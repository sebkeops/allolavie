# Note de parti pris — simulation de refonte Allo la Vie

> **Statut : PROPOSITION, en attente de validation.** Aucune ligne de design n'est écrite
> avant validation (brief lot 0 §3).
>
> ⚠️ **Analyse partielle.** Le site actuel (allolavie.fr) est **inaccessible depuis la
> session cloud** : la politique réseau de l'environnement bloque le domaine (et
> archive.org). Le logo, les couleurs réelles, les photos et les textes d'origine n'ont
> donc **pas été vus**. Cette note s'appuie uniquement sur les constats transmis par
> Sébastien. Tout ce qui touche à l'ADN visuel est marqué *provisoire* et sera recalé sur
> l'existant dès que le site ou ses fichiers seront accessibles.

## 1. Ce qu'on garde de l'existant (ADN)

- **La voix de Nathalie** : très personnelle, chaleureuse, imagée — la métaphore de « la
  Vie comme une rivière » devient le fil conducteur visuel (lignes courbes, mouvement
  lent, rien d'anguleux).
- **L'écriture inclusive au point médian** (perdu·e, accompagné·e), conservée partout.
- **L'échange humain d'abord** : le téléphone est le premier CTA, avant tout formulaire.
- **Le message « Si le tarif est un frein, parlons-en »**, tel quel.
- Le nom **« Allo la Vie »** (le jeu sur « allô » justifie un CTA d'appel très présent).

## 2. Ce qu'on corrige

| Constat sur l'existant | Correction dans la simulation |
|---|---|
| Mise en page en tableaux, espacement par paragraphes vides, pas responsive | Mise en page fluide mobile-first, espacements par le CSS |
| Titres de section en images PNG | Vrais titres HTML (lisibles par Google et les lecteurs d'écran), un seul `<h1>` |
| Même `<title>` partout, aucune meta description | Title + description propres (simulation one-page : un seul couple, en `noindex`) |
| Aucune zone géographique | Section « Où et comment » + teaser « une page par commune » (non construit) |
| Pas de bouton d'appel ni de parcours de RDV | Téléphone cliquable dans l'en-tête fixe + barre fixe bas d'écran « Appeler / Prendre RDV » |
| Contenu maigre, un seul témoignage | Sections structurées ; textes enrichis **uniquement à partir de ce que Nathalie fournit** |
| Mentions légales et charte dans le menu principal | Déplacées en pied de page ; menu réduit à 4 entrées + burger mobile |

## 3. Palette (provisoire — à recaler sur le logo)

Direction demandée : sauge, sable, terracotta clair. Jetons déclarés en triplets RVB dans
`app/globals.css`. Contrastes **calculés** (formule WCAG 2.x), pas estimés.

| Jeton | Hex | Triplet | Rôle |
|---|---|---|---|
| `--paper` | `#FAF6F0` | `250 246 240` | Fond principal (blanc cassé chaud) |
| `--sand` | `#EFE6D8` | `239 230 216` | Fond des sections alternées, cartes |
| `--ink` | `#2E2B27` | `46 43 39` | Texte courant |
| `--muted` | `#5E5A53` | `94 90 83` | Texte secondaire |
| `--sage` | `#4A6B57` | `74 107 87` | Couleur de marque : titres, liens, bouton principal |
| `--sage-soft` | `#A9BDA8` | `169 189 168` | Décor uniquement (courbes, fonds de pastilles) |
| `--terra` | `#D99A7E` | `217 154 126` | Décor uniquement (accents, soulignés) |
| `--terra-deep` | `#9C4A2C` | `156 74 44` | Accent texte, bouton « Appeler » |

| Combinaison | Ratio | AA texte courant (≥ 4,5) |
|---|---|---|
| ink / paper · ink / sand | 13,1 · 11,4 | ✅ |
| muted / paper · muted / sand | 6,4 · 5,5 | ✅ |
| sage / paper · sage / sand | 5,5 · 4,8 | ✅ |
| blanc / sage (bouton) | 6,0 | ✅ |
| blanc / terra-deep (bouton) | 6,1 | ✅ |
| terra-deep / paper · terra-deep / sand | 5,7 · 5,0 | ✅ |
| ink / terra · ink / sage-soft | 6,0 · 7,1 | ✅ |
| terra / paper · sage-soft / paper | 2,2 · 1,9 | ❌ → **jamais pour du texte**, décor seulement |

## 4. Typographie

Auto-hébergée via `next/font` (fichiers servis par le site, aucune requête tierce au
runtime, aucune dépendance ajoutée).

- **Titres : Lora** — serif douce et lisible sur petit écran (hauteur d'x correcte,
  contrairement aux Garamond), italique élégant pour les accroches.
- **Texte : Nunito Sans** — sans-serif aux formes arrondies, chaleureuse sans être
  enfantine. Corps **18 px** sur mobile (≥ 16 px), interlignage 1,6.

## 5. Ambiance

Calme, lumineuse, beaucoup d'air. Une photo réelle de Nathalie plutôt que des icônes ;
des courbes « rivière » en séparateurs de section ; micro-animations discrètes (apparition
en fondu), contenu **visible par défaut** et rien sous `prefers-reduced-motion`
(SIGWEB §11). Cibles tactiles ≥ 44 px. Rassurant sans être médical : pas de bleu
hospitalier, pas de photos de banque d'images de mains jointes.

## 6. Sections, dans l'ordre (accueil one-page, mobile d'abord)

0. **Bandeau** « Simulation SIGWEB — non contractuelle » (retirable en une ligne).
1. **En-tête fixe** : « Allo la Vie », téléphone cliquable, burger (4 entrées : La
   maïeusthésie · Pourquoi consulter · Qui suis-je · Séances) + bouton Contact.
2. **Accroche** (`<h1>`) : ce que propose Nathalie, où, en une phrase + « Appeler » /
   « Prendre rendez-vous ».
3. **Vous vous reconnaissez ?** — 4 cartes : perdu·e et besoin d'écoute · angoisse et
   besoin de sérénité · schémas qui se répètent · difficulté à se sentir exister.
4. **La maïeusthésie en 3 points** + lien vers la page détaillée (teaser).
5. **Qui suis-je** — photo, parcours (ingénieure → reconversion, CNV), citation.
6. **Les séances** — 3 cartes (individuelle · enfant · couple/famille), visio ou
   présentiel, « Si le tarif est un frein, parlons-en ». *Montants : voir À arbitrer n° 1.*
7. **Témoignages** — le témoignage existant (+ ceux à venir).
8. **FAQ** en accordéon natif (`<details>`, fonctionne sans JavaScript) : première
   séance · visio ou présentiel · durée d'un accompagnement · mutuelle · confidentialité.
9. **Où et comment** — zone d'intervention + teaser « une page par commune » (non construit).
10. **Contact** — formulaire (nom, téléphone, e-mail, type de séance, message, case RGPD),
    confirmation côté navigateur, **aucun envoi réel** en simulation.
11. **Pied de page** — coordonnées, Mentions légales, Charte du praticien,
    Confidentialité, Cookies (pages stub), © année en cours.
12. **Barre fixe bas d'écran (mobile)** — « Appeler » (`tel:`) · « Prendre RDV ».

### Adaptations du socle « artisan » du brief (à valider)

- « Formulaire de **devis** » → formulaire de **prise de contact**.
- **Pas de champ « niveau d'urgence »** : inadapté à un accompagnement de ce type. À la
  place, une mention sobre près du formulaire : ce n'est pas un service d'urgence, en cas
  de détresse appeler le 3114 ou le 15.
- **Avis** : un seul témoignage, pas de plateforme d'avis → pas de note agrégée, ni à
  l'écran ni en JSON-LD.
- JSON-LD `ProfessionalService` + `FAQPage`, **uniquement avec des données fournies**
  (pas d'adresse ni de `geo` tant que ce n'est pas tranché).

## 7. À arbitrer (rien n'est tranché par la session)

1. **Tarifs à l'écran.** Le cadre SIGWEB (CLAUDE.md §1, rappel du brief) dit « aucun
   tarif », la demande de refonte dit « séances & tarifs en cartes », le site actuel les
   affiche. Point à vérifier avec la cliente : l'information du consommateur sur le prix
   d'une prestation est encadrée par le Code de la consommation, ce qui pourrait relever
   de l'exception « mention légale obligatoire ».
2. **Vocabulaire.** Le titre de *psychothérapeute* est réglementé en France. Comment
   Nathalie se présente-t-elle exactement (« praticienne en maïeusthésie »,
   « accompagnement psychologique »…) ? La simulation n'emploiera aucun terme protégé sans
   confirmation.
3. **« Présentiel à domicile »** : au domicile de la personne accompagnée, ou chez
   Nathalie ? Change le texte, la zone desservie et ce qui est publiable (aucun élément
   identifiant un domicile privé, SIGWEB §15).
4. **Zone géographique** (ville, communes, département) — absente de toute source.
5. **Cabinet** : existe-t-il une adresse publique ?
6. **Prise de RDV** : « Prendre RDV » mène au formulaire, ou à un agenda en ligne
   (Cal.com / Calendly = service tiers, impact cookies et consentement) ?
7. **Photos** disponibles (portrait de Nathalie, lieu, ambiance) et droits d'usage.
8. **Témoignages** : nouveaux témoignages, et accord écrit pour publier l'existant
   (prénom seul ? initiale ?).
9. **« 30+ ans »** : 30 ans de carrière d'ingénieure, ou autre chose ? Formulation à
   valider.
10. **Formation CNV** : intitulé exact du parcours de 9 mois et formulation acceptable du
    lien avec l'équipe de Thomas d'Ansembourg (éviter toute affiliation implicite).
11. **FAQ mutuelle** : réponse factuelle fournie par Nathalie (aucune promesse de prise en
    charge sans source).
12. **Mentions légales** : nom complet, statut (micro-entreprise ?), SIRET, adresse de
    domiciliation, hébergeur.
13. **Logo et couleurs réelles** : la palette ci-dessus est à recaler dès qu'on peut voir
    le site ou le logo (accès réseau ou fichiers déposés dans `sources/`).

## 8. Restructurations notées, non faites ici

Pages détaillées SEO (`/maieusthesie`, `/pourquoi-consulter`, `/qui-suis-je`, `/seances`,
`/contact`, `/mentions-legales`, `/charte`), envoi réel du formulaire (Resend), sitemap,
redirections 301 depuis les anciennes URLs `.html`, analytics sans cookie : **site de
production (`apps/site`, lot 1)**, hors simulation.
