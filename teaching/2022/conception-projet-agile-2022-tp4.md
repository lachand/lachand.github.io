---
layout: default
title: Conception agile de projets informatiques et génie logiciel TP4 Tests
permalink: /teaching/2022/conception-projet-agile-2022-tp-4
---
# Conception agile de projets informatiques et génie logiciel : TP4 - Tests

## Objectif

## Création d’un projet de test

Pour vous faire la main, vous allez créer un nouveau projet où vous effectuerez quelques tests. Les fonctionnalités à tester seront des transformations simples de chaînes de caractères.
Créez un projet maven simple
`mvn archetype:generate -DarchetypeArtifactId=maven-archetype-quickstart`
Répondez à quelques questions, comme quel est le :
- groupId : fr.icom.info.m1
- artifactId : tp_test
ou tapez “Entrée” pour valider les choix proposés par défaut.
Le dossier src de votre projet devrait contenir deux sous-dossiers :
- main/java/ votre groupId /
- test/java/ votre groupId /

## Configuration du projet de test
Ce projet créé est simple, mais il faut quand même corriger quelques détails :
- changer la version de Junit dans le pom.xml : elle doit être 4.12 (et non 3.8.1),
  - supprimez les fichiers “App.java” et “AppTest.java” qui ne seront pas utilisés.
  Ensuite, ouvrez ce projet avec votre IDE préféré si ce n’est pas déjà fait.
  Créez la classe CharManipulator (dans fr.icom.info.m1.tp_test), qui implémentera l’interface suivante :

```
package fr.icom.info.m1.tp_test;

public interface ICharManipulator {
  public String invertOrder(String s);
  public String invertCase(String s);
  public String removePattern(String s, String pattern); }
```

Laissez le corps des méthodes vides (ou avec un “return null;”) pour l’instant, vous les implémenterez après avoir écrit les tests.

## Création du premier test
Vous allez maintenant créer votre première classe de test. Soit à la main, soit en vous laissant guider par votre IDE. Vous devez obtenir une classe CharManipulatorTest dans src/test/java (et non src/main/java !) qui :
- ne dérive d’aucune classe
- contient un import static org.junit.Assert.*; en haut de son fichier et bien sûr les import org.junit.Test;
- possède une unique méthode (qui ne fait rien), et à laquelle est attachée une annotation @Test
Attention, si votre classe dérive de TestCase, votre projet utilise JUnit 3 !
Vous devrez probablement rajouter JUnit4 au path de votre projet, soit en sélectionnant la bonne option lors de la création du test, soit en l’ajoutant à la main.

Pour vérifier que vous avez bien tout fait comme il faut, exécutez mvn test à la racine de votre projet. Il devrait afficher un gros “Build success” en vert, avec un seul “test run”.
Pour être vraiment sûrs que votre projet est bien configuré, faites échouer votre test. Rappel : un test Junit échoue lorsqu’une exception non catchée est lancée. Pour faire simple, vous pouvez utiliser la fonction fail(String message); de JUnit 4. Ensuite, ré-effectuez un  mvn test, qui cette fois doit échouer.

## Création de (vrais) tests
Votre classe de tests va comporter trois parties : une pour chaque fonctionnalité à tester. Par chance, les fonctionnalités que vous voulez tester correspondent aux fonctions de la classe.
Chacune des parties comportera plusieurs fonctions de test : une pour chaque cas de figure à tester. En règle générale, on crée une fonction pour l’ensemble des cas “standards”, puis une pour chaque cas particulier que l’on a repéré.
Si vous n’êtes pas familier avec JUnit 4
Pour vous aider, JUnit présente, en plus de l’annotation @Test, l’annotation @Before, dont le corps est exécuté avant chaque méthode de test. Elle vous permet, par exemple, d’instancier une variable de type CharManipulator, ce qui vous évite d’avoir à retaper la ligne d’instanciation dans chacun de vos tests.
Pour vous aider, JUnit présente également l’annotation @After, que je n’ai encore jamais utilisée à ce jour.
NB : faites bien la distinction entre l’annotation @Before, qui est exécutée une fois avant chaque test, et l’annotation @BeforeClass, qui est exécutée une fois avant l’ensemble des tests présents dans cette classe de tests.
Pour vous aider, voici à quoi peut ressembler une partie de vos tests sur l’inversion de chaîne :
```
  // order inversion tests
  @Test
  public void orderNormalStringTest() {
    assertEquals("A",manip.invertOrder("A"));
    assertEquals("DCBA",manip.invertOrder("ABCD"));
    assertEquals("321DCBA",manip.invertOrder("ABCD123"));
  }

  @Test
  public void orderEmptyStringTest()
  {
    assertEquals("", manip.invertOrder(""));
   }
   ```

Une fois vos tests codés, vérifiez qu’ils échouent bien, puis attaquez l’implémentation de la fonction invertOrder. Vous pourrez ainsi tester au fur et à mesure du développement et être emplis de joie en voyant le nombre d’échecs diminuer. (Pour de la joie supplémentaire, vous pouvez faire vos tests via votre IDE, vous aurez ainsi une jolie barre qui partira rouge et se colorera de vert à mesure de votre avancée).

Faites ensuite de même pour les deux autres fonctions. Pour préciser :
- La fonction invertCase est censée inverser la casse, c’est-à-dire inverser les majuscules et les minuscules.
  - exemple : “abCD” -> “ABcd”
- La fonction removePattern doit retourner la première chaîne de caractère à qui l’on a enlevé toutes les occurences du deuxième argument
  - exemple : removePattern(“bonjour mon bon”,”on”) -> “bjour m b”

Lorsque vous aurez au moins 3 fonctions de test pour chaque catégorie, vérifiez que vous n’avez oublié aucun cas particulier, re-vérifiez une dernière fois puis passez à la partie intéressante : l’implémentation des tests pour votre projet.

## Tests unitaires du projet
Vous avez probablement beaucoup modifié le projet de base lors du TP de refactoring, donc cette partie va être beaucoup ouverte. Quelques conseils pour vous lancer :
- Tester le modèle est assez simple, le contrôleur un peu plus dur mais faisable, la vue relativement difficile
- Faites vos tests avant l’implémentation : comme ça vous réfléchissez à tous les cas étranges pendant vos tests, qui sont au demeurant simples à coder, et vous pourrez vous concentrer sur les problèmes de code lors de l’implémentation
- Vous êtes en binôme, profitez-en ! Donnez les tests d’une partie à l’un des membres du binôme, et faites-la implémenter par l’autre ; cela peut paraître contre-productif, mais c’est ce qui vous permettra de couvrir tout de suite tous les cas particuliers
- Pensez à tester aussi les cas “normaux”, cela vous permettra de distinguer une fonction mal codée d’une fonction pas codée du tout ou inaccessible

Que doivent faire les tests à minima :
- Tester que les balles ne sortent pas du terrain par le haut ou par le bas.
- Tester que les balles ne traversent pas d’obstacle ou de joueur
