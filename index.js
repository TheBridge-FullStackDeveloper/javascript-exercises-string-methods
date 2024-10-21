// =============================================================================
// 1. Dada la siguiente string, usa .charAt() para devolver letra
//    'b' de cada uno de los elementos de la string en la palabra the-bridge.
// =============================================================================
function getCharAt(string) {
  // Aquí tu código
  return string.charAt(4)
}

// =============================================================================
// 2. Dada la siguiente string, usa .substring() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getSubstring(string) {
  // Aquí tu código
  return string.substring(0,10)
}

// =============================================================================
// 3. Dada la siguiente string, usa .substr() para devolver palabra
//    'bridge'.
// =============================================================================
function getSubstr(string) {
  // Aquí tu código string = the-bridge
  return string.substr(4,10)
}

// =============================================================================
// 4. Dada la siguiente string, usa .toUpperCase() para devolver
//    palabra 'THE-BRIDGE'.
// =============================================================================
function getUpperCase(string) {
  // Aquí tu código
  return string.toUpperCase()
}

// =============================================================================
// 5. Dada la siguiente string, usa .toLowerCase() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getLowerCase(string) {
  // Aquí tu código
  return string.toLowerCase()
}

// =============================================================================
// 6. Dada la siguiente string, usa .trim() para devolver palabra
//    'the-bridge'.
// =============================================================================
function getTrim(string) {
  // Aquí tu código
  return string.trim()
}

// =============================================================================
// 7. Dada la siguiente string, usa .split() para devolver un array
//    con las palabras que forman la frase.
// =============================================================================
function getSplit(string) {
  // Aquí tu código
  return string.split("-")
}

// =============================================================================
// 8. Dada la siguiente string, usa .replace() para devolver un string
//    con las palabra remplazadas, el primer parametro es la string y el segundo
//    es la palabra que hay que remplazar y el terzer parametro es la palabra que
//    hay que añadir
// =============================================================================
function getReplace(string, wordToReplace, wordToAdd) {
  // Aquí tu código return The Bridge is amazing
  const newString = string.replace("bridge", "remplazado");
  return newString
}

// =============================================================================
// 9. Dada la siguiente string, usa .indexOf() para devolver posición
//    de la palabra 'The'.
// =============================================================================
function getIndexOf(string) {
  // Aquí tu código
  return string.indexOf("The")
}

// =============================================================================
// 10. Dada la siguiente string, usa .startsWith() para devolver true
//     si la palabra 'the' está al principio de la frase.
// =============================================================================
function getStartsWith(string) {
  // Aquí tu código
  const start = string.startsWith("the")
  return start 
}

// =============================================================================
// 11. Dada la siguiente string, usa .endsWith() para devolver true
//     si la palabra 'here' está al final de la frase.
// =============================================================================
function getEndsWith(string) {
  // Aquí tu código
  const end = string.endsWith("here")
  return end 
}

// =============================================================================
// 12. Dada la siguiente string, usa .includes() para devolver true
//     si la frase contiene la palabra 'the'.
// =============================================================================
function getIncludes(string) {
  // Aquí tu código
  return string.includes("the")
}

// =============================================================================
// 13. Dada la siguiente string, usa .concat() para devolver string
//     con la palabra 'the' y la palabra 'bridge'.
// =============================================================================
function getConcat(string1, string2) {
  // Aquí tu código
  return string1.concat(string2)
}

// =============================================================================
