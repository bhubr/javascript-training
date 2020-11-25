# Entraînement JavaScript

:warning: **Fork** ce repo avant de commencer, puis clone ton fork pour récupérer les exercices sur ton ordinateur.

Ce repo contient des exercices, organisés par thèmes.

Pour l'instant, il contient deux répertoires : `math` et `strings`. **D'autres seront ajoutés petit à petit.**

Les instructions des exercices sont ci-dessous, et dupliquées dans les fichiers des exercices. **Lis les instructions dans ce "readme" avant chaque nouvel exercice**, car on peut y donner quelques indices.

Pour vérifier que tu as bien résolu un problème, il suffit d'exécuter le fichier correspondant avec Node. Par exemple pour le premier des exercices ci-dessous, en étant à la racine du repo :

```
node math/abs
```

## Fonctions mathématiques

### 1. Calculer la valeur absolue d'un nombre

Exercice `math/abs.js`.

La valeur absolue d'un nombre, c'est sa valeur sans le signe :

* la valeur absolue de -10 est 10,
* celle de 10 est 10.

Ecris une fonction `abs` qui accepte en paramètre un nombre, et renvoie sa valeur absolue.

### 2. Calculer la valeur maximale entre deux nombres

Exercice `math/max.js`.

Ecrire une fonction `max` qui accepte comme paramètres deux nombres, et renvoie le plus grand des deux.

### 3. Calculer la valeur minimale entre deux nombres

Exercice `math/min.js`.

Même chose que l'exercice `max`, mais "inversé" : écrire une fonction `min` qui accepte comme paramètres deux nombres, et renvoie le plus petit des deux.

### 4. Déterminer si un nombre est pair

Exercice `math/isEven.js`.

Un nombre est pair s'il est divisible par deux. En programmation, pour savoir si un nombre est pair, on peut utiliser l'opérateur mathématique modulo `%` qui permet d'obtenir le reste d'une division.

Exemple d'utilisation de l'opérateur `%` :

```javascript
console.log(10 % 4); // affiche 2
console.log(10 % 5); // affiche 0
```

Tu vas devoir utiliser `%` pour vérifier qu'un nombre est pair.

Enoncé :  écrire une fonction `isEven` qui prend en paramètre un nombre, et renvoie `true` s'il est pair, `false` sinon.

### 5. Déterminer si un nombre est impair

Exercice `math/isOdd.js`.

C'est l'exercice inverse du précédent :  écrire une fonction `isOdd` qui prend en paramètre un nombre, et renvoie `true` s'il est impair, `false` sinon.

### 6. Déterminer si un nombre est divisible par un autre

Exercice `math/isDivisibleBy.js`.

Toujours en utilisant le `%` :  écrire une fonction `isDivisibleBy` qui prend comme paramètres deux nombres `num1` et `num2`, et renvoie `true` si `num1` est divisible par `num2`, `false` sinon.

## Manipulation de chaînes de caractères

### 1. Inverser une chaîne

Exercice `strings/reverseString.js`.

Ecrire une fonction `reverseString` qui accepte comme paramètre une chaîne de caractères, et renvoie cette chaîne inversée.

Ainsi, si on passe paramètre `hello`, elle renverra `olleh`.

Tu vas devoir utiliser une boucle. Pense bien à prévoir une variable, initialisée avant la boucle, qui servira à stocker le résultat final. Tu devras y ajouter des caractères dans la boucle.

### 2. Remplacer un caractère dans une chaîne

Exercice `strings/replaceInString.js`.

Ecrire une fonction `replaceInString` qui accepte comme paramètres trois chaînes de caractères :

* La première, `message`, contient une chaîne d'un ou plusieurs caractères.
* La deuxième, `search`, contient **un** caractère à trouver dans la chaîne message.
* La troisième, `replace`, contient **un** caractère, qui va servir à remplacer `search` dans la chaîne.

La fonction renvoie `message` dans lequel toutes les "occurrences" de `search` ont été remplacées par `replace` (une occurrence, c'est une fois où on rencontre quelque chose).

Un exemple : si on passe les paramètres `'mass'`, `'s'` et `'l'`, la fonction renverra `'mall'`.

### 3. Renvoyer une sous-chaîne - version "simple"

Exercice `strings/substrSimple.js`.

Ecrire une fonction `substrSimple` qui accepte comme paramètres :

* une chaîne de caractère, dont elle devra renvoyer une sous-partie.
* un index de départ à partir duquel prendre des caractères dans la chaîne d'origine pour créer une nouvelle chaîne.

Par exemple :

* Si on appelle `substrSimple('JavaScript', 4)`, le résultat renvoyé par `substrSimple` sera `'Script'`.
* Si on appelle `substrSimple('Hello World', 6)`, le résultat renvoyé sera `'World'`.
* Si on appelle `substrSimple('Hello World', 20)`, le résultat renvoyé sera `''`.

Comme le montre le dernier exemple, si l'index donné comme 2ème paramètre est trop élevé (supérieur ou égal à la longueur de la chaîne), la fonction renverra une chaîne vide.

### 4. Renvoyer une sous-chaîne - version "avancée"

Exercice `strings/substr.js`.

Ecrire une fonction `substr` qui accepte comme paramètres :

* une chaîne de caractère, dont elle devra renvoyer une sous-partie.
* un index de départ à partir duquel prendre des caractères dans la chaîne d'origine pour créer une nouvelle chaîne.
* une longueur **optionnelle** : un nombre de caractères maximum à prendre dans la chaîne d'origine.

Par exemple :

* Le résultat renvoyé par `substr` sera le même que pour les exemples de `substrSimple`, si on ne l'appelle qu'avec deux paramètres.
* Si on appelle `substr('JavaScript is great', 4, 6)`, le résultat renvoyé par l'appel sera `'Script'`.
* Si on appelle `substr('Hello World', 6, 2)`, le résultat renvoyé par l'appel sera `'Wo'`.
* Si on appelle `substr('Hello World', 6, 10)`, le résultat renvoyé par l'appel sera `'World'`.

Comme le montre le dernier exemple : si le nombre de caractères demandé est plus important que le nombre de caractères restants après l'index de départ, cela revient au même que de ne pas donner de longueur comme 3ème paramètre.
