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

## 3. Palette — V3 : la mise en page de la V1, les couleurs du site actuel

> **Historique des recettes.**
> - V1 (sable, terre cuite) : mise en page appréciée, couleurs trop éloignées du site actuel.
> - V2 (fond photo feuillage, vert anis vif partout) : refusée, « trop vieillot ».
> - **V3 (actuelle)** : mise en page de la V1, teintes ramenées vers l'identité du site
>   (vert anis, bleu-vert `#156669`, orange du logo), **sans fond photo**.

Le vert devient la couleur d'ambiance (fonds blanc-vert, sections vert pâle, accroche
vert anis doux). Le vert anis vif sert de liseré, l'orange du logo porte le bouton
« Appeler », et le bleu-vert du site reste la couleur des titres.

| Jeton | Hex | Triplet | Origine | Rôle |
|---|---|---|---|---|
| `--paper` | `#FAFCF4` | `250 252 244` | — | Fond principal, blanc teinté vert |
| `--pale` | `#EEF5DD` | `238 245 221` | vert du site, très éclairci | Sections alternées, cartes |
| `--leaf` | `#DDEEB4` | `221 238 180` | vert anis du menu, adouci | Accroche, sections fortes |
| `--lime` | `#9BCB3C` | `155 203 60` | vert anis du menu (`#ADDD4B`) | **Liserés et décor uniquement** |
| `--ink` | `#1F3F40` | `31 63 64` | `#156669` assombri | Texte courant |
| `--muted` | `#465C57` | `70 92 87` | — | Texte secondaire |
| `--teal` | `#156669` | `21 102 105` | **texte actuel, inchangé** | Titres, liens, bouton RDV |
| `--teal-deep` | `#0E4A4C` | `14 74 76` | — | Survol, pied de page |
| `--night` | `#0A2A2B` | `10 42 43` | — | Texte sur orange |
| `--orange` | `#F68808` | `246 136 8` | **logo, inchangé** | Bouton « Appeler », pastilles, décor |
| `--terra` | `#A8470C` | `168 71 12` | orange assombri | Petits accents de texte (tarifs, surtitres) |

| Combinaison | Ratio | AA (≥ 4,5) |
|---|---|---|
| ink sur paper · pale · leaf | 11,0 · 10,2 · 9,2 | ✅ |
| muted sur paper · pale · leaf | 6,9 · 6,4 · 5,8 | ✅ |
| teal sur paper · pale · leaf | 6,5 · 6,0 · 5,4 | ✅ |
| terra sur paper · pale · leaf | 5,7 · 5,3 · 4,8 | ✅ |
| night sur orange (bouton « Appeler ») | 6,1 | ✅ |
| blanc sur teal (bouton RDV) | 6,7 | ✅ |
| paper sur teal-deep (pied de page) | 9,7 | ✅ |
| lime sur paper · orange sur paper | 1,8 · 2,4 | ❌ → **jamais pour du texte**, décor seulement |

## 4. Typographie

Auto-hébergée via `next/font`, sans dépendance ajoutée ni requête tierce au runtime.

- **Titres : Lora**, une serif douce. Elle tient le rôle « posé » à côté d'un logo
  manuscrit et joyeux. Les titres manuscrits PNG disparaissent : seul le logo garde
  l'écriture à la main.
- **Texte : Nunito Sans**, une sans-serif arrondie et chaleureuse. **18 px** sur mobile,
  interlignage 1,6. Remplace Verdana gras 12 px.

## 5. Ambiance

Lumineuse et vivante plutôt que « cabinet » : la nature et les animaux de ses photos, un
orange qui sourit, des verts frais repris du site actuel, beaucoup d'air. Des courbes « rivière » en séparateurs de section.
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
