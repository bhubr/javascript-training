// strings/substrSimple.js
const assert = require('assert');

/*--------------*
 * INSTRUCTIONS |
 *--------------*
Ecrire une fonction `substrSimple` qui accepte comme paramètres :

* une chaîne de caractère, dont elle devra renvoyer une sous-partie.
* un index de départ à partir duquel prendre des caractères
  dans la chaîne d'origine pour créer une nouvelle chaîne.

Si l'index donné comme 2ème paramètre est trop élevé,
la fonction renverra une chaîne vide.

Par exemple :

* si on appelle substrSimple('JavaScript', 4), le résultat
  renvoyé par `substrSimple` sera 'Script'.
* Si on appelle substrSimple('Hello World', 20), le résultat
  renvoyé sera ''.

*/

// ECRIS TON CODE ICI

// TESTS : NE RIEN CHANGER SOUS CETTE LIGNE !
assert.strictEqual(substrSimple('JavaScript', 4), 'Script');
assert.strictEqual(substrSimple('Hello World', 6), 'World');
assert.strictEqual(substrSimple('Hello World', 20), '');
console.log('✅ substrSimple : test passé !');
