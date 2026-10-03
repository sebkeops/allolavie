# SIGWEB.md — règles communes à tous les projets clients

Socle réutilisable tel quel d'un client à l'autre. **Rien ici ne doit être propre à un
client donné** : ce fichier est copié sur les projets suivants, et une règle spécifique
qui s'y glisse se propage en silence.

Le fichier `CLAUDE.md` du dépôt porte le spécifique client et prime en cas de
contradiction.

> **Critère d'appartenance.** Une règle a sa place ici si elle serait vraie chez un
> menuisier ou un boucher. Sinon elle va dans `CLAUDE.md`. En cas de doute, on la
> laisse dans `CLAUDE.md` : un `SIGWEB.md` incomplet se complète, un `SIGWEB.md`
> contaminé se propage.

---

## 1. Modes de travail

Chaque brief indique son mode : `MODE LOCAL` ou `MODE CLOUD`. **En l'absence de
mention, demander avant de commencer — ne pas deviner.**

### MODE LOCAL — la session tourne sur le poste de Sébastien

- Découper le lot en étapes, **annoncées au début**.
- À chaque étape terminée : **aucun commit**. On lance un serveur local, on le laisse
  tournant, on donne son URL et une checklist de recette.
- On attend la **validation explicite**, puis on commite l'étape en local.
- **Push et PR en fin de lot seulement.**

### MODE CLOUD — la session tourne à distance, la recette se fait au téléphone

- **Ne lancer aucun serveur local** : il serait inaccessible.
- À chaque étape terminée : **commit et push** sur la même branche. **PR en brouillon
  ouverte dès la première étape**, pour disposer tout de suite de l'URL de preview
  Vercel.
- Checklist rédigée **pour un test sur mobile** : gestes courts, attendus visibles sans
  zoom, rendu mobile prioritaire.
- **Étapes plus petites qu'en mode local** : relire un diff et tester une preview sur
  téléphone est lent.
- Signaler de façon **isolée** toute action hors dépôt — migration Supabase, variable
  d'environnement, création de compte — avec la marche à suivre **depuis un navigateur
  mobile**.
- On attend la **validation explicite** avant de passer à l'étape suivante.

### Commun aux deux modes

- **On ne merge jamais soi-même.**
- On **liste toujours ce qu'on n'a pas pu vérifier**.
- **Aucune vérification visuelle automatisée** : la recette visuelle appartient à
  Sébastien (voir §6).

---

## 2. Ce qu'on ne fait jamais

| Interdit | Pourquoi |
|---|---|
| **Pousser sur `main`** | Une branche par lot, merge par PR après test de la preview. |
| **`any` en TypeScript** | `strict` partout. Si le type résiste, écrire le type — pas le contourner. |
| **Pages Router** | App Router exclusivement. Pas de `pages/`, pas de `getServerSideProps`. |
| **Prisma**, ou tout autre ORM | On parle à Supabase via son client officiel. Pas de couche intermédiaire. |
| **Commiter `sources/`** | Originaux lourds et documents internes du client. Gitignoré dès le premier commit. |
| **Commiter un secret** | `.env.local` gitignoré. Les clés vivent dans les variables d'environnement Vercel. |
| **Merger soi-même** | La décision de mise en production appartient au client. |

## 3. Stack imposée

Next.js en **App Router**, React, TypeScript `strict`, Tailwind, Supabase, Vercel.
Les versions exactes du projet en cours sont dans son `STACK.md`.

- **Pas de bibliothèque de composants** : le design vient de l'identité du client, une
  bibliothèque tierce imposerait la sienne.
- **Polices auto-hébergées** — aucune requête tierce au runtime, aucun décalage de mise
  en page, et un point de moins dans la politique cookies.
- **Aucune dépendance ajoutée sans validation.** Réutiliser l'existant, sinon le CSS
  natif. Si une dépendance paraît indispensable, demander avant.

## 4. Workflow Git

1. `git fetch` + `git pull origin main` + `git log --oneline` **avant** de brancher.
2. Une branche par lot : `feat/lotN-…`, `fix/…`, `docs/…`.
3. **Jamais de push direct sur `main`.**
4. **`npm run build` complet depuis la racine** avant de pousser — pas seulement
   `tsc --noEmit` : le lint casse le build Vercel là où `tsc` passe.
5. Merge par PR, après test de la preview, **par le client**.
6. Vérifier que `git status` ne montre jamais `sources/`.
7. Une modification trouvée dans l'arbre de travail et qui n'est pas de soi se
   **commite à part**, avec un message qui le dit.

