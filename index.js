// =============================================================================
// 1. Dada la siguiente string, usa .charAt() para devolver letra
//    'b' de cada uno de los elementos de la string en la palabra the-bridge.
// =============================================================================
function getCharAt(string) {
  const character = string.charAt(4);
  return character;
}

// =============================================================================
// 2. Dada la siguiente string, usa .substring() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getSubstring(string) {
  const substring = string.substring(0, 10);
  return substring;
}

// =============================================================================
// 3. Dada la siguiente string, usa .substr() para devolver palabra
//    'bridge'.
// =============================================================================
function getSubstr(string) {
  const substring = string.substr(4, 6);
  return substring;
}

// =============================================================================
// 4. Dada la siguiente string, usa .toUpperCase() para devolver
//    palabra 'THE-BRIDGE'.
// =============================================================================
function getUpperCase(string) {
  const uppercaseString = string.toUpperCase();
  return uppercaseString;
}

// =============================================================================
// 5. Dada la siguiente string, usa .toLowerCase() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getLowerCase(string) {
  const lowercaseString = string.toLowerCase();
  return lowercaseString;
}

// =============================================================================
// 6. Dada la siguiente string, usa .trim() para devolver palabra
//    'the-bridge'.
// =============================================================================
function getTrim(string) {
const trimmedString = string.trim();
return trimmedString;
}

// =============================================================================
// 7. Dada la siguiente string, usa .split() para devolver un string
//    con las palabras que forman frase.
// =============================================================================
function getSplit(string) {
  const thebrigeArray = string.split(' ');
  return thebrigeArray;
}

// =============================================================================
// 8. Dada la siguiente string, usa .replace() para devolver un string
//    con las palabras que forman frase.
// =============================================================================
function getReplace(string) {
  const newString = string.replace('great', 'amazing'); 
  return newString;
}

// =============================================================================
// 9. Dada la siguiente string, usa .indexOf() para devolver posición
//    de la palabra 'the'.
// =============================================================================
function getIndexOf(string) {
  const index = string.indexOf('The'); 
  return index;
}

// =============================================================================
// 10. Dada la siguiente string, usa .startsWith() para devolver true
//     si la palabra 'the' está al principio de la frase.
// =============================================================================
function getStartsWith(string) {
  const startsThe = string.startsWith('the');
  return startsThe;
}

// =============================================================================
// 11. Dada la siguiente string, usa .endsWith() para devolver true
//     si la palabra 'the' está al final de la frase.
// =============================================================================
function getEndsWith(string) {
  const endsWithWorld = string.endsWith('here');
  return endsWithWorld;
}

// =============================================================================
// 12. Dada la siguiente string, usa .includes() para devolver true
//     si la frase contiene la palabra 'the'.
// =============================================================================
function getIncludes(string) {
  const containsThe = string.includes('the'); 
  return containsThe;
}

// =============================================================================
// 13. Dada la siguiente string, usa .concat() para devolver string
//     con la palabra 'the' y la palabra 'bridge'.
// =============================================================================
function getConcat(string1, string2) {  
const newString = string1.concat(string2);
return newString;
}

// =============================================================================
