// =============================================================================

// 1. Dada la siguiente string, usa .charAt() para devolver letra
//    'b' de cada uno de los elementos de la string en la palabra the-bridge.
// =============================================================================
function getCharAt(string) {
  const char = string.charAt(4); // Obtener la letra en la posición 4
  console.log(char); // Mostrar la letra en la consola
  return char; // Devolver la letra
}



// =============================================================================
// 2. Dada la siguiente string, usa .substring() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getSubstring(string) {
  const substring = string.substring(0, 10); // Obtener la substring
  console.log(substring); // Mostrar la substring en la consola
  return substring; // Devolver la substring
}



// =============================================================================
// 3. Dada la siguiente string, usa .substr() para devolver palabra
//    'bridge'.
// =============================================================================
function getSubstr(string) {
  const substr = string.substr(4, 6); // Obtener la substring comenzando en la posición 4
  console.log(substr); // Mostrar la substring en la consola
  return substr; // Devolver la substring
}



// =============================================================================
// 4. Dada la siguiente string, usa .toUpperCase() para devolver
//    palabra 'THE-BRIDGE'.
// =============================================================================
function getUpperCase(string) {
  const upperCase = string.toUpperCase(); // Convertir a mayúsculas
  console.log(upperCase); // Mostrar en la consola
  return upperCase; // Devolver la cadena en mayúsculas
}



// =============================================================================
// 5. Dada la siguiente string, usa .toLowerCase() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getLowerCase(string) {
  const lowerCase = string.toLowerCase(); // Convertir a minúsculas
  console.log(lowerCase); // Mostrar en la consola
  return lowerCase; // Devolver la cadena en minúsculas
}



// =============================================================================
// 6. Dada la siguiente string, usa .trim() para devolver palabra
//    'the-bridge'.
// =============================================================================
function getTrim(string) {
  const trimmed = string.trim(); // Quitar espacios en blanco
  console.log(trimmed); // Mostrar en la consola
  return trimmed; // Devolver la cadena sin espacios
}



// =============================================================================
// 7. Dada la siguiente string, usa .split() para devolver un array
//    con las palabras que forman la frase.
// =============================================================================
function getSplit(string) {
  const splitArray = string.split(' '); // Dividir la cadena en un array
  console.log(splitArray); // Mostrar el array en la consola
  return splitArray; // Devolver el array
}



// =============================================================================
// =============================================================================
// Nueva tarea: Dada la siguiente string, usa .replace() para cambiar 
// 'great' por 'amazing' en la frase 'The Bridge is great'.

// 8 jasmin 
// =============================================================================
function getReplace(string) {
  const replaced = string.replace('great', 'amazing'); // Reemplazar 'great' por 'amazing'
  console.log(replaced); // Mostrar el resultado en la consola
  return replaced; // Devolver la nueva cadena
}

const string = 'The Bridge is great'; // Definir la cadena original
getReplace(string); // Llamar a la función


// =============================================================================
// 9. Dada la siguiente string, usa .indexOf() para devolver posición
//    de la palabra 'The'.
// =============================================================================
function getIndexOf(string) {
  const index = string.indexOf('The'); // Obtener la posición de 'The'
  console.log(index); // Mostrar la posición en la consola
  return index; // Devolver la posición
}

getIndexOf(string);

// =============================================================================
// 10. Dada la siguiente string, usa .startsWith() para devolver true
//     si la palabra 'the' está al principio de la frase.
// =============================================================================
function getStartsWith(string) {
  const starts = string.startsWith('the'); // Verificar si empieza con 'the'
  console.log(starts); // Mostrar el resultado en la consola
  return starts; // Devolver el resultado
}

getStartsWith(string);

// =============================================================================
// 11. Dada la siguiente string, usa .endsWith() para devolver true
//     si la palabra 'here' está al final de la frase.
// =============================================================================
function getEndsWith(string) {
  const ends = string.endsWith('here'); // Verificar si termina con 'here'
  console.log(ends); // Mostrar el resultado en la consola
  return ends; // Devolver el resultado
}

getEndsWith(string);

// =============================================================================
// 12. Dada la siguiente string, usa .includes() para devolver true
//     si la frase contiene la palabra 'the'.
// =============================================================================
function getIncludes(string) {
  const includes = string.includes('the'); // Verificar si incluye 'the'
  console.log(includes); // Mostrar el resultado en la consola
  return includes; // Devolver el resultado
}

getIncludes(string);

// =============================================================================
// 13. Dada la siguiente string, usa .concat() para devolver string
//     con la palabra 'the' y la palabra 'bridge'.
// =============================================================================
function getConcat(string1, string2) {
  const concatenated = string1.concat(string2); // Concatenar las cadenas
  console.log(concatenated); // Mostrar el resultado en la consola
  return concatenated; // Devolver la cadena concatenada
}

getConcat('the', 'bridge');

// =============================================================================