## 5. Ce que la PR doit contenir

- Les **écarts visuels** attendus, chacun justifié ou signalé comme non intentionnel.
- Une section **« À arbitrer »** : contradictions entre sources, données non tranchées.
- La liste des **restructurations tentantes non faites**, pour discussion ultérieure.
- **Ce qui n'a pas pu être vérifié**, explicitement.
- Toute **action hors dépôt** requise avant déploiement : migration, variable
  d'environnement, réglage de compte.

## 6. Vérification — ce qui se vérifie par le code

**La vérification visuelle appartient au client.** Elle ne se fait pas en session :

- aucune capture d'écran automatisée, aucun navigateur sans interface piloté à cette
  fin ;
- aucun serveur local démarré pour regarder soi-même le rendu — l'unique exception est
  le serveur de recette du MODE LOCAL ;
- ne jamais conclure sur une apparence : couleur perçue, alignement, équilibre d'une
  grille, comportement d'une animation à l'œil.

Ce qui se vérifie soi-même, parce que le code y répond :

- `npm run build` complet passe depuis la racine ;
- le **HTML produit** contient les éléments attendus — texte, classes, attributs ARIA,
  balisage structuré. Il s'inspecte dans la sortie de build (`.next/server/app/*.html`),
  sans lancer de serveur ;
- les **contrastes se calculent** (formule WCAG), ils ne s'apprécient pas ;
- le **débordement horizontal se raisonne** (§10).

**Dans la PR, décrire le changement de rendu attendu plutôt que le constater.** « La
section devrait s'afficher ainsi » est honnête ; « la section s'affiche bien ainsi » ne
l'est pas si personne n'a regardé.

Penser à **arrêter les serveurs devenus inutiles** : pas de processus orphelins qui
s'accumulent et se disputent les ports.

## 7. Contenu et sourcing

- Tout le texte affiché vit dans `content/`, **jamais en dur dans un composant**. Un
  retour client doit être l'édition d'une ligne.
- Toute information publiée vient **d'un document fourni**, pas d'une déduction.
- Deux sources qui se contredisent, ou une donnée ambiguë : **on ne tranche pas**, on
  met la question dans « À arbitrer ».
- **Mentions légales et balisage structuré engagent juridiquement le client** : aucune
  approximation. Mieux vaut une donnée absente qu'une donnée approchée — un `geo` faux
  est pire que pas de `geo`.

### Ne pas redessiner

- On ne redesigne pas, on n'« améliore » pas, on ne refactore pas spontanément.
- Une maquette valide **le contenu et les fonctionnalités, pas le pixel**. Un écart
  imposé par une contrainte réelle — page nouvelle, comportement responsive, liste plus
  longue que prévu — est acceptable, mais **signalé explicitement dans la PR**, jamais
  introduit en silence.
- Une envie de restructuration se **note dans la PR**, elle ne se code pas.

## 8. Paquet UI partagé

*Si le projet comporte un paquet UI partagé — tous n'en ont pas, et un projet mono-app
n'a aucune raison d'en créer un. Dans le cas contraire, cette section ne s'applique pas.*

- **Aucun contenu métier** : ni texte client, ni coordonnées. Tout passe par les props.
- **Aucune couleur en dur** : pas de `#hex`, pas de `rgb()`. Les jetons sont résolus
  par les variables CSS de l'app consommatrice, déclarées en **triplets RVB**
  (`14 55 66`) pour préserver les modificateurs d'opacité de Tailwind.
- Y va le présentationnel réutilisable et sans contenu. Le reste reste dans l'app.
- **En cas de doute, on laisse dans l'app.** Un composant mal extrait coûte plus cher
  qu'un composant non extrait.

```bash
grep -rnE "#[0-9a-fA-F]{3,8}\b|rgb\(|hsl\(" packages/ui/src   # doit ne rien renvoyer
```

## 9. Conventions base de données

- Clés primaires en **UUID** (`gen_random_uuid()`), jamais d'entier auto-incrémenté.
- **`created_at` / `updated_at`** (`timestamptz`) sur chaque table, `updated_at`
  maintenu par trigger.
- **Suppression logique** : colonne `deleted_at` nullable. On ne supprime pas une
  ligne, on la date. Les vues et requêtes filtrent `deleted_at is null`.
  *Exception admise pour les compteurs techniques éphémères, qui doivent réellement
  disparaître — à justifier en PR.*
- **RLS activée sur chaque table**, sans exception. Une table sans politique est une
  table publique.
