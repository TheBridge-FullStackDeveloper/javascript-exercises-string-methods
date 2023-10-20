describe("Pruebas para funciones de manipulación de cadenas de texto", function() {

  // Prueba para getCharAt
  it("Debería devolver 'b'", function() {
    expect(getCharAt("the-bridge")).toBe("b");
  });

  // Prueba para getSubstring
  it("Debería devolver 'the-bridge'", function() {
    expect(getSubstring("the-bridge-is-here")).toBe("the-bridge");
  });

  // Prueba para getSubstr
  it("Debería devolver 'the-bridge'", function() {
    expect(getSubstr("the-bridge-is-here")).toBe("bridge");
  });

  // Prueba para getUpperCase
  it("Debería devolver 'THE-BRIDGE'", function() {
    expect(getUpperCase("the-bridge")).toBe("THE-BRIDGE");
  });

  // Prueba para getLowerCase
  it("Debería devolver 'the-bridge'", function() {
    expect(getLowerCase("THE-BRIDGE")).toBe("the-bridge");
  });

  // Prueba para getTrim
  it("Debería devolver 'the-bridge'", function() {
    expect(getTrim("  the-bridge   ")).toBe("the-bridge");
  });

  // Prueba para getSplit
  it("Debería devolver un array con las palabras", function() {
    expect(getSplit("The Bridge is great")).toEqual(["The", "Bridge", "is", "great"]);
  });

  // Prueba para getReplace
  it("Debería devolver la frase con las palabras reemplazadas", function() {
    expect(getReplace("The Bridge is great", "great", "amazing")).toBe("The Bridge is amazing");
  });

  // Prueba para getIndexOf
  it("Debería devolver la posición de 'The'", function() {
    expect(getIndexOf("The Bridge is great")).toBe(0);
  });

  // Prueba para getStartsWith
  it("Debería devolver true si empieza con 'the'", function() {
    expect(getStartsWith("the bridge is here")).toBe(true);
  });

  // Prueba para getEndsWith
  it("Debería devolver true si termina con 'here'", function() {
    expect(getEndsWith("the bridge is here")).toBe(true);
  });

  // Prueba para getIncludes
  it("Debería devolver true si contiene 'the'", function() {
    expect(getIncludes("the-bridge-is-here")).toBe(true);
  });

  // Prueba para getConcat
  it("Debería devolver 'the-bridgethe-bridge'", function() {
    expect(getConcat("the", "-bridge")).toBe("the-bridge");
  });
});
