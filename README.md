<!-- clean-readme: type=realisation; langue=fr; v=2 -->
# Site personnel

Site personnel construit avec Hugo et hébergé sur GitHub Pages. Il présente mon parcours, mes projets et mes actualités, et donne accès à mon CV. Le contenu est écrit en Markdown, et le site est reconstruit et publié à chaque push sur `main`.

> **État** : En cours.

## Sommaire

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Points techniques](#points-techniques)
- [Structure du dépôt](#structure-du-dépôt)
- [Compilation et lancement](#compilation-et-lancement)
- [Utilisation](#utilisation)
- [Déploiement](#déploiement)
- [Limites](#limites)
- [Crédits](#crédits)

## Aperçu

Le site est en ligne à l'adresse <https://antonin-biernacki.github.io>.

Il contient trois sections, plus la page du CV :

- **Accueil** : présentation (`content/_index.md`) ;
- **Projets** : tous les projets au même endroit (`content/projets/`), chacun avec sa page dédiée ;
- **Actualités** : `content/actualites/` ;
- **CV** : page dédiée qui affiche le PDF (`content/cv.md`).

## Fonctionnalités

- Liste des projets classés par date, avec photo, résumé, statut (en cours ou terminé) et lien vers le dépôt GitHub.
- Liste des actualités classées par date.
- Page CV qui affiche le PDF.
- Liens externes et PDF ouverts dans un nouvel onglet.
- Adresse e-mail absente du HTML en clair.
- Flux RSS sur la page d'accueil.
- Page 404.

## Points techniques

- Gabarits Hugo : `baseof`, partials (barre de navigation, pied de page, cartes) et shortcode `email`.
- Rendu personnalisé des liens Markdown (`layouts/_default/_markup/render-link.html`).
- Adresse e-mail fournie au build par une variable d'environnement, encodée en base64 dans le HTML, puis reconstruite en JavaScript (`static/assets/js/email.js`).
- Archétypes pour créer un projet ou une actualité avec les bons champs.
- CSS sans framework, avec les couleurs et la police dans un fichier de variables.
- Déploiement par GitHub Actions.

## Structure du dépôt

```text
.github/workflows/hugo.yml   # build et déploiement sur GitHub Pages
archetypes/                  # modèles de projet et d'actualité
content/                     # pages en Markdown
    projets/                 # un fichier par projet
    actualites/              # un fichier par actualité
layouts/                     # gabarits Hugo, partials et shortcodes
static/                      # fichiers servis tels quels
    assets/                  # CSS, JavaScript, images, CV en PDF
    fonts/                   # police Space Grotesk
    icones/                  # favicons
hugo.toml                    # configuration du site
```

## Compilation et lancement

### Prérequis

- Hugo, version extended. Le déploiement utilise la version 0.140.0.

Aperçu en local :

```bash
HUGO_PARAMS_EMAIL="ton.adresse@exemple.com" hugo server -D
```

Le site est disponible sur <http://localhost:1313>.

## Utilisation

| Page ou élément | Fichier |
|---|---|
| Accueil | `content/_index.md` |
| Pied de page | `layouts/partials/footer.html` |
| Nom dans la barre | `hugo.toml` |
| Couleurs et police | `static/assets/css/variables.css` |

Pour ajouter un projet ou une actualité à partir de l'archétype :

```bash
hugo new content projets/AAAA-MM-JJ-titre.md
hugo new content actualites/AAAA-MM-JJ-titre.md
```

## Déploiement

Le workflow `.github/workflows/hugo.yml` construit le site avec `hugo --minify` et le publie sur GitHub Pages à chaque push sur `main`. Il peut aussi être lancé à la main.

Pour déployer le site dans un autre compte :

1. Crée un dépôt public nommé `ton-compte-github.github.io`.
2. Ajoute-y tous les fichiers de ce dossier.
3. Dans `hugo.toml`, modifie `baseURL`, `title` et `description`.
4. Dans les paramètres du dépôt, section **Secrets and variables -> Actions -> Variables**, crée la variable `SITE_EMAIL` avec ton adresse e-mail. Elle n'est ainsi jamais écrite dans le code, et le site ne l'affiche pas en clair dans le HTML.
5. Dans les paramètres du dépôt, section **Pages**, choisis la source **GitHub Actions**.

## Limites

- Sans JavaScript, le lien e-mail mène à la page du CV au lieu d'ouvrir la messagerie.
- Sans la variable `HUGO_PARAMS_EMAIL`, aucun lien e-mail n'est affiché.

## Crédits

Ce site a été créé par Antonin Biernacki. Si vous souhaitez le réutiliser, aucun problème : vous pouvez télécharger le code et le déployer dans votre dépôt personnel sans me mentionner. La seule condition est que vous retiriez tout élément personnel me concernant (mon nom, mon CV, ma photo, etc.), afin que je ne sois pas associé à un contenu dont je n'aurais pas connaissance.
