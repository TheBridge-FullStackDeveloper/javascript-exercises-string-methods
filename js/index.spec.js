describe('Variables', function () {
  it('name debe ser un string', function () {
    expect(typeof name).toBe('string');
  });

  it('age debe ser un integer', function () {
    expect(Number.isInteger(age)).toBe(true);
  });

  it('hasHobbies debe ser un booleano', function () {
    expect(typeof hasHobbies).toBe('boolean');
  });

  it('empty debe ser undefined', function () {
    expect(empty).toBeUndefined();
  });

  it('undefinedVariable debe ser undefined', function () {
    expect(undefinedVariable).toBeUndefined();
  });

  it('nullVariable debe ser null', function () {
    expect(nullVariable).toBeNull();
  });
});

describe('Funciones', function () {
  it('sayHello debe retornar "Hello"', function () {
    expect(sayHello()).toBe('Hello');
  });

  it('add debe sumar dos números correctamente', function () {
    expect(add(2, 3)).toBe(5);
  });

  it('sayHelloTo debe saludar al nombre proporcionado', function () {
    expect(sayHelloTo('Alice')).toBe('Hello, Alice');
  });

  it('isGreater debe retornar true si a es mayor que b', function () {
    expect(isGreater(5, 3)).toBe(true);
  });

  it('isEqual debe retornar true si a es igual a b', function () {
    expect(isEqual(5, 5)).toBe(true);
  });

  it('isDifferent debe retornar true si a es diferente a b', function () {
    expect(isDifferent(5, 3)).toBe(true);
  });

  it('isGreaterOr debe retornar true si a es mayor que b o c es mayor que d', function () {
    expect(isGreaterOr(5, 3, 7, 2)).toBe(true);
  });

  it('isGreaterAnd debe retornar true si a es mayor que b y c es mayor que d', function () {
    expect(isGreaterAnd(5, 3, 7, 2)).toBe(true);
  });

  it('isEven debe retornar true si el número es par', function () {
    expect(isEven(4)).toBe(true);
  });

  it('isEven debe retornar false si el número es impar', function () {
    expect(isEven(3)).toBe(false);
  });

  it('isOdd debe retornar true si el número es impar', function () {
    expect(isOdd(3)).toBe(true);
  });

  it('isOdd debe retornar false si el número es par', function () {
    expect(isOdd(4)).toBe(false);
  });

  it('isPositive debe retornar true si el número es positivo', function () {
    expect(isPositive(5)).toBe(true);
  });

  it('isPositive debe retornar false si el número es negativo', function () {
    expect(isPositive(-3)).toBe(false);
  });

  it('isPositive debe retornar true si el número es cero', function () {
    expect(isPositive(0)).toBe(true);
  });

  it('debería retornar "LI" para el nombre "Giorgio"', function () {
    expect(getAgeByName('Giorgio')).toBe('LI');
  });

  it('debería retornar "LI" para el nombre "Ivan"', function () {
    expect(getAgeByName('Ivan')).toBe('LI');
  });

  it('debería retornar "TA" para el nombre "Marcos"', function () {
    expect(getAgeByName('Marcos')).toBe('TA');
  });

  it('debería retornar "Not found" para un nombre no encontrado', function () {
    expect(getAgeByName('Alex')).toBe('Not found');
  });
});
