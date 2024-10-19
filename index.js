// =============================================================================
// 1. Dada la siguiente string, usa .charAt() para devolver letra
//    'b' de cada uno de los elementos de la string en la palabra the-bridge.
// =============================================================================
function getCharAt(string) {
  return string.charAt(4);
}

// =============================================================================
// 2. Dada la siguiente string, usa .substring() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getSubstring(string) {
  // substring() toma dos índices: el inicio (incluido) y el final (excluido).
  // Queremos extraer 'the-bridge', que empieza en el índice 0 y termina en el 10.
  return string.substring(0, 10);
}

// =============================================================================
// 3. Dada la siguiente string, usa .substr() para devolver palabra
//    'bridge'.
// =============================================================================

function getSubstr(string) {
  // substr() toma un índice de inicio y un número de caracteres a extraer.
  // 'bridge' comienza en el índice 4 y tiene 6 caracteres.
  return string.substr(4, 6);
}

// =============================================================================
// 4. Dada la siguiente string, usa .toUpperCase() para devolver
//    palabra 'THE-BRIDGE'.
// =============================================================================

function getUpperCase(string) {
  // toUpperCase() convierte todo el string a mayúsculas.
  return string.toUpperCase();
}

// =============================================================================
// 5. Dada la siguiente string, usa .toLowerCase() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getLowerCase(string) {
  // toLowerCase() convierte todo el string a minúsculas.
  return string.toLowerCase();
}

// =============================================================================
// 6. Dada la siguiente string, usa .trim() para devolver palabra
//    'the-bridge'.
// =============================================================================

function getTrim(string) {
  // trim() elimina los espacios en blanco al inicio y al final del string.
  return string.trim();
}

// =============================================================================
// 7. Dada la siguiente string, usa .split() para devolver un array
//    con las palabras que forman la frase.
// =============================================================================

function getSplit(string) {
  // split() divide el string en un array, usando un espacio como separador.
  return string.split(" ");
}

// =============================================================================
// 8. Dada la siguiente string, usa .replace() para devolver un string
//    con las palabras que forman la frase.
// =============================================================================

function getReplace(string1, string2, string3) {
  // replace() busca una palabra específica y la reemplaza por otra.
  // En este caso, reemplazamos 'bridge' por 'Bridge'.
  return string1.replace(string2, string3);
}

// =============================================================================
// 9. Dada la siguiente string, usa .indexOf() para devolver posición
//    de la palabra 'The'.
// =============================================================================

function getIndexOf(string) {
  // indexOf() devuelve la posición de la primera aparición de una palabra.
  // Buscamos 'The' en la frase.
  return string.indexOf("The");
}

// =============================================================================
// 10. Dada la siguiente string, usa .startsWith() para devolver true
//     si la palabra 'the' está al principio de la frase.
// =============================================================================

function getStartsWith(string) {
  // startsWith() devuelve true si la string empieza con el texto dado.
  return string.startsWith("the");
}

// =============================================================================
// 11. Dada la siguiente string, usa .endsWith() para devolver true
//     si la palabra 'here' está al final de la frase.
// =============================================================================

function getEndsWith(string) {
  // endsWith() devuelve true si la string termina con el texto dado.
  return string.endsWith("here");
}

// =============================================================================
// 12. Dada la siguiente string, usa .includes() para devolver true
//     si la frase contiene la palabra 'the'.
// =============================================================================

function getIncludes(string) {
  // includes() devuelve true si el string contiene la palabra o texto dado.
  return string.includes("the");
}

// =============================================================================
// 13. Dada la siguiente string, usa .concat() para devolver string
//     con la palabra 'the' y la palabra 'bridge'.
// =============================================================================

function getConcat(string1, string2) {
  // concat() une dos strings en uno solo.
  return string1.concat(string2);
}

// ==============================================================