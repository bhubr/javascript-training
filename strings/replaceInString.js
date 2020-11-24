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