- **RLS et privilèges sont deux mécanismes distincts.** `service_role` ignore les
  *politiques* de RLS, mais reste soumis aux `GRANT` SQL ordinaires. Supabase les
  accorde d'habitude par `ALTER DEFAULT PRIVILEGES` — encore faut-il que la table ait
  été créée par le rôle qui les porte. Créée autrement, elle échoue en
  `42501 · permission denied` alors même que la clé est la bonne. **Toute migration qui
  crée une table pose donc ses `GRANT` explicitement**, et retire ceux des rôles
  publics.
- Une migration **déjà appliquée ne se réécrit pas** : on la corrige par une migration
  suivante, idempotente.
- Nommage en `snake_case`, tables au pluriel.
- Migrations **versionnées dans le dépôt**, jamais appliquées à la main en production.

## 10. Débordement horizontal

Un seul élément plus large que l'écran élargit tout le document et décale chaque
section. Le symptôme apparaît loin de la cause : la section qui semble cassée est
souvent la victime, pas la coupable. **On cherche la cause, on ne rattrape jamais
section par section.**

À chaque défilement horizontal ou contenu volontairement plus large que l'écran —
bandeau défilant, carrousel, tableau large :

- **le conteneur contient son propre débordement** (`overflow-x` non `visible`), il ne
  le laisse jamais remonter au document ;
- **`min-w-0` sur les items de grille et de flex** qui l'hébergent : sans lui, leur
  largeur minimale automatique se cale sur le contenu et élargit la colonne ;
- **ne jamais repasser ce conteneur en `overflow: visible`** dans une variante — media
  query `prefers-reduced-motion` comprise. C'est par là qu'une régression est déjà
  passée ;
- les commandes annexes (flèches, pastilles) doivent pouvoir **se replier** plutôt que
  pousser leur conteneur.

Le garde-fou global va sur **`html`**, pas seulement `body` : c'est l'overflow de
l'élément racine qui est propagé au viewport. Et en **`hidden`, pas `clip`** :
`overflow-x: clip` face à un `overflow-y` resté `visible` fait calculer ce dernier à
`clip`, ce qui **bloquerait le défilement vertical de la page**.

## 11. Animations et révélations

**Le contenu est visible par défaut ; l'animation est un ajout.** L'état masqué ne doit
exister que si un script d'amorçage a pu s'exécuter — jamais sans JavaScript, jamais
sous `prefers-reduced-motion`. Aucun scénario ne doit laisser une section blanche : CSS
lent, script en erreur, robot d'indexation.

Prévoir un **filet temporel** qui révèle ce qui resterait masqué au bout de quelques
secondes, et une **marge de déclenchement anticipée** pour absorber le défilement
rapide.

Ne jamais faire dépendre de l'hydratation un élément qui porte le message principal :
il resterait masqué jusqu'au chargement du JavaScript.

## 12. Server Actions

**Un fichier portant `"use server"` n'exporte que des fonctions asynchrones.** Rien
d'autre : ni constante, ni objet, ni tableau, ni instance de schéma.

Chaque export d'un tel fichier devient un point d'entrée appelable à distance ; une
valeur n'a aucun sens dans ce rôle, et le moteur refuse le module entier :

```
Error: A "use server" file can only export async functions, found object.
```

**Le piège : ça passe le build sans un mot.** Le défaut n'apparaît qu'au premier appel
réel, donc en production. C'est déjà arrivé, avec un simple `export const etatInitial`.

- Types, constantes et valeurs partagées vont dans un **module voisin sans directive**,
  importé par la Server Action comme par le composant client.
- Les fonctions internes non exportées restent où elles sont, sans contrainte.
- Vérification avant push :

```bash
# Motif ancré en début de ligne : la directive est toujours la première instruction du
# fichier. Sans l'ancre, les fichiers qui se contentent de MENTIONNER « use server » en
# commentaire remontent aussi, et la vérification ne veut plus rien dire.
for f in $(grep -rl '^"use server"' apps --include=*.ts --include=*.tsx); do
  echo "$f"; grep -n "^export" "$f"
done
# ne doit renvoyer que des « export async function »
```

## 13. Journalisation

- **Ne jamais interpoler un objet d'erreur dans une chaîne.** `"…" + err` produit
  `[object Object]`, et le diagnostic est perdu. On extrait les champs utiles
  (`message`, `code`, `details`, `hint`) et on les journalise **séparément**.
