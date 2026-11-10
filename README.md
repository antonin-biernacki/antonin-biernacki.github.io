# Site personnel

Site personnel construit avec **Hugo**, hébergeable sur GitHub Pages.

## Sommaire

- [Structure du site](#structure-du-site)
- [Mise en ligne sur GitHub](#mise-en-ligne-sur-github)
- [Modifier les pages](#modifier-les-pages)
- [Personnalisation](#personnalisation)
- [Aperçu en local](#aperçu-en-local)
- [Crédits et réutilisation](#crédits-et-réutilisation)

## Structure du site

- **Accueil** : présentation (`content/_index.md`)
- **Projets** : tous les projets au même endroit (`content/projets/`), chacun avec sa page dédiée
- **Actualités** : `content/actualites/`

## Mise en ligne sur GitHub

1. Crée un dépôt public nommé `ton-compte-github.github.io`.
2. Ajoute-y tous les fichiers de ce dossier.
3. Dans `hugo.toml`, modifie `baseURL`, `title`, `description` et `email`.
4. Dans les paramètres du dépôt, section **Pages**, choisis la source **GitHub Actions**.

## Modifier les pages

| Page / élément    | Fichier                        |
|-------------------|--------------------------------|
| Accueil           | `content/_index.md`            |
| Pied de page      | `layouts/partials/footer.html` |
| Nom dans la barre | `hugo.toml`                    |

## Personnalisation

Couleurs et police : `static/assets/css/variables.css`

## Aperçu en local

```bash
hugo server -D
```

Le site est disponible sur <http://localhost:1313>.

## Crédits et réutilisation

Ce site a été créé par Antonin Biernacki avec Claude. Si vous souhaitez le réutiliser, aucun problème : vous pouvez télécharger le code et le déployer dans votre dépôt personnel sans me mentionner. La seule condition est que vous retiriez tout élément personnel me concernant (mon nom, mon CV, ma photo, etc.), afin que je ne sois pas associé à un contenu dont je n’aurais pas connaissance.