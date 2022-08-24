---
layout: default
title: CCI XML et Web 2019
permalink: /teaching/archives/2019/cci-xml-web-2019-tp2
---

# Exercice 1 : HTML Basique

Recréez votre CV en HTML, en vous basant sur le fichier XML de la semaine dernière.

Commencer par créer un fichier index.html contenant le code suivant:

```html
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<h1>My First Heading</h1>
		<p>My first paragraph.</p>
	</body>
</html>
```
Et l'ouvrir avec un navigateur.

Maintenant compléter le CV:

* Chaque section du CV correspond à un div. démarrant par un titre.
* Ajouter des liens externes vers les formations et les entreprises.
* Ajouter un menu en haut de la page avec liens internes vers les différentes sections.
* Valider le fichier HTML

# Exercice 2 : CSS

Améliorer la mise en page avec un fichier CSS: changer la taille et la couleur des différents éléments, décaler le contenu de chaque section vers la droite.

# Exercice 3 : Mise en ligne sur GitHub

Github est un service en ligne permettant d'abord de versioner son code et de collaborer sur un projet.

Github offre la possibilité d'héberger une page Web associée à un projet.

Créer un compte Github. Attention votre nom d'utilisateur apparaitra dans l'URL de votre site sous la forme https://nom.github.io/
Se rendre sur le repository (projet) suivant https://github.com/lachand/cv/, et cliquer sur le bouton fork, qui importera le projet dans votre compte.
Maintenant se rendre dans les Settings (préférences) et activer le mode Github pages associé à la master branch.

Revenir sur votre projet cliquer sur le fichier index.html. Puis sur l'icone "crayon" éditer, copier coller le contenu de votre propre index.html et sauver.
Se rendre sur http://votrenom.github.io/cv.
Revenir sur votre projet et ajouter le fichier css (créer un fichier sur github, puis copier/coller le contenu).

# Exercice 4 : CSS avancé

Intégrer material design pour vous aider dans la mise en page du site. Voici un exemple d'utilisation.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Include material design icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!-- include stylesheet from material design -->
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
    <!-- include javascript needed for material design -->
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
  </head>

  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```
Vous pouvez trouver des exemples de sites à l'adresse suivante : https://getmdl.io/templates/index.html
