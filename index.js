// =============================================================================
// 1. Dada la siguiente string, usa .charAt() para devolver letra
//    'b' de cada uno de los elementos de la string en la palabra the-bridge.
// =============================================================================
function getCharAt(string) {
  const theBridge = string.charAt(4)
  return theBridge
}

// =============================================================================
// 2. Dada la siguiente string, usa .substring() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getSubstring(string) {
  const theBridge = string.substring(0,10)
  return theBridge
}

// =============================================================================
// 3. Dada la siguiente string, usa .substr() para devolver palabra
//    'bridge'.
// =============================================================================
function getSubstr(string) {
  const theBridge = string.substr(4,6)
  return theBridge
}

// =============================================================================
// 4. Dada la siguiente string, usa .toUpperCase() para devolver
//    palabra 'THE-BRIDGE'.
// =============================================================================
function getUpperCase(string) {
  const theBridge = string.toUpperCase();
  return theBridge
}

// =============================================================================
// 5. Dada la siguiente string, usa .toLowerCase() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getLowerCase(string) {
  const theBridge = string.toLowerCase();
  return theBridge
}

// =============================================================================
// 6. Dada la siguiente string, usa .trim() para devolver palabra
//    'the-bridge'.
// =============================================================================
function getTrim(string) {
  const theBridge = string.trim();
  return theBridge
}

// =============================================================================
// 7. Dada la siguiente string, usa .split() para devolver un string
//    con las palabras que forman frase.
// =============================================================================
function getSplit(string) {
  const theBridge = string.split(' ');
  return theBridge
}

// =============================================================================
// 8. Dada la siguiente string, usa .replace() para devolver un string
//    con las palabras que forman frase.
// =============================================================================
function getReplace(string) {
  const theBridge = string.replace('great', 'amazing');
  return theBridge
}

// =============================================================================
// 9. Dada la siguiente string, usa .indexOf() para devolver posición
//    de la palabra 'the'.
// =============================================================================
function getIndexOf(string) {
  const theBridge = string.indexOf('The');
  return theBridge
}

// =============================================================================
// 10. Dada la siguiente string, usa .startsWith() para devolver true
//     si la palabra 'the' está al principio de la frase.
// =============================================================================
function getStartsWith(string) {
  const theBridge = string.startsWith('the');
  return theBridge
}

// =============================================================================
// 11. Dada la siguiente string, usa .endsWith() para devolver true
//     si la palabra 'the' está al final de la frase.
// =============================================================================
function getEndsWith(string) {
  const theBridge = string.endsWith('here');
  return theBridge
}

// =============================================================================
// 12. Dada la siguiente string, usa .includes() para devolver true
//     si la frase contiene la palabra 'the'.
// =============================================================================
function getIncludes(string) {
  const theBridge = string.includes('the');
  return theBridge
}

// =============================================================================
// 13. Dada la siguiente string, usa .concat() para devolver string
//     con la palabra 'the' y la palabra 'bridge'.
// =============================================================================
function getConcat(string1, string2) {
  const theBridge = string1.concat(string2);
  return theBridge
}

// =============================================================================