- **Une erreur de bibliothèque n'est pas forcément une `Error`.** Une erreur PostgREST
  est un objet nu : `err instanceof Error` y est toujours faux. Ne jamais faire reposer
  un diagnostic sur ce test seul.
- Repli de sérialisation via `JSON.stringify(err, Object.getOwnPropertyNames(err))` :
  `JSON.stringify` seul rend `{}` sur une `Error`, dont les propriétés ne sont pas
  énumérables.
- **Aucune donnée personnelle dans les journaux** : ni nom, ni téléphone, ni adresse,
  ni identifiant de prospect.
- **Préfixer par domaine fonctionnel** (`[devis]`, `[upload]`) pour rendre les journaux
  filtrables.
- **Un traitement silencieux est un traitement indiagnostiquable.** Une soumission
  écartée, un envoi abandonné, une protection déclenchée : ça se journalise côté
  serveur, même si la réponse rendue reste volontairement neutre.
- Ne jamais ignorer l'erreur d'une écriture. Un `insert` non vérifié échoue en silence.

## 14. Messages d'erreur à l'écran

En **français**, compréhensibles par le client final, **sans détail technique** : ni
pile d'appels, ni nom de module, ni identifiant interne. Le détail part dans les
journaux. Un message d'erreur dit ce qui s'est passé et quoi faire ensuite — et, pour
un artisan, propose le téléphone.

**Un échec technique ne doit pas coûter un prospect** : quand une demande commerciale
est en jeu, mieux vaut confirmer à l'utilisateur et alerter côté serveur que d'afficher
une erreur qui le fera partir. Ce choix impose que les échecs soient **réellement
surveillés** — et il se signale en PR.

## 15. Upload d'images

- **`cacheControl` à un an — `31536000` — par défaut, sur chaque upload.** Toute valeur
  inférieure se **justifie en PR**.

  Le sens de la règle tient à ceci : `3600` est la **valeur par défaut du SDK**, celle
  qui a provoqué l'incident d'egress. Un plancher fixé à `3600` autoriserait donc
  précisément la valeur fautive — une règle qui permet ce qu'elle prétend empêcher ne
  protège de rien.

  Un média est immuable dès lors que son nom porte un horodatage : le remplacer crée un
  nouveau fichier, donc une nouvelle URL. Il n'y a rien à invalider, et aucune raison de
  le faire réexpirer toutes les heures.
- Nommage : `[type]-[slug]-[timestamp].webp`.
- **WebP qualité 82**, **métadonnées EXIF supprimées** — les photos de téléphone
  embarquent des coordonnées GPS.
- Retraitement **technique** uniquement : recadrage, redressement, exposition,
  contraste, balance des blancs. Jamais d'ajout ni de suppression d'élément : ces
  photos documentent un travail réel, et une image trop retouchée se voit.
- Avant publication : aucune **plaque d'immatriculation** étrangère au client lisible,
  aucun élément permettant d'identifier le **domicile d'un particulier**.

## 16. Indexation avant mise en ligne

Tant que le domaine visé pointe encore sur l'ancien site, **tout reste fermé** : sinon
le moteur indexe la preview et crée un doublon face au vrai domaine le jour de la
bascule.

- `robots: { index: false, follow: false }` dans le layout racine **et** `Disallow: /`
  dans `robots.ts` — verrou volontairement redondant.
- Chaque emplacement porte un commentaire `GO-LIVE`, listable par
  `grep -rn "GO-LIVE"`.
- **Jamais d'URL en dur** : tout passe par `NEXT_PUBLIC_SITE_URL`.

**Robots d'IA bloqués en permanence**, y compris après la mise en ligne : GPTBot,
ClaudeBot, CCBot, PerplexityBot, Meta-ExternalAgent, Amazonbot, Bytespider,
Google-Extended. Ça réduit l'egress parasite, poste qui compte sur une infrastructure
mutualisée. **Googlebot et Bingbot ne sont jamais bloqués** au titre des robots d'IA —
ce sont eux qui apportent les clients.

## 17. Données personnelles

- Ne stocker que ce qui est nécessaire. Un formulaire qui envoie un courriel n'a pas
  besoin d'alimenter une table.
- Un compteur anti-abus n'est pas une donnée de prospect : il ne contient qu'une
  **empreinte**, jamais une adresse en clair.
- **Une IP se hache en HMAC, pas en SHA-256 nu** : l'espace IPv4 s'énumère en quelques
  minutes, un hachage simple se renverse. Le secret ne quitte pas le serveur.
- L'hébergement des données reste en **région UE**.
