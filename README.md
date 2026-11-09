# Site personnel

Site personnel construit avec **Hugo**, hébergeable sur GitHub Pages.

## Structure du site

- **Accueil** : présentation (`content/_index.md`)
- **Projets** : tous les projets au même endroit (`content/projets/`), chacun avec sa page dédiée
- **Actualités** (`content/actualites/`)

## Mise en ligne sur GitHub

1. Crée un dépôt public nommé `ton-compte-github.github.io`.
2. Ajoutes-y tous les fichiers de ce dossier.
3. Dans `hugo.toml`, modifie `baseURL`, `title`, `description` et `email`.
4. Dans les paramètres du dépôt, section **Pages**, choisis la source **GitHub Actions**.

## Ajouter un projet

```bash
hugo new projets/nom-du-projet.md
```

(ou copie `content/projets/exemple-projet.md`). Champs à remplir :

| Champ    | Rôle                                                                                       |
|----------|--------------------------------------------------------------------------------------------|
| `title`  | Titre du projet                                                                            |
| `date`   | `AAAA-MM-JJ`. Sert uniquement à classer (le plus récent en premier), n'est pas affichée    |
| `statut` | `en_cours` ou `termine` (exactement l'une des deux valeurs) : affiche l'étiquette « En cours » ou « Terminé » |
| `photo`  | Chemin de l'image, ex : `/assets/images/projets/mon-projet.jpg` (vide = carré gris)         |
| `resume` | Résumé affiché sur la carte et en haut de la page du projet                                |

Sous l'en-tête, écris en Markdown le contenu de la page dédiée (ouverte par le bouton « Voir le projet »). Dépose les images dans `static/assets/images/projets/`.

## Ajouter une actualité

```bash
hugo new actualites/AAAA-MM-JJ-titre.md
```

Champs : `title`, `date` (classement uniquement, non affichée), `abstract` (résumé). Le contenu Markdown s'écrit sous l'en-tête.

## Modifier les pages

| Page / élément     | Fichier                        |
|--------------------|--------------------------------|
| Accueil            | `content/_index.md`            |
| Pied de page       | `layouts/partials/footer.html` |
| Nom dans la barre  | `hugo.toml`                    |

## Personnalisation

Couleurs et police : `static/assets/css/variables.css` (`--pw-primary`, `--pw-accent`, `--pw-bg`, `--pw-border`, `--pw-muted`).

## Aperçu en local

```bash
hugo server -D
```

Le site est disponible sur http://localhost:1313
