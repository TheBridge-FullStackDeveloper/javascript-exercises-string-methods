// =============================================================================
// 1. Dada la siguiente string, usa .charAt() para devolver letra
//    'b' de cada uno de los elementos de la string en la palabra the-bridge.
// =============================================================================
function getCharAt(string) {
  const getCharAt = string.charAt(4);
  return getCharAt;
}

// =============================================================================
// 2. Dada la siguiente string, usa .substring() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getSubstring(string) {
  const getSubstring = string.substring(0, 10);
  return getSubstring;
}

// =============================================================================
// 3. Dada la siguiente string, usa .substr() para devolver palabra
//    'bridge'.
// =============================================================================
function getSubstr(string) {
  const getSubstr = string.substr(4, 6);
  return getSubstr;
}

// =============================================================================
// 4. Dada la siguiente string, usa .toUpperCase() para devolver
//    palabra 'THE-BRIDGE'.
// =============================================================================
function getUpperCase(string) {
  const getUpperCase = string.toUpperCase();
  return getUpperCase;
}

// =============================================================================
// 5. Dada la siguiente string, usa .toLowerCase() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getLowerCase(string) {
  const getLowerCase = string.toLowerCase();
  return getLowerCase;
}

// =============================================================================
// 6. Dada la siguiente string, usa .trim() para devolver palabra
//    'the-bridge'.
// =============================================================================
function getTrim(string) {
  const getTrim = string.trim();
  return getTrim;
}

// =============================================================================
// 7. Dada la siguiente string, usa .split() para devolver un array
//    con las palabras que forman la frase.
// =============================================================================
function getSplit(string) {
  const getSplit = string.split(" ");
  return getSplit;
}

// =============================================================================
// 8. Dada la siguiente string, usa .replace() para devolver un string
//    con las palabras que forman la frase.
// =============================================================================
function getReplace(string) {
  const getReplace = string.replace("great", "amazing");
  return getReplace;
}

// =============================================================================
// 9. Dada la siguiente string, usa .indexOf() para devolver posición
//    de la palabra 'The'.
// =============================================================================
function getIndexOf(string) {
  const getIndexOf = string.indexOf('The');
  return getIndexOf;
}

// =============================================================================
// 10. Dada la siguiente string, usa .startsWith() para devolver true
//     si la palabra 'the' está al principio de la frase.
// =============================================================================
function getStartsWith(string) {
  const getStartsWith = string.startsWith('the');
  return getStartsWith;
}

// =============================================================================
// 11. Dada la siguiente string, usa .endsWith() para devolver true
//     si la palabra 'here' está al final de la frase.
// =============================================================================
function getEndsWith(string) {
  const getEndsWith = string.endsWith('here');
  return getEndsWith;
}

// =============================================================================
// 12. Dada la siguiente string, usa .includes() para devolver true
//     si la frase contiene la palabra 'the'.
// =============================================================================
function getIncludes(string) {
  const getIncludes = string.includes('the');
  return getIncludes;
}

// =============================================================================
// 13. Dada la siguiente string, usa .concat() para devolver string
//     con la palabra 'the' y la palabra 'bridge'.
// =============================================================================
function getConcat(string1, string2) {
  const getConcat = string1.concat(string2);
  return getConcat;
}

// =============================================================================
