# Brief — Lot 0 : simulation de refonte <client>

> ## 🌥 MODE CLOUD          ← à distance, recette au téléphone sur preview Vercel
> ## 💻 MODE LOCAL          ← sur le poste, serveur de recette local
>
> *(Garder UNE seule des deux lignes ci-dessus — elle « active » le mode, cf. `SIGWEB.md §1`.)*
>
> **Projet :** <client> (SIGWEB) · Repo `sebkeops/allolavie` · Branche `feat/lot0-simulation`
> **Périmètre :** `apps/simulation` uniquement. `apps/site` réservé pour plus tard.
> **Principe directeur :** je ne te donne pas un design tout fait. Je te donne une
> **mission, des sources à analyser, des contraintes et des non-négociables**. C'est
> **toi qui proposes le parti pris visuel** après analyse. Tu analyses et proposes
> d'abord, tu codes ensuite.

---

## 1. Objectif

Produire une **simulation de refonte** (one-page) du site de <client>, à montrer au
prospect pour décrocher le chantier. Ce n'est pas le site final : c'est une **démo
commerciale gratuite** qui doit donner l'effet « c'est nous, en beaucoup mieux ».

Livrable = une **URL Vercel** partageable, servie depuis `apps/simulation`, en `noindex`,
avec un bandeau discret « Simulation SIGWEB — non contractuelle » retirable en une ligne.

## 2. Architecture repo & déploiement

Le monorepo est déjà en place (starter SIGWEB) : `apps/simulation` (cette démo),
`apps/site` (réservé, à créer plus tard), `packages/ui` (composants partagés, au fil de
l'eau). **Thème scopé à `apps/simulation`** pour ne rien imposer au futur site.

**Déploiement Vercel — deux projets, un seul repo :**
- `allolavie-simulation` → *Root Directory* `apps/simulation` → **URL à montrer au prospect**.
- `allolavie-site` (plus tard) → *Root Directory* `apps/site` → branché sur le vrai domaine.

Pourquoi séparé : la simulation est **temporaire** et ne doit jamais finir sur le domaine
de prod. Déploiements séparés = démo sur URL jetable, prod propre, cycles de vie
indépendants, et les composants validés remontent dans `packages/ui`.

## 3. Analyse à mener AVANT de coder 🔍

Avant d'écrire une ligne de design, analyser les sources, puis produire une **note de
parti pris** (`apps/simulation/PARTI-PRIS.md`) **que le client valide** :

1. **Le site actuel du client** — <URL> → extraire l'**ADN visuel** (logo, couleurs
   dominantes, ton, structure). On **fait évoluer** l'identité, on ne plaque pas une
   charte arbitraire. Repérer aussi ce qui cloche (cf. §5).
2. **Un site SIGWEB de référence** — <URL d'un autre site d'artisan SIGWEB> → cible de
   qualité/ergonomie et de finition. S'en inspirer pour la structure et les CTA, **pas
   pour la palette**.
3. **Les données réelles** fournies par le client → vrais textes, photos, réalisations,
   avis, coordonnées.

La note de parti pris tient en une page : palette retenue (justifiée depuis l'existant),
typo, ambiance, liste ordonnée des sections, et ce qui est corrigé par rapport à
l'existant.

## 4. Non-négociables fonctionnels (socle d'un site d'artisan qui convertit)

Quel que soit le design choisi, ces points doivent être présents :

1. **Avis / réputation en avant** (note + nombre d'avis + logo de la source + quelques
   avis réels), si le client en a.
2. **Appel ultra-rapide sur mobile** : numéro **cliquable en header sticky** + **barre
   d'appel fixe en bas d'écran mobile**.
3. **Formulaire de devis qualifié** : nom, **téléphone**, e-mail, commune, type de besoin,
   niveau d'urgence, message, **case RGPD** + lien confidentialité. En simulation :
   `onSubmit` → confirmation côté client, **pas d'envoi réel** (backend = phase payante).
4. **Un seul `<h1>` visible**, hiérarchie Hn propre.
5. **Zoom autorisé** (ne pas bloquer le pinch-zoom — accessibilité).
6. **Section zones d'intervention** + teaser du levier SEO local (« une page par
   commune ») — montré en teaser, **pas construit** dans la simulation.
7. **Conformité visible** : liens Mentions légales / Politique de confidentialité /
   Cookies (pages stub OK), **copyright de l'année en cours**.

## 5. Contenu réel

Tout le texte affiché vit dans `content/` (ou `lib/`), **jamais en dur dans un
composant** — un retour client doit être l'édition d'une ligne. Toute information publiée
vient **d'un document fourni**, jamais d'une déduction. Deux sources qui se contredisent,
ou une donnée ambiguë : **on ne tranche pas**, on met la question dans « À arbitrer ».

## 6. Images & données

- Les photos du site actuel sont publiques : les télécharger vers `public/simulation/` et
  les servir en local via `next/image` (le hotlink cross-origin n'est pas fiable).
- Prévoir un **fallback gracieux** : bloc dégradé + icône plutôt qu'une image cassée.
- Retraitement image : cf. `SIGWEB.md §15` (WebP q82, EXIF supprimé, `cacheControl` 1 an).

## 7. SEO & perf (essentiel)

- `metadata` Next : title + description locale (prestations + ville).
- **JSON-LD `LocalBusiness`** adapté au métier : nom, adresse, tél, zone desservie,
  horaires, note agrégée si disponible. **Aucune approximation** (cf. `SIGWEB.md §7`).
- `lang="fr"`, viewport standard (zoom OK), un seul H1, `next/image`, bon Lighthouse mobile.

## 8. Hors scope simulation (= phase payante, ne pas construire)

Vraies pages par ville · backend formulaire (Resend/Supabase) · blog/CMS · espace admin ·
collecte d'avis automatisée. On les **évoque** comme valeur du devis, on ne les code pas.

## 9. Definition of done

- [ ] Note de parti pris (`PARTI-PRIS.md`) produite et **validée avant le code**.
- [ ] Simulation isolée dans `apps/simulation/`, thème scopé, en `noindex`.
- [ ] Projet Vercel `allolavie-simulation` en ligne, URL récupérée.
- [ ] Palette dérivée de l'identité du client (pas arbitraire).
- [ ] Non-négociables du §4 présents.
- [ ] Images en local + fallback · un seul H1 · zoom autorisé · JSON-LD LocalBusiness.
- [ ] Bandeau « Simulation SIGWEB — non contractuelle », retirable en une ligne.
- [ ] `npm run build` complet passe depuis la racine.
