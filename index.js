// VARIABLES
// Crea una variable llamada "name" que contenga un string

var name = "Jorge";

// Crea una variable llamada "age" que contenga un integer

var age = 25;

// Crea una variable llamada "hasHobbies" que contenga un booleano

var hasHobbies = true;

// Crea una variable llamada "empty" que sea undefined

var empty = undefined;

// Crea una variable llamada "undefinedVariable" que sea undefined sin usar la palabra undefined

var undefinedVariable;

// Crea una variable llamada "nullVariable" que sea null

var nullVariable = null;

// FUNCIONES
// Crea una función llamada "sayHello" que retorne "Hello"

function sayHello() {
  return "Hello";
}

// Crea una función llamada "add" que reciba dos números como argumentos y retorne la suma de ambos

function add(a, b) {
  return a + b;
}

// Crea una función llamada "sayHelloTo" que reciba un nombre como argumento y retorne "Hello, {name}"

function sayHelloTo(name) {
  return "Hello, " + name;
}

// Crea una condición que retorne "true" si "firstParam" es mayor a "secondParam" y "false" si no lo es

function isGreater(firstParam, secondParam) {
  if (firstParam > secondParam) {
    return true;
  } else {
    return false;
  }
}

// Crea una condición que retorne "true" si "firstParam" es igual a "secondParam" y "false" si no lo es

function isEqual(firstParam, secondParam) {
  if (firstParam === secondParam) {
    return true;
  } else {
    return false;
  }
}

// Crea una condición que retorne "true" si "firstParam" es diferente a "secondParam" y "false" si no lo es

function isDifferent(firstParam, secondParam) {
  if (firstParam !== secondParam) {
    return true;
  } else {
    return false;
  }
}

// Crear una función llamada "isEven" que reciba un número como argumento y retorne "true" si es par o "false" si es impar

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Crear una función llamada "isOdd" que reciba un número como argumento y retorne "true" si es impar o "false" si es par

function isOdd(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// Crear una función llamada "isPositive" que reciba un número como argumento y retorne "true" si es positivo o "false" si es negativo

function isPositive(number) {
  if (number >= 0) {
    return true;
  } else {
    return false;
  }
}

// Crea una condición que retorne "true" si "firstParam" es mayor a "secondParam" o "thirdParam" es mayor a "fourthParam" y "false" si no lo es

function isGreaterOr(firstParam, secondParam, thirdParam, fourthParam) {
  if (firstParam > secondParam || thirdParam > fourthParam) {
    return true;
  } else {
    return false;
  }
}

// Crea una condición que retorne "true" si "firstParam" es mayor a "secondParam" y "thirdParam" es mayor a "fourthParam" y "false" si no lo es

function isGreaterAnd(firstParam, secondParam, thirdParam, fourthParam) {
  if (firstParam > secondParam && thirdParam > fourthParam) {
    return true;
  } else {
    return false;
  }
}

// Crea una función llamada "getRoleByName" que reciba un nombre como argumento
// el nombre puede ser Giorgio, Ivan o Marcos y debe retornar el rol de la persona
// Giorgio -> LI
// Ivan -> LI
// Marcos -> TA
// Si no es ninguna de esas personas debe retornar "Not found"

function getAgeByName(name) {
  switch (name) {
    case "Giorgio":
      return 'LI';
    case "Ivan":
      return 'LI';
    case "Marcos":
      return 'TA';
    default:
      return 'Not found';
  }
}