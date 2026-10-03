# STACK.md — versions et outils

Photographie de l'outillage. À mettre à jour à chaque montée de version.

## Exécution

| Outil | Version | Note |
|---|---|---|
| Node.js | **22.x** | Fixé sur une majeure dans `engines`. Vercel s'y aligne. |
| npm | **11.16.0** | Version exacte via `packageManager` — pas de plage. |
| Turborepo | **2.10.8** | Version fixe en devDependency racine, pour ne pas dépendre de la version globale de Vercel. |

> Le poste de développement peut tourner sur une majeure de Node plus récente. `npm
> install` émet alors un avertissement `EBADENGINE` : c'est attendu et sans effet.

## Applications

| Paquet | Rôle | Statut |
|---|---|---|
| `apps/simulation` | Démo commerciale (lot 0) | Active, puis **figée** après validation |
| `apps/site` | Site de production | **À créer au lot 1** (réservé) |
| `packages/ui` | Composants présentationnels partagés | Alimenté au fil de l'eau par copie sortante |

## Cadre applicatif

| Dépendance | Version | Note |
|---|---|---|
| Next.js | **^15.5.20** | App Router. Le plancher `15.5.20` corrige la CVE-2025-66478. |
| React / React DOM | **19.0.0** | Version épinglée. |
| TypeScript | **^5** | `strict: true`, `any` interdit. |
| Tailwind CSS | **^3.4.17** | Pas de bibliothèque de composants — tout à la main. |

## Parti pris techniques

- **Aucune bibliothèque de composants.** Le design vient de l'identité du client.
- **Polices auto-hébergées** via `next/font` — aucune requête tierce au runtime.
- **Thème par variables CSS** déclarées en triplets RVB (`14 55 66`), référencées par
  Tailwind via `rgb(var(--x) / <alpha-value>)` — c'est ce qui permet à `packages/ui` de
  n'écrire aucune couleur en dur tout en gardant les modificateurs d'opacité.

## Hébergement

| Projet Vercel | Root Directory | Domaine |
|---|---|---|
| `allolavie-simulation` | `apps/simulation` | Démo client, en `noindex` |
| `allolavie-site` | `apps/site` | Preview, puis domaine définitif au go-live |
