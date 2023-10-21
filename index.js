// =============================================================================
// 1. Dada la siguiente string, usa .charAt() para devolver letra
//    'b' de cada uno de los elementos de la string en la palabra the-bridge.
// =============================================================================
function getCharAt(string) {
  // Aquí tu código

  let result = "";
  for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === 'b') {
          result += 'b';
      }
  }
  return result;
}

let palabra="the-bridge";

console.log(getCharAt(palabra));



// =============================================================================
// 2. Dada la siguiente string, usa .substring() para devolver
//    palabra 'the-bridge'.
// =============================================================================

let palabrita ="the-bridge-is-here"; 

function getSubstring(string) {
  return string.substring(0, 10);
}




// =============================================================================
// 3. Dada la siguiente string, usa .substr() para devolver palabra
//    'bridge'.
// =============================================================================
let palabra1 = "the-bridge-is-here"; 

function getSubstr(string) {
 

  return string.substr(4, 6);
}




// =============================================================================
// 4. Dada la siguiente string, usa .toUpperCase() para devolver
//    palabra 'THE-BRIDGE'.
// =============================================================================

let palabrita3= "the-bridge"; 

function getUpperCase(string) {
  // Aquí tu código

  return string.toUpperCase(palabrita3);

}

// =============================================================================
// 5. Dada la siguiente string, usa .toLowerCase() para devolver
//    palabra 'the-bridge'.
// =============================================================================
let palabrita4= "the-bridge"; 

function getLowerCase(string) {
  // Aquí tu código

  return string.toLowerCase(palabrita4);

}

// =============================================================================
// 6. Dada la siguiente string, usa .trim() para devolver palabra
//    'the-bridge'.
// =============================================================================

let palabrita5=("  the-bridge   ");
function getTrim(string) {
  // Aquí tu código
  return string.trim(palabrita5);

}


// =============================================================================
// 7. Dada la siguiente string, usa .split() para devolver un string
//    con las palabras que forman frase.
// =============================================================================
let palabrita6="The Bridge is great";

function getSplit(string) {
  // Aquí tu código
  return string.split(" ");

}
console.log(getSplit(palabrita6));


// =============================================================================
// 8. Dada la siguiente string, usa .replace() para devolver un string
//    con las palabras que forman frase.
// =============================================================================
function getReplace(string, target, replacement) {
  return string.replace(target, replacement);
}

console.log(getReplace("The Bridge is great", "great", "amazing")); 


// =============================================================================
// 9. Dada la siguiente string, usa .indexOf() para devolver posición
//    de la palabra 'the'.
// =============================================================================
let index="the Bridge is great";

function getIndexOf(string) {
  // Aquí tu código
  return string.indexOf("the");
}
console.log(getStartsWith(index));
// =============================================================================
// 10. Dada la siguiente string, usa .startsWith() para devolver true
//     si la palabra 'the' está al principio de la frase.
// =============================================================================



function getStartsWith(string) {
  // Aquí tu código

  return string.startsWith("the ");
}




// =============================================================================
// 11. Dada la siguiente string, usa .endsWith() para devolver true
//     si la palabra 'the' está al final de la frase.
// =============================================================================
function getEndsWith(string) {
  // Aquí tu código

  return string.endsWith("the");
}

// =============================================================================
// 12. Dada la siguiente string, usa .includes() para devolver true
//     si la frase contiene la palabra 'the'.
// =============================================================================
function getIncludes(string) {
  // Aquí tu código

  return string.includes('the');
}

// =============================================================================
// 13. Dada la siguiente string, usa .concat() para devolver string
//     con la palabra 'the' y la palabra 'bridge'.
// =============================================================================
function getConcat(string1, string2) {
  // Aquí tu código

  return string1.concat(string2);

}

// =============================================================================
