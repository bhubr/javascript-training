# Entraînement JavaScript

:warning: **Fork** ce repo avant de commencer, puis clone ton fork pour récupérer les exercices sur ton ordinateur.

Ce repo contient des exercices, organisés par thèmes.

Pour l'instant, il contient deux répertoires : `math` et `strings`. **D'autres seront ajoutés petit à petit.**

Les instructions des exercices sont ci-dessous, et dupliquées dans les fichiers des exercices.

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

```javascript
// math/abs.js
const assert = require('assert');

/*--------------*
 * INSTRUCTIONS |
 *--------------*
La valeur absolue d'un nombre, c'est sa valeur sans le signe :

* la valeur absolue de -10 est 10,
* celle de 10 est 10.

Ecris une fonction `abs` qui accepte en paramètre un nombre, et renvoie sa valeur absolue.
*/

// ECRIS TON CODE ICI

// TESTS : NE RIEN CHANGER SOUS CETTE LIGNE !
assert.strictEqual(abs(-20), 20);
assert.strictEqual(abs(50), 50);
console.log('✅ Test passé !');
```

### 2. Calculer la valeur maximale entre deux nombres 

Exercice `math/max.js`.

Ecrire une fonction `max` qui accepte comme paramètres deux nombres, et renvoie le plus grand des deux.


```javascript
// math/max.js
const assert = require('assert');

/*--------------*
 * INSTRUCTIONS |
 *--------------*
Ecrire une fonction `max` qui accepte comme paramètres deux nombres, et renvoie le plus grand des deux.
*/

// ECRIS TON CODE ICI

// TESTS : NE RIEN CHANGER SOUS CETTE LIGNE !
assert.strictEqual(max(10, 20), 20);
assert.strictEqual(max(50, 30), 50);
console.log('✅ Test passé !');
```

### 3. Calculer la valeur minimale entre deux nombres 

Exercice `math/min.js`.

Même chose que l'exercice `max`, mais "inversé" : écrire une fonction `min` qui accepte comme paramètres deux nombres, et renvoie le plus petit des deux.


```javascript
// math/min.js
const assert = require('assert');

/*--------------*
 * INSTRUCTIONS |
 *--------------*
Ecrire une fonction `min` qui accepte comme paramètres deux nombres, et renvoie le plus petit des deux.
*/

// ECRIS TON CODE ICI

// TESTS : NE RIEN CHANGER SOUS CETTE LIGNE !
assert.strictEqual(min(10, 20), 10);
assert.strictEqual(min(50, 30), 30);
console.log('✅ Test passé !');
```

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


```javascript
// math/isEven.js
const assert = require('assert');

/*--------------*
 * INSTRUCTIONS |
 *--------------*
Ecrire une fonction `isEven` qui prend en paramètre un nombre, et renvoie `true` s'il est pair, `false` sinon.
*/

// ECRIS TON CODE ICI

// TESTS : NE RIEN CHANGER SOUS CETTE LIGNE !
assert.strictEqual(isEven(10), true);
assert.strictEqual(isEven(11), false);
console.log('✅ Test passé !');
```

### 5. Déterminer si un nombre est impair

Exercice `math/isOdd.js`.

C'est l'exercice inverse du précédent :  écrire une fonction `isOdd` qui prend en paramètre un nombre, et renvoie `true` s'il est impair, `false` sinon.

```javascript
// math/isOdd.js
const assert = require('assert');

/*--------------*
 * INSTRUCTIONS |
 *--------------*
Ecrire une fonction `isOdd` qui prend en paramètre un nombre, et renvoie `true` s'il est impair, `false` sinon.
*/

// ECRIS TON CODE ICI

// TESTS : NE RIEN CHANGER SOUS CETTE LIGNE !
assert.strictEqual(isOdd(10), false);
assert.strictEqual(isOdd(11), true);
console.log('✅ Test passé !');
```

### 6. Déterminer si un nombre est divisible par un autre

Exercice `math/isDivisibleBy.js`.

