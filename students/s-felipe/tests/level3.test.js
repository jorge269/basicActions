const { calcularMediana, esPangrama, palabrasFrecuentes } = require('../src/level3');

describe('Nivel 3 – Algoritmos y Métricas', () => {

  // -----------------------------
  test('calcularMediana: debería calcular correctamente la mediana', () => {
    // Casos normales
    expect(calcularMediana([1, 2, 3, 4, 5])).toBe(3); // impar
    expect(calcularMediana([10, 20, 30, 40])).toBe(25); // par
    expect(calcularMediana([7])).toBe(7);
    expect(calcularMediana([5, 2, 9, 1, 3])).toBe(3); // desordenado
    // Validaciones
    expect(() => calcularMediana([])).toThrow('Input must be a non-empty array');
    expect(() => calcularMediana('no array')).toThrow('Input must be a non-empty array');
    expect(() => calcularMediana([1, 'a', 3])).toThrow('All elements must be numbers');
  });

  // -----------------------------
  test('esPangrama: debería detectar correctamente los pangramas en español', () => {
    const frasePangrama = 'Benjamín pidió una bebida de kiwi y fresa; Noé, sin vergüenza, la más exquisita champaña.';
    const fraseNoPangrama = 'Hola mundo feliz';
    expect(esPangrama(frasePangrama)).toBe(true);
    expect(esPangrama(fraseNoPangrama)).toBe(false);
    expect(esPangrama('')).toBe(false);
    expect(esPangrama('   ')).toBe(false);
    expect(esPangrama(12345)).toBe(false);
    expect(esPangrama(null)).toBe(false);
  });

  // -----------------------------
  test('palabrasFrecuentes: debería devolver las palabras más frecuentes correctamente', () => {
    const texto = 'gato perro gato ave perro gato pez';
    const resultado = palabrasFrecuentes(texto, 2);
    expect(resultado).toEqual([
      { palabra: 'gato', cantidad: 3 },
      { palabra: 'perro', cantidad: 2 }
    ]);

    const texto2 = 'uno dos tres dos tres tres';
    expect(palabrasFrecuentes(texto2, 3)).toEqual([
      { palabra: 'tres', cantidad: 3 },
      { palabra: 'dos', cantidad: 2 },
      { palabra: 'uno', cantidad: 1 }
    ]);

    // Validaciones
    expect(palabrasFrecuentes('', 2)).toEqual([]);
    expect(() => palabrasFrecuentes('texto', 0)).toThrow('The second parameter must be a positive number');
    expect(() => palabrasFrecuentes('texto', -1)).toThrow('The second parameter must be a positive number');
    expect(() => palabrasFrecuentes('texto', 'no número')).toThrow('The second parameter must be a positive number');
    expect(palabrasFrecuentes('hola hola hola')).toEqual([{ palabra: 'hola', cantidad: 3 }]);
  });

});
