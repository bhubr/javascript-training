// strings/substr.js
const assert = require('assert');

/*--------------*
 * INSTRUCTIONS |
 *--------------*
Ecrire une fonction `substr` qui accepte comme paramètres :

* une chaîne de caractère, dont elle devra renvoyer une sous-partie.
* un index de départ à partir duquel prendre des caractères dans la chaîne d'origine pour créer une nouvelle chaîne.
* une longueur *optionnelle* : un nombre de caractères maximum à prendre dans la chaîne d'origine.

Cas particuliers :

* Si l'index donné comme 2ème paramètre est trop élevé,
   la fonction renverra une chaîne vide.
* Si le nombre de caractères demandé est plus important que
  le nombre de caractères restants après l'index de départ,
  on renverra tous les caractères restants (cela revient au même
  que de ne pas donner de longueur comme 3ème paramètre).

Par exemple :

* substr('JavaScript is great', 4, 6) renverra 'Script'.
* substr('Hello World', 6, 2) renverra 'Wo'.
* substr('Hello World', 6, 10) renverra 'World'.

*/

// ECRIS TON CODE ICI

// TESTS : NE RIEN CHANGER SOUS CETTE LIGNE !
assert.strictEqual(substr('JavaScript', 4), 'Script');
assert.strictEqual(substr('Hello World', 6), 'World');
assert.strictEqual(substr('Hello World', 20), '');
assert.strictEqual(substr('JavaScript is great', 4, 6), 'Script is great');
assert.strictEqual(substr('Hello World', 6, 2), 'Wo');
assert.strictEqual(substr('Hello World', 6, 10), 'World');
console.log('✅ substr : test passé !');