Toujours en utilisant le `%` :  écrire une fonction `isDivisibleBy` qui prend comme paramètres deux nombres `num1` et `num2`, et renvoie `true` si `num1` est divisible par `num2`, `false` sinon.

```javascript
// math/isDivisibleBy.js
const assert = require('assert');

/*--------------*
 * INSTRUCTIONS |
 *--------------*
Ecrire une fonction `isDivisibleBy` qui prend comme paramètres deux nombres `num1` et `num2`, et renvoie `true` si `num1` est divisible par `num2`, `false` sinon.
*/

// ECRIS TON CODE ICI

// TESTS : NE RIEN CHANGER SOUS CETTE LIGNE !
assert.strictEqual(isDivisibleBy(10, 5), true);
assert.strictEqual(isDivisibleBy(4, 2), true);
assert.strictEqual(isDivisibleBy(12, 6), true);
assert.strictEqual(isDivisibleBy(12, 7), false);
console.log('✅ Test passé !');
```

## Manipulation de chaînes de caractères

### 1. Inverser une chaîne

Ecrire une fonction `reverseString` qui accepte comme paramètre une chaîne de caractères, et renvoie cette chaîne inversée.

Ainsi, si on passe paramètre `hello`, elle renverra `olleh`.

Tu vas devoir utiliser une boucle. Pense bien à prévoir une variable, initialisée avant la boucle, qui servira à stocker le résultat final. Tu devras y ajouter des caractères dans la boucle.

```javascript
// strings/reverseString.js
const assert = require('assert');

/*--------------*
 * INSTRUCTIONS |
 *--------------*
 Ecrire une fonction `reverseString` qui accepte comme paramètre une chaîne de caractères, et renvoie cette chaîne inversée.

Ainsi, si on passe paramètre `hello`, elle renverra `olleh`.
*/

// ECRIS TON CODE ICI

// TESTS : NE RIEN CHANGER SOUS CETTE LIGNE !
assert.strictEqual(reverseString('hello'), 'olleh');
assert.strictEqual(reverseString('JavaScript'), 'tpircSavaJ');
assert.strictEqual(reverseString('I love code'), 'edoc evol I');
console.log('✅ reverseString : test passé !');
```

### 2. Remplacer un caractère dans une chaîne

Ecrire une fonction `replaceInString` qui accepte comme paramètres trois chaînes de caractères :

* La première, `message`, contient une chaîne d'un ou plusieurs caractères.
* La deuxième, `search`, contient **un** caractère à trouver dans la chaîne message.
* La troisième, `replace`, contient **un** caractère, qui va servir à remplacer `search` dans la chaîne.

La fonction renvoie `message` dans lequel toutes les "occurrences" de `search` ont été remplacées par `replace` (une occurrence, c'est une fois où on rencontre quelque chose).

Un exemple : si on passe les paramètres `'mass'`, `'s'` et `'l'`, la fonction renverra `'mall'`.

```javascript
// strings/replaceInString.js
const assert = require('assert');

/*--------------*
 * INSTRUCTIONS |
 *--------------*
Ecrire une fonction `replaceInString` qui accepte comme paramètres trois chaînes de caractères :

* La première, `message`, contient une chaîne d'un ou plusieurs caractères.
* La deuxième, `search`, contient **un** caractère à trouver dans la chaîne message.
* La troisième, `replace`, contient **un** caractère, qui va servir à remplacer `search` dans la chaîne.

La fonction renvoie `message` dans lequel toutes les "occurrences" de `search` ont été remplacées par `replace` (une occurrence, c'est une fois où on rencontre quelque chose).

Un exemple : si on passe les paramètres `'mass'`, `'s'` et `'l'`, la fonction renverra `'mall'`.
*/

// ECRIS TON CODE ICI

// TESTS : NE RIEN CHANGER SOUS CETTE LIGNE !
assert.strictEqual(replaceInString('mass', 's', 'l'), 'mall');
assert.strictEqual(replaceInString('1 + 2 + 3', '+', '*'), '1 * 2 * 3');
console.log('✅ replaceInString : test passé !');
```
