---
layout: default
title: Conception agile de projets informatiques et génie logiciel TD1 Cas d'utilisation
permalink: /teaching/2022/conception-projet-agile-2022-td-1
---
# Conception agile de projets informatiques et génie logiciel : TD1 - Cas d'utilisation

On s’intéresse ici aux cas d’utilisation textuels de l’approche d’A. Cockburn.

## Exercice 1
Un collègue vous envoie le cas d’utilisation suivant. A l’aide des conseils de rédaction vus en cours, renvoyez-lui un avis critique et des corrections :

<b>Cas d’utilisation 25 : ouvrir une session </b>
<i>Ce cas d’utilisation décrit le processus par lequel les utilisateurs se connectent au système de traitement des commandes.
Il vise aussi à établir les autorisations d’accès aux différentes  catégories d’utilisateurs (clients, employés, ...).
</i>

<b>Scénario :</b>
1. Le cas d’utilisation débute lorsque l’utilisateur démarre l’application
2. Le système affiche l’écran d’ouverture de session
3. L’utilisateur saisit un nom d’utilisateur et un mot de passe
4. Le système vérifie les informations
5. Le système définit les autorisations d’accès
6. Le système affiche l’écran principal
7. L’utilisateur sélectionne une fonction
8. Tant que l’utilisateur ne sélectionne pas la sortie, boucler :
9. Si l’utilisateur sélectionne Passer une commande, utiliser Passer une commande
10. Si l’utilisateur sélectionne Retourner le produit, utiliser Retourner le produit
11. Si l’utilisateur sélectionne Annuler la commande, utiliser Annuler la commande
12. Si l’utilisateur sélectionne Obtenir l’état de la commande, utiliser Obtenir l’état de la commande
13. Si l’utilisateur sélectionne Envoyer le catalogue, utiliser Envoyer le catalogue
14. Si l’utilisateur sélectionne Exécuter le rapport des ventes, utiliser Exécuter le rapport des ventes
    Fin Si
15. L’utilisateur sélectionne une fonction.
    Fin de boucle
16. Le cas d’utilisation prend fin

## Exercice 2
Vous venez de perdre vos clés dans le bus et avez l’idée de développer un service d’objet trouvé sur
Internet : <i>fffound</i>. Le service fournit des portes clés et des autocollants avec un identifiant et un
QRcode unique à ses utilisateurs. Les utilisateurs peuvent coller les autocollants sur leurs objets
(par exemple un téléphone) ou attacher leurs clés au porte-clés.
Ils doivent ensuite lier ces identifiants à leurs comptes, pour que des personnes qui trouveraient les
objets perdus puissent rentrer en contact avec eux, en rentrant l’identifiant de l’objet.
À partir de cette description, nous pouvons produire des cas d’utilisation ayant des portées, des
visibilités et des niveaux d’objectifs différents. Ecrivez trois cas d’utilisation :
1. Un CU métier de niveau stratégique dont la portée est votre entreprise et l’acteur principal le
   client, en boîte noire.
2. Un CU de niveau utilisateur, dont l’acteur principal est la personne trouvant un trousseau
   perdu.
3. Un CU de niveau utilisateur, dont la portée est le service d’enregistrement d’objets.
