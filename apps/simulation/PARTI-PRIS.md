# Note de parti pris — simulation de refonte Allo la Vie

> **Statut : PROPOSITION, en attente de validation.** Aucune ligne de design n'est écrite
> avant validation (brief lot 0 §3).
>
> **Sources analysées :** les 7 pages d'allolavie.fr (dernière mise à jour affichée :
> 17 avril 2026), la feuille de style `Allo1.css`, le logo, l'image de fond et les
> 8 photos du site, copiés dans `sources/site-actuel/` (non versionné), ainsi que les
> constats transmis par Sébastien.

## 1. L'ADN du site actuel

| Élément | Constat |
|---|---|
| **Logo** | « Allo la Vie » en **écriture manuscrite orange vif** (`#F68808`, couleur reprise au survol du menu). Fourni en PNG 493 × 154 sur fond transparent. Les titres de section sont dans la même écriture, en images PNG. |
| **Couleur de texte** | **Bleu-vert profond `#156669`** sur tout le site (texte, liens, bordures). Survol `#408680`. |
| **Fond** | Photo plein écran de **feuillage vert tendre**, lumineux et flou. Menu en vert anis (`#ADDD4B`, `#66FF66`, `#DDFA64`). |
| **Typo** | Verdana partout, souvent en gras, de 12 à 26 px. Comic Sans déclaré dans la CSS. |
| **Photos** | Très personnelles : Nathalie souriante (portrait), Nathalie allongée dans l'herbe près d'un cheval, Nathalie avec un corbeau sur la tête, un troupeau de chevaux, deux chiens au bord de l'eau, une montagne, un coucher de soleil sur la mer. **Nature, animaux, lumière, humour.** Le orange revient même sur ses photos (bandeau, veste). |
| **Ton** | Je, intime, imagé (« La Vie, c'est comme une rivière »), points d'exclamation, « merci la Vie ! ». Écriture inclusive au **point** (perdu.e, écouté.e). |

**Ce qu'on garde :** l'orange du logo comme signature, le bleu-vert comme couleur de
confiance, la fraîcheur végétale, la nature et les animaux, la voix à la première
personne, la métaphore de la rivière, et le message sur le tarif.

## 2. Ce qu'on corrige

| Constat (vérifié dans le code source) | Correction dans la simulation |
|---|---|
| Mise en page en `<table>` de largeur fixe (930 / 850 px, `body` à 1000 px) : défilement horizontal sur mobile | Mise en page fluide, mobile d'abord |
| Espacements faits de dizaines de `<p>&nbsp;</p>` | Espacements gérés par le CSS |
| Titres de section en images PNG, aucun `<h1>` | Vrais titres HTML, un seul `<h1>` |
| `<title>Allo la Vie</title>` identique sur les 7 pages, aucune meta description | Title et description dédiés (la simulation reste en `noindex`) |
| Texte en 12 px gras, `#156669` sur un fond photo vert : lisibilité variable selon la zone | Texte de 18 px, contrastes calculés (§3) |
| Aucune zone d'intervention mentionnée | Section « Où et comment » + teaser « une page par commune » (non construit) |
| Pas de bouton d'appel ; le numéro n'est pas cliquable | Téléphone cliquable dans l'en-tête fixe + barre bas d'écran « Appeler / Prendre RDV » |
| Mentions légales et charte dans le menu principal (7 entrées) | Pied de page ; menu de 4 entrées + burger |
| Photos de 200 à 450 px de large | Utilisées en petit format, en attendant les originaux (§8, à demander à Nathalie) |

## 3. Palette — l'existant, adouci

La palette naît de l'existant et rejoint la direction « sauge / sable / terracotta » :
le **bleu-vert** du texte devient la couleur de marque, l'**orange** du logo est gardé pour
la signature et décliné en **terre cuite** lisible, et le **vert feuillage** du fond devient
un fond pâle. Jetons déclarés en triplets RVB dans `app/globals.css`, contrastes
**calculés** (WCAG 2.x).

| Jeton | Hex | Triplet | Origine | Rôle |
|---|---|---|---|---|
| `--paper` | `#FBF8F2` | `251 248 242` | — | Fond principal |
| `--sand` | `#F1EADC` | `241 234 220` | — | Sections alternées, cartes |
| `--leaf` | `#E4EDCF` | `228 237 207` | fond feuillage, très adouci | Sections « respiration » |
| `--ink` | `#243233` | `36 50 51` | `#156669` assombri | Texte courant |
| `--muted` | `#4F5D5C` | `79 93 92` | — | Texte secondaire |
| `--teal` | `#156669` | `21 102 105` | **inchangé** | Marque : titres, liens, bouton principal |
| `--teal-deep` | `#0E4A4C` | `14 74 76` | — | Survol, pied de page |
| `--orange` | `#F68808` | `246 136 8` | **logo, inchangé** | Logo et décor uniquement |
| `--terra` | `#A8470C` | `168 71 12` | orange du logo assombri | Accents de texte, bouton « Appeler » |

| Combinaison | Ratio | AA (≥ 4,5) |
|---|---|---|
| ink sur paper / sand / leaf | 12,6 · 11,1 · 11,0 | ✅ |
| muted sur paper / sand / leaf | 6,5 · 5,8 · 5,7 | ✅ |
| teal sur paper / sand / leaf | 6,3 · 5,6 · 5,5 | ✅ |
| blanc sur teal · blanc sur teal-deep | 6,7 · 10,0 | ✅ |
| terra sur paper / sand / leaf | 5,6 · 4,9 · 4,9 | ✅ |
| blanc sur terra (bouton) | 5,9 | ✅ |
| ink sur orange (pastille) | 5,4 | ✅ |
| orange sur paper / blanc | 2,4 · 2,5 | ❌ → **logo et décor seulement**, jamais de texte courant |

Le logo PNG orange garde son contraste de logo (non soumis au seuil AA du texte). Une
version vectorielle serait préférable (§8).

## 4. Typographie

Auto-hébergée via `next/font`, sans dépendance ajoutée ni requête tierce au runtime.

- **Titres : Lora**, une serif douce. Elle tient le rôle « posé » à côté d'un logo
  manuscrit et joyeux. Les titres manuscrits PNG disparaissent : seul le logo garde
  l'écriture à la main.
- **Texte : Nunito Sans**, une sans-serif arrondie et chaleureuse. **18 px** sur mobile,
  interlignage 1,6. Remplace Verdana gras 12 px.

## 5. Ambiance

Lumineuse et vivante plutôt que « cabinet » : la nature et les animaux de ses photos, un
orange qui sourit, beaucoup d'air. Des courbes « rivière » en séparateurs de section.
Micro-animations discrètes, contenu **visible par défaut**, rien sous
`prefers-reduced-motion` (SIGWEB §11). Cibles tactiles ≥ 44 px. Pas de bleu hospitalier,
pas de photos de banque d'images : uniquement les siennes.

## 6. Sections, dans l'ordre (accueil one-page, mobile d'abord)

0. **Bandeau** « Simulation SIGWEB — non contractuelle » (retirable en une ligne).
1. **En-tête fixe** : logo, téléphone cliquable, burger (La maïeusthésie · Pourquoi
   consulter · Qui suis-je · Séances) + bouton Contact.
2. **Accroche** (`<h1>`), sur le portrait de Nathalie, avec « Appeler » et « Prendre
   rendez-vous » ; sous-titre « Et oui j'aime l'idée d'un échange dès le premier contact ».
3. **Vous vous reconnaissez ?** : les 4 questions de la page « Pourquoi consulter »,
   en cartes. Photo : les chevaux.
4. **La maïeusthésie en 3 points** : l'étymologie (« l'art d'être sensible à la naissance
   du Soi »), le symptôme comme chemin (« tel un fil d'Ariane »), la délicatesse, la
   liberté et le respect. Lien vers maieusthesie.com, cité sur le site actuel.
5. **Qui suis-je** : « Le jour où j'ai dit STOP ! », la rivière, 30 ans d'ingénierie, la
   rupture conventionnelle, les 9 mois de CNV, la découverte de la maïeusthésie. Photo :
   Nathalie et le cheval.
6. **Les séances** : 2 cartes (individuelle · couple ou famille), durées et **tarifs
   affichés**, par Zoom ou en présentiel, « Si le tarif est un frein, discutons-en ! ».
7. **Témoignage** : celui de l'accueil (« Dans ce grand passage à vide… »).
8. **FAQ** en accordéon natif (`<details>`, fonctionne sans JavaScript) : première séance ·
   Zoom ou présentiel · durée d'un accompagnement · mutuelle · confidentialité (cette
   dernière tirée de la **charte du praticien**, § 3 « confidentialité »).
