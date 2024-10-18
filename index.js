// =============================================================================
// 1. Dada la siguiente string, usa .charAt() para devolver letra
//    'b' de cada uno de los elementos de la string en la palabra the-bridge.
// =============================================================================
function getCharAt(string) {
  const first =  string.charAt(4);
  return first
}

// =============================================================================
// 2. Dada la siguiente string, usa .substring() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getSubstring(string) {
  const short = string.substring(0, 10)
  return short
}

// =============================================================================
// 3. Dada la siguiente string, usa .substr() para devolver palabra
//    'bridge'.
// =============================================================================
function getSubstr(string) {
  const short = string.substr(4, 6)
  return short
}

// =============================================================================
// 4. Dada la siguiente string, usa .toUpperCase() para devolver
//    palabra 'THE-BRIDGE'.
// =============================================================================
function getUpperCase(string) {
  const UpperCase = string.toUpperCase();
  return UpperCase
}

// =============================================================================
// 5. Dada la siguiente string, usa .toLowerCase() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getLowerCase(string) {
  const LowerCase = string.toLowerCase();
  return LowerCase
}

// =============================================================================
// 6. Dada la siguiente string, usa .trim() para devolver palabra
//    'the-bridge'.
// =============================================================================
function getTrim(string) {
  const outSpace = string.trim();
  return outSpace
}

// =============================================================================
// 7. Dada la siguiente string, usa .split() para devolver un array
//    con las palabras que forman la frase.
// =============================================================================
function getSplit(string) {
  const Arr = string.split(' ');
  return Arr
}

// =============================================================================
// 8. Dada la siguiente string, usa .replace() para devolver un string
//    con las palabras que forman la frase.
// =============================================================================
function getReplace(string) {
  const replace = string.replaceAll('great', 'amazing');
  return replace
}

// =============================================================================
// 9. Dada la siguiente string, usa .indexOf() para devolver posición
//    de la palabra 'The'.
// =============================================================================
function getIndexOf(string) {
  const returnThe = string.indexOf("The"); 
  return returnThe
}

// =============================================================================
// 10. Dada la siguiente string, usa .startsWith() para devolver true
//     si la palabra 'the' está al principio de la frase.
// =============================================================================
function getStartsWith(string) {
  const isStartThe = string.startsWith("the");
  return isStartThe
}

// =============================================================================
// 11. Dada la siguiente string, usa .endsWith() para devolver true
//     si la palabra 'here' está al final de la frase.
// =============================================================================
function getEndsWith(string) {
  const isEndThe = string.endsWith("here");
  return isEndThe
}

// =============================================================================
// 12. Dada la siguiente string, usa .includes() para devolver true
//     si la frase contiene la palabra 'the'.
// =============================================================================
function getIncludes(string) {
  const isInclude = string.includes("the")
  return isInclude
}

// =============================================================================
// 13. Dada la siguiente string, usa .concat() para devolver string
//     con la palabra 'the' y la palabra 'bridge'.
// =============================================================================
function getConcat(string1, string2) {
  const cont = string1.concat(string2); 
  return cont
}

// =============================================================================
