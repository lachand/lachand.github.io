---
layout: default
title: Conception agile de projets informatiques et génie logiciel TP3 Refactoring et design-patterns
permalink: /teaching/2022/conception-projet-agile-2022-tp-3
---
# Conception agile de projets informatiques et génie logiciel : TP3 - Refactoring et design-patterns

## Objectif

Il vous est demandé d’effectuer une ré-ingénierie d’un code existant en mettant en œuvre les patrons de conception vus en cours.

Votre travail devra être rendu sous forme d’un projet déposé sur Github, au plus tard le 30 Novembre à 17h59.

Penser à remplir dès à présent le [questionnaire de rendu](https://forms.gle/3qWkkT6uPAZJNEqP7) indiquant votre binôme et votre dépôt Git. Le dépôt ne sera relevé qu’après la date de rendu.

## Déroulement

Le travail peut être organisé en deux étapes :

- la première sera une étape de ré-ingénierie (refactoring) du code utilisé dans les premiers TP, afin de mieux structurer le projet et le rendre plus modulaire.
- la seconde sera dédiée à l’extension du projet pour réaliser un jeu plus complet.

## Ressources
- [Page recensant les design patterns](https://en.wikipedia.org/wiki/Software_design_pattern)
- [draw.io](https://draw.io) Pour la modélisation

## Partie 1 : Ré-ingénierie du code

Le code fourni lors de la première séance est un package relativement fouillis. Toutes les classes sont dépendantes les unes des autres, les couches graphique et métier ne sont pas séparées.

Il va vous falloir reconcevoir le code en appliquant les patrons de conception adéquats. Pour cela, vous devez réorganiser les éléments de l’application. Entre autres, l’affichage des joueurs doit être séparé de leur gestion (déplacements, stratégies, etc.). Les changements dans le modèle métier (déplacements) devront être répercutés dans l’affichage.

L’utilisation d’entrées claviers ou souris entraînera des changements dans le modèle métier en passant par un contrôleur.
## Partie 2 : Extension

On commencera par ajouter des éléments de contrôle au jeu pour le faire démarrer, le mettre en pause, etc. On utilisera pour cela des widgets javafx tels que des boutons.

Ajouter ensuite un mécanisme de contrôle des collisions en réfléchissant à son placement dans une architecture MVC. Les collisions peuvent être entre :

- une balle et un joueur – ce cas doit être géré obligatoirement
- une balle et les murs
- une balle et un obstacle

Chaque joueur avec une IA aura une tactique propre qui consiste à :

- se déplacer aléatoirement
- suivre le joueur contrôlé par un humain

Toute autre stratégie est possible.

Faites en sorte que la tactique puisse être changée en cours de partie (via une action utilisateur sur un bouton par exemple).

Pour suivre et contrôler le jeu, on disposera de plusieurs vues:

- une présentant le terrain
- une autre présentant le score
- une autre les contrôles du jeu

Au TP suivant nous rajouterons des tests permettant de vérifier qu’une balle ou un joueur ne sort jamais du terrain, et que les obstacles sont bien considérés.
Conseils pour la réalisation

Faites un modèle du domaine du jeu que vous voulez mettre en place : acteurs, caractéristiques des acteurs, obstacles, tactique, etc. Organisez vos classes en packages pertinents.

Pensez à utiliser les patterns de création, mais aussi de structure et de comportement.

## Rendu du TP / projet

Les projets peuvent être rendus en binômes.

Votre travail devra être rendu sous forme d’un projet déposé sur Github, au plus tard le 30 Novembre à 17h59. (seule les versions poussées avant cette date seront utilisées)

Pensez à remplir dès à présent le questionnaire de rendu indiquant votre binôme et votre dépôt Github. Le dépôt ne sera relevé qu’après la date de rendu.
Votre dépôt sur github devra contenir :

- un fichier README.txt (ou .md) à la racine du projet
- un fichier maven pour le build du projet
- les sources (fichiers Java)
- le rapport en PDF (6 pages maximum, format libre).

Le rapport doit comprendre une présentation globale du projet, une motivation des choix d’architecture (et des patterns choisis), et leur explication en s’aidant de diagrammes appropriés et adaptés au degré de précision et au type d’explication. Donc des diagramme de classe, mais pas que cela, et pas de plats de spaghettis généré automatiquement représentant tout le code.

Barême indicatif (sur 21, remis sur 20) :

- Réalisation et exécution : 15 points
  - Clone git qui fonctionne (0,5 pts)
  - Compilation Maven (1 pts)
  - Code qui tourne directement sur l’ordinateur de l’évaluateur (1 pt)
  - Qualité du code (2 pts)
  - Structure globale du code, utilisation de Packages (0,5 pts)
  - README et respect des consignes (1 pts)
  - Interface (UI) propre (1 pts)
  - Stratégies simples implémentées (2 pts)
  - Gestion des tirs / touchés (1 pts)
  - Patterns mis en oeuvre (3 pts)
- Rapport et modélisation : 6 points
  - Qualité de la réalisation Patterns utilisés (MVC est obligatoire + 2 autres minimums) (3pts)
  - Explications (3pts)
- Les points suivants entrainent des malus (jusqu’à -5 pts)
  - Contenu et forme (voir ci-dessus)
  - Orthographe