9. **Où et comment** : zone d'intervention + teaser « une page par commune ».
10. **Contact** : formulaire (nom, téléphone, e-mail, type de séance, message, case RGPD),
    confirmation dans le navigateur, **aucun envoi réel**.
11. **Pied de page** : coordonnées, Mentions légales, Charte du praticien,
    Confidentialité, Cookies (pages stub), © année en cours.
12. **Barre fixe bas d'écran (mobile)** : « Appeler » (`tel:`) · « Prendre RDV ».

### Adaptations du socle « artisan » du brief (à valider)

- Le « formulaire de **devis** » devient un formulaire de **prise de contact**.
- **Pas de champ « niveau d'urgence »** : il est inadapté à ce type d'accompagnement. À sa
  place, une mention sobre : ce n'est pas un service d'urgence ; en cas de détresse,
  appeler le 3114 ou le 15.
- **Avis** : un seul témoignage et aucune plateforme d'avis, donc pas de note agrégée, ni
  à l'écran ni en JSON-LD.
- **JSON-LD** `ProfessionalService` + `FAQPage`, avec les seules données publiables :
  ni adresse ni `geo` tant que la zone et l'adresse ne sont pas tranchées (§8).

## 7. Données relevées sur le site actuel

| Donnée | Valeur relevée | Page |
|---|---|---|
| Nom | **Nathalie Brousse Ducrocq** | Mentions légales |
| Adresse (éditeur) | 10 impasse de Chanteraine, 91190 Gif-sur-Yvette | Mentions légales |
| Hébergeur | OVH (sans autre précision) | Mentions légales |
| Téléphone · e-mail | 06 76 84 36 48 · contact@allolavie.fr | Accueil |
| Séance individuelle | Zoom ou présentiel (« à votre domicile ou à discuter »), 1h30, 80 € ; enfants 1 h, 60 € | Séance |
| Couple ou famille | Zoom ou présentiel, 2 h, 100 € | Séance |
| Parcours | « ingénieure depuis plus de 30 ans », rupture conventionnelle, « parcours de 9 mois en CNV », ateliers « animés par son équipe » (Thomas d'Ansembourg) | Qui suis-je |
| Accroche actuelle | « Besoin d'un soutien psychothérapeutique ? » | Accueil |

**Points tranchés par le site :** le présentiel a lieu **au domicile de la personne
accompagnée** (ou ailleurs, à discuter) ; « 30+ ans » signifie **plus de 30 ans comme
ingénieure** ; la formation CNV est un **parcours de 9 mois en ateliers animés par
l'équipe** de Thomas d'Ansembourg.

## 8. Arbitrages

### Tranché par Sébastien

| # | Sujet | Décision |
|---|---|---|
| 1 | Tarifs | **Affichés** : 80 € (1h30), 60 € (enfant, 1 h), 100 € (couple ou famille, 2 h). |
| 2 | Vocabulaire | **On garde** les formulations du site (« soutien psychothérapeutique », « approche de psychothérapie »). |
| 3 | Prise de RDV | **Formulaire** pour le moment ; pas d'agenda en ligne. |
| 4 | Témoignage | **On republie l'existant.** |
| 5 | Hébergeur (mentions légales) | **Vercel Inc.** Coordonnées à reprendre de la page légale officielle de Vercel au moment de rédiger les mentions (non vérifiées en session). |

### À demander à Nathalie (en attendant, rien n'est inventé)

1. **Zone d'intervention** : communes ou rayon pour le présentiel. Gif-sur-Yvette (91)
   n'est que l'adresse de l'éditeur. En simulation, la section « Où et comment »
   affichera Zoom + « présentiel à votre domicile » avec un emplacement réservé à la zone.
2. **Adresse privée** : la garder dans les mentions légales, ou passer par une
   domiciliation ? Elle n'apparaît ni sur l'accueil ni dans le JSON-LD.
3. **Photos** : existe-t-il des originaux en haute définition ? Les droits d'usage
   sont-ils acquis pour chacune ? En attendant, celles du site sont utilisées en petit
   format.
4. **Témoignages** : d'autres sont-ils disponibles ? Accord et signature pour celui
   qu'on republie ?
5. **Mentions légales** : SIRET et statut juridique.
6. **FAQ** : réponses sur la mutuelle, la durée d'un accompagnement et la première
   séance. En simulation, textes prudents marqués « à valider ».

### Restent ouverts (sans réponse pour l'instant)

- **Formule sur le tarif** : « discutons-en » (site) ou « parlons-en » (brief). La
  simulation reprend le site.
- **Écriture inclusive** : point médian proposé à la place du point.
- **Logo** : existe-t-il un fichier source vectoriel ? Le PNG du site est utilisé en
  attendant.
- **Charte du praticien** : en citer la source (charte commune des praticiens en
  maïeusthésie) ?

## 9. Restructurations notées, non faites ici

Les pages détaillées SEO (`/maieusthesie`, `/pourquoi-consulter`, `/qui-suis-je`,
`/seances`, `/contact`, `/mentions-legales`, `/charte`), l'envoi réel du formulaire
(Resend), le sitemap, les redirections 301 depuis les anciennes URL (`index.html`,
`maieusthesie.html`, `pourquoi.html`, `qui.html`, `seance.html`, `legales.html`,
`chartes.html`) et les analytics sans cookie relèvent du **site de production
(`apps/site`, lot 1)**, hors simulation.
