# valentin.lachand.net

Site personnel de Valentin Lachand-Pascal, en Jekyll sur GitHub Pages, avec le système de design Signature.

## Structure

| Dossier | Rôle |
|---|---|
| `_data/` | Contenu : `publications.yml`, `projects.yml`, `icom.yml` (service ICOM), `courses.yml` (archives), `talks.yml`, `links.yml`, `i18n.yml` (textes FR et EN) |
| `_layouts/`, `_includes/` | Gabarits : accueil, recherche, projets, enseignement, interventions, thèse |
| `assets/vendor/signature/` | Jetons Signature, copiés tels quels (ne pas les éditer) |
| `assets/css/site.css` | Composants du site, uniquement avec `var(--...)` |
| `assets/js/site.js` | Thème, zone sous le pointeur, filtres, compteurs |
| `assets/fonts/` | Fraunces, Inter Tight, IBM Plex Mono (auto-hébergées) |
| `en/` | Pages anglaises |
| `teaching/`, `presentations/` | Pages de cours et de présentations |

Pour ajouter une publication ou un projet, modifier le fichier de `_data/` : les pages FR et EN se mettent à jour.

## Tester en local

Avec Docker :

```bash
docker run --rm -p 4000:4000 -v "$PWD":/srv/site -w /srv/site ruby:3.3 \
  sh -c "gem install github-pages webrick -N && jekyll serve -H 0.0.0.0"
```

Ou, avec Ruby : `bundle install && bundle exec jekyll serve`.

## Règles de design

Aucune couleur ni police en dur : tout passe par les jetons. Les animations décélèrent sans rebond et s'arrêtent sous `prefers-reduced-motion`.
