---
layout: default
title: CCI XML et Web 2019
permalink: /teaching/archives/2019/cci-xml-web-2019-tp3
---

# Rendez dynamique votre CV
A partir de ce que vous avez réalisé lors du TP précédent, améliorez votre site pour le rendre plus dynamique

## Creez un fichier javascript
Vous devez maintenant créer un fichier javascript script-cv.js et devez l'intégrer dans votre fichier HTML.
Rappel : pour inclure un fichier javascript dans notre page HTML, nous devons utiliser la commande suivante dans le **<head>...</head>** de notre document
``` html
<script type = "text/javascript" src = "filename.js" ></script>
```

## Ajoutez une barre de progression à votre site
Pour que l'utilisateur sache quelle est sa progression sur votre CV, vous allez rajouter un barre de progression en haut de votre site.

Regardez la documentation sur le site de material design lite [https://getmdl.io/components/index.html#sliders-section](https://getmdl.io/components/index.html#sliders-section) pour voir comment configurer le slider.

Votre barre de progression doit avoir l'id suivant : **progress_bar**

Afin que votre slider soit toujours visible, fixez l'élément [https://j-willette.developpez.com/tutoriels/css/position-fixed/](https://j-willette.developpez.com/tutoriels/css/position-fixed/). Vous pouvez ajouter le code suivant à votre fichier css :
```css
.mdl-slider__container {
    background-color: white !important; /* Met le fond de la barre en blanc */
    position: fixed !important; /* Permet de définir la position de la barre comme fixe */
    top: 0; /* Défini la postion de la barre en haut */
    z-index: 200; /* Une valeur élevée ici permet de s'assurer que l'élément est au dessus des autres */
    width: 100vw; /* Défini la largeur de l'élément comme étant 100% de la largeur de l'écran */
}
```

## Faites le lien entre scroll et barre de progression
Vous allez maintenant lier la barre de progression et le scroll de l'utilisateur. Afin de récupérer l'évènement quand l'utilisateur scroll sur la page et afin de calculer le pourcentage de page visité, aidez vous du lien suivant : [https://www.w3schools.com/jsref/event_onscroll.asp](https://www.w3schools.com/jsref/event_onscroll.asp)

Vous devez calculer la valeur en pourcentage du scroll.

En vous aidant de la documentation de material design lite, modifiez la valeur de la barre de progression en fonction du scroll de l'utilisateur. Votre code pour modifier la barre de progression devrait resembler au code suivant :

Votre code doit maintenant ressembler à ceci :
```javascript
window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

// Calculez le déplacement ici ...

document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
});
```
Voici les éléments dont vous avez besoins pour calculer les différents éléments :
```javascript
window.scrollY // Valeur du scroll en pixel
document.body.offsetHeight // Hauteur totale de la page en pixel
window.innerHeight // Hauteur de l'écran en pixel
```

Pour corriger les bugs en javascript, vous pouvez vous servir des outils de développement de votre navigateur (Ctrl + maj + i), vous pouvez ensuite aller dans l'onglet 'console'. Pour afficher des éléments dans cette console, notemment vos variables, vous pouvez ajouter le code suivant à votre fichier javascript :
``` javascript
console.log(maVariable); // Affiche le contenu de la variable maVariable dans la console du navigateur
```

## Faites le lien entre la barre de progression et le scroll
Vous allez maintenant permettre à l'utilisateur de descendre et monter dans votre page à l'aide de la barre de progression.

En ajoutant l'attribut oninput [https:/www.w3schools.com/jsref/event_oninput.asp](https://www.w3schools.com/jsref/event_oninput.asp) à votre barre de progression, faites appel à une fonction que vous définissez dans votre fichier javascript pour naviguer dans la page.
Pour ceci, vous aller récupérer la valeur en pourcentage de la barre de progression à l'aide du code suivant :
```javascript
let progress = document.getElementById('progress_bar').value; // valeur de la barre de progression
```
Votre code doit maintenant ressembler au code suivant :
```javascript
function myScroll() { // Définition de la fonction de scroll
    var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression

    // Calculez ici la valeur de déplacement à efectuer lors du scroll

    window.scroll(0, value) // Déplacement de la page de 0 px latéralement et 'value' px horizontalement
}
```

# Rendu :
Vous avez jusqu'à mercredi prochain à minuit pour mettre le lien de votre dépôt Git sur le formulaire suivant : [https://framaforms.org/cci-2019-tp-web-1548835512](https://framaforms.org/cci-2019-tp-web-1548835512)
