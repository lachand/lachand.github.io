---
layout: default
title: Conception agile de projets informatiques et génie logiciel TP1 Remise en route Java
permalink: /teaching/2022/conception-projet-agile-2022-tp-1
---
# Conception agile de projets informatiques et génie logiciel : TP1 - Remise en route java

## Ressources
- [Documentation Java](https://docs.oracle.com/en/java/)
- [Quelques rappels sur Java](https://openclassrooms.com/fr/courses/6173501-apprenez-a-programmer-en-java)

## Objectif

Il vous est demandé de mettre en place quelques classes pour vous remettre en tête les grands principes de la programmation orientée objet : messages et collaboration entre objets, attributs et méthodes, constructeurs, héritage, etc.

Pour cela, vous travaillerez sur un jeu de balle au prisonnier.

<span style="color:red"><b>Votre travail servira de base aux TPs suivants qui feront l'objet d'une note globale.
Le travail en binôme est fortement conseillé.</b></span>

## Environnement

Pour développer en Java durant le TP, vous pouvez choisir d'utiliser :

- Un environnement de développement intégré (comme Eclipse, Netbeans ou Intellij) qui permet de compiler, de générer un projet, de débugger et d'exécuter
- N'importe quel éditeur de texte avec coloration syntaxique, et effectuer la compilation et l'exécution en ligne de commande (javac, java)

En cas de problème avec Linux, télécharger le fichier [jfxrt.jar](https://valentin.lachand.net/teaching/2022/conception-projet-agile-2022/jfxrt.jar). Et rajouter le dans votre CLASSPATH

## Travail demandé

L'archive [TP1.zip](https://valentin.lachand.net/teaching/2022/conception-projet-agile-2022/TP1.zip) contient les classes de base :

- App : la classe principale, qui gère la création de l'application
- Field : une classe gérant le terrain de jeu
- Joueur : une classe gérant un joueur et ses diverses méthodes (avancer, tourner, ...)
- Sprite : une classe gérant le rendu graphique et l'animation des joueurs, ou d'autres éléments graphiques

Décompressez l'archive dans un dossier sur votre compte. Explorez le code source. Compilez et lancez le programme principal balleauprisonnier.

Testez, utilisez les touches WASD ou les flèches directionnelles pour déplacer et faire pivoter les joueurs.

Consultez la documentation de Java 8 et de Javafx (la bibliothèque graphique utilisée).

    Il est possible qu'Eclipse signale une erreur ou un warning de restriction d'accès lors de l'utilisation de javafx. Ce problème peut être résolu en modifiant les propriétés du projet pour autoriser javafx. Vous remarquerez au passage que la solution la plus simple n'est pas la première sur stackoverflow : lisez les solutions alternatives avant de partir pour l'une ou l'autre.

    Javafx est normalement intégré au Java Development Kit (JDK), depuis la version 8. Cependant sous Linux, il est possible qu'il faille ajouter javafx "à la main"

Quelques liens si l'ajout de javaFX ne fonctionne pas :
- [Téléchargement de JavaFX](https://gluonhq.com/products/javafx/)
- [Ajout sur intelliJ](https://stackoverflow.com/questions/51478675/error-javafx-runtime-components-are-missing-and-are-required-to-run-this-appli)
- [Ajout à la main](https://stackoverflow.com/questions/18547362/javafx-and-openjdk)
-
## Amélioration du programme

Modifiez la classe Player ou Field pour :

- Que les touches de contrôle correspondent à un clavier AZERTY plutôt que QWERTY, i.e. ZQSD au lieu de WASD.
- Que la vitesse (la taille du pas) du Joueur soit variable (que cela deviennent une propriété du joueur spécifié à sa création/assigné aléatoirement).
- Que chaque joueur utilise une touche différente pour tirer (au lieu d'ESPACE pour les deux joueurs).

Voir la [gestion des évènements clavier avec Javafx](http://docs.oracle.com/javafx/2/events/jfxpub-events.htm) au besoin, et leur application dans un jeu [ici (section Handling User Input)](http://gamedevelopment.tutsplus.com/tutorials/introduction-to-javafx-for-game-development--cms-23835),

Testez.

Ajouter quelques méthodes à Player et Field :

- Créer deux listes de joueurs correspondants à deux équipes (au lieu d'une liste).
- Utiliser l'héritage pour faire une distinction entre joueurs contrôlés par un humain et par l'ordinateur.
- Pour l'instant les joueurs controlés par l'ordinateur restent statiques.
- Faire en sorte qu'une partie oppose 3 joueurs (1 humain, 2 ordinateurs) de chaque côté.

Testez.

## Tirs

Nous allons maintenant faire en sorte qu'un tir déclenche un lancer de projectile qui traverse le terrain, et atterisse dans le camp adverse, sur un adversaire ou non.

- Créer une classe projectile, créée lors d'un tir, avec une vitesse et une direction.
- Associer une représentation graphique à cette classe (ajouter une image nommée ball.png dans le dossier assets).
- S'assurer que le projectile se déplace bien lors de la boucle principale du jeu.

Réfléchissez maintenant aux dépendances entre vos classes, et à la visibilité (public, private, final, protected) de vos variables et méthodes de classe.

## Collisions

Dans un premier temps, c'est le terrain (Field) qui connait à la fois les joueurs et le(s) projectile(s). Faire en sorte que :

- Le projectile s'arrête dans le camp opposé, soit en tombant au sol, soit en touchant un joueur.
- Le projectile teste s'il rencontre un joueur adverse. Pour cela
  1. Créer une méthode testant si deux rectangles se chevauchent ;
  2. Rajouter une méthode permettant de facilement récupérer les coordonnées de la bounding box (du rectangle englobant) des projectiles et des joueurs ;
  3. À chaque déplacement du projectile tester s'il rencontre un joueur adverse.
- Le joueur adverse disparaisse du jeu s'il est touché. Pour cela rajouter un attribut à la classe Player.

Testez avec les joueurs contrôlés par les utilisateurs.

## Un peu d'intelligence

Rajouter un peu de stratégie en permettant aux joueurs contrôlés par l'ordinateur de :

- Se déplacer d'abord de manière aléatoire ;
- Se déplacer dans la direction opposée au tir ;
- De tirer vers l'endroit avec le plus de joueurs.

# Prendre de l'avance

<span style="color:red"><b>Il est fortement recommandé de réaliser cette partie pendant la semaine et le week-end qui vient, si vous n'avez pas eu le temps de la faire pendant le TP.</b></span>

Le code actuel mélange données, logique et interface. Commencez à restructurer le projet pour séparer la logique générale de l'application, de l'affichage du jeu, des données, et de la logique de jeu (les stratégies de tir et de déplacement).

Pensez à comment le programme pourrait être généralisé, pour facilement transformer les joueurs en autre chose, changer le mode d'affichage (par exemple bouger les personnages comme sur un platformer, avec une vue de profil), ajouter de nouvelles stratégies de tir.
