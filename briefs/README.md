# briefs/ — briefs de lot

Les briefs sont déposés ici pour être **lisibles depuis une session cloud**, où l'on
n'a pas accès au poste de Sébastien. Une session qui démarre commence par lire le brief
du lot concerné.

## Nommage

`lotN[lettre]-sujet-en-minuscules.md`

```
lot4a-socle-back-office.md
lot4b-crud-realisations.md
lot5-migration-seo.md
```

Un correctif issu d'une revue reprend le numéro du lot d'origine :
`lot3-correctifs-formulaire.md`.

Pas de préfixe `brief-` : le dossier le dit déjà.

`lot0-simulation-refonte.md` est le brief de la maquette, antérieur au découpage en
lots. De nombreux commentaires de `apps/simulation` y renvoient sous la forme
« BRIEF §N » ; ces renvois n'ont pas été réécrits, la simulation étant figée.

## ⚠️ Aucune information commerciale

Ces fichiers sont versionnés dans le dépôt. Ils ne contiennent **que du technique et du
fonctionnel** :

| Interdit ici | |
|---|---|
| Tarifs, devis, montants facturés | Coûts d'infrastructure |
| Marges, remises | Stratégie de vente ou de négociation |
| Échanges commerciaux avec le client | Conditions contractuelles |

Un brief décrit **ce qu'il faut construire et pourquoi**, jamais ce que ça coûte ni ce
que ça rapporte.

Cette règle vaut aussi pour ce qui est publié sur le site : voir
[CLAUDE.md §1](../CLAUDE.md), qui interdit tout tarif à l'écran.

## Rédaction

Un brief utile indique, dans l'ordre :

1. **Le mode de travail** — `MODE LOCAL` ou `MODE CLOUD` (voir
   [SIGWEB.md §1](../SIGWEB.md)). Sans mention, la session doit demander avant de
   commencer.
2. Le **périmètre** : ce qui est touché, ce qui ne l'est pas.
3. Ce qu'il faut faire, et **pourquoi** — la raison permet de trancher les cas non
   prévus.
4. Ce qui est **hors périmètre**, explicitement.
5. Une **definition of done** vérifiable.
