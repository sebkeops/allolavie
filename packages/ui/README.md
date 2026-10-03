# @allolavie/ui

Composants présentationnels partagés entre `apps/simulation` et `apps/site`.

- **Aucun contenu métier** (ni texte client, ni coordonnées) : tout passe par les props.
- **Aucune couleur en dur** : les jetons sont résolus par les variables CSS de l'app
  consommatrice, en triplets RVB.
- On extrait ici par **copie sortante**, et seulement le réutilisable sans contenu.
  En cas de doute, on laisse dans l'app (cf. `SIGWEB.md §8`).

Vérification (doit ne rien renvoyer) :

```bash
grep -rnE "#[0-9a-fA-F]{3,8}\b|rgb\(|hsl\(" packages/ui/src
```
