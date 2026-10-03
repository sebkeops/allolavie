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

**<Nom commercial du client>** — <forme juridique>, <ville> (<code postal>), <métier> sur
<zone desservie>. Prestataire : SIGWEB.

<Un site existe-t-il déjà sur le domaine visé ? Si oui, la bascule DNS est le dernier
geste du projet.>

## 1. Tarifs sur le site

<Le client veut-il, ou non, des tarifs affichés ? Par défaut chez SIGWEB : aucun montant
sauf mention légale obligatoire (capital social). À confirmer avec le client.>

## 2. `apps/simulation` est figée (dès validation)

Une fois la simulation validée par le client, elle reste montrable telle quelle :
**on n'y touche plus**. L'extraction vers `packages/ui` se fait par **copie sortante**
(cf. `SIGWEB.md §8`).

## 3. Design

<Le design est-il validé sans réserve ? Les retours attendus portent-ils sur le contenu
ou aussi sur la forme ? À préciser après le parti pris.>

## 4. Données non tranchées

<Lister ici les données ambiguës ou contradictoires entre sources (orthographe d'un nom,
ancienneté, domaines multiples…). Ne pas trancher soi-même — cf. `SIGWEB.md §7`.>

## 5. Identité visuelle

<Palette dérivée du logo / de l'existant, déclarée en variables CSS (triplets RVB) dans
`apps/site/app/globals.css`. Reporter ici les jetons et leurs rôles une fois le parti
pris validé, ainsi que les contraintes d'accessibilité AA calculées.>

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

<Rappels par défaut SIGWEB : aucune donnée de prospect stockée (envoi courriel), seul un
compteur anti-abus anonyme ; destinataire par variable d'environnement, jamais en dur.
Préciser l'adresse de réception et la politique d'accusé de réception au prospect.>

## 9. Périmètre par lot

Un lot livre ce qu'il annonce, rien de plus. Les envies de restructuration hors périmètre
se notent dans la PR — elles ne se codent pas.
