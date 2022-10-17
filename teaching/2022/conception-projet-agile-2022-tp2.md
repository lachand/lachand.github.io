---
layout: default
title: Conception agile de projets informatiques et génie logiciel TP2 Maven - Git - Github
permalink: /teaching/2022/conception-projet-agile-2022-tp-2
---
# Conception agile de projets informatiques et génie logiciel : TP2 - Maven - Git- Github

## Objectif
Mettre en place et maitriser les outils de gestion de code utilisés tout au long de l’année.
- Outil de build avec Maven (mvn)
- Outil de versioning avec Git (git)
- Outil de gestion de projet avec Github

## Déroulement

Créer (si nécessaire) un compte sur github ainsi qu'un nouveau projet sur la github.

Si vous êtes sur windows, utilisez Git CMD/Git BASH pour avoir le Bash pour Git (tappez git dans votre barre de recherche).
Si Git CMD/Git BASH n'est pas installé, allez sur [https://gitforwindows.org](https://gitforwindows.org) et téléchargez puis installez les outils

Sur votre ordinateur, dans un terminal, ajoutez les informations de base à votre compte git :

    git config --global user.name "nom d'utilisateur"
    git config --global user.email "votre_email"

Toujours dans un terminal, déplacez-vous dans le dossier ou vous souhaitez créer le projet, et clonez votre dépôt git. L’URL de votre dépôt est accessible dans Github depuis la page du projet :

    git clone https://github.com/NomdUtilisateur/NomDeVotreRepo.git

Se placer dans le répertoire du projet et récupérer des modifications depuis le projet agile-genie-logiciel:

    git pull https://github.com/lachand/agile-genie-logiciel.git

En cas d'erreur, utilisez la commande suivante :

    git pull https://github.com/lachand/agile-genie-logiciel.git --allow-unrelated-histories

Ce projet est constitué d’un projet maven (nommé balleauprisonnier_mvn dans le fichier pom.xml).

Reverser dans votre projet github:

    git push -u origin main

Attention, sur les anciens projets, on utilisait la commande suivante (Github à décidé de changer le nom de la branche principale par défaut) :

    git push -u origin master

Si vous avez une erreur de connection (403 ou indication vous demandant un token) suivez le tutoriel suivant : [https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)


Dans le navigateur, naviguer dans le dépôt: vous pouvez voir les révisions déjà présentes et même regarder le code source en ligne, ainsi que les différences entre les révisions.
## .gitignore

Créer un fichier .gitignore à la base du répertoire de travail balleauprisonnier et y ajouter les lignes suivantes :

    # Ignore les fichiers de configuration d'Eclipse
    .classpath
    .project
    .settings/

    # Ignore les fichiers de configuration d'Intellij
    .idea/
    *.iml
    *.iws

    # Ignore le dossier Mac .DS_Store
    .DS_Store

    # Ignore les fichiers produits par Maven pour ne versionner que le code,
    # pas les executables ou les logs.
    log/
    target/

Ce fichier contient la liste des fichiers à ignorer par git.

    git status

N’affiche à présent plus les fichiers dans target, mais affiche le fichier .gitignore. Ajouter ce fichier dans les fichiers versionnés:

    git add .gitignore

Puis valider ajoutant un message de commit:

    git commit -a -m "votre message"

Note : la commande -a ajoute tout les fichiers (hors ceux spécifiés par le gitignore) au commit

Puis faire le push

    git push

Dans le projet github, aller voir le dépôt et cliquer sur le dernier commit

## Invoquer

Sur eclipse : il faut faire clique droit sur pom.xml, run as -> maven configuration, en créer une nouvelle et ajouter (dans le goals)

    javafx:run

Sur IntelliJ : ouvrir le projet => edit configuration => add new => Maven. Dans `Command Line`, ajouter javafx:run

Nous ne pouvons actuellement pas exécuter notre code en l'état. Nous devons ajouter une configuration de build avec le plugin javafx-maven-plugin

Ajoutez à votre fichier pom.xml les lignes suivantes

    <build>
      <plugins>
        <plugin>
          <groupId>org.openjfx</groupId>
          <artifactId>javafx-maven-plugin</artifactId>
          <version>0.0.8</version>
          <configuration>
            <mainClass>L'emplacement de votre classe</mainClass>
          </configuration>
        </plugin>
      </plugins>
    </build>

Remplacez la main class par

    fr.icom.info.m1.balleauprisonnier_mvn.App

Si vous avez bien configuré le plugin, vous pouvez maintenant éxecuter le projet

SurWindows, vous pouvez avoir à ce moment une erreur sur intellij. Vous devez installer une version plus récente du jdk. Les instructions sont disponibles ici : [https://www.codejava.net/java-se/install-openjdk-18-on-windows](https://www.codejava.net/java-se/install-openjdk-18-on-windows)

Si ça ne fonctionne pas : vous devez installer maven. Sur windows [https://maven.apache.org/](https://maven.apache.org/)

sur linux

    ## Debian based
      sudo apt-install mvn
    ## Fedora based
      sudo dnf install mvn

    mvn compile

git commit -m "un message explicatif ici"
git push -u origin main

Constater que les modifications sont visibles depuis site de votre projet github.

## Gérer les conflits

Nous n’allons pas mettre en pratique la gestion de conflits dans ce TP, mais c’est quelque chose qui arrive fréquement. La documentation de Git traite du sujet), et Github a un guide expliquant plutôt bien les choses.

Pour lancer la fusion des deux branches avec on utilise la commande merge :

    git merge

Les conflits interviennent souvent lors du pull d’une branche dans la branche courante. Cette commande importe les modifications de la branche crée lors du pull dans la branche courante.

git status signale les fichiers en conflits. Editer ces fichiers pour intégrer de manière cohérente les modifications effectuées dans le deux branches. Une fois les modifications effectuées, si la construction mvn install fonctionne, indiquer ques les conflits sont résolus via

    git resolve -m le_fichier_concerne

## Intégration des modifications du TP précédent
Vous pouvez maintenant éditer votre code pour prendre en compte les modifications apportées au TP précédent, et vous avez la fin de la séance pour finir les modifications demandées lors du TP 1.
