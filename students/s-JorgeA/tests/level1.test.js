const { findMax } = require('../src/level1');

describe('findMax', () => {
  test('devuelve el número mayor de un arreglo de enteros', () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });

  test('devuelve el número mayor con números negativos', () => {
    expect(findMax([-10, -5, -20])).toBe(-5);
  });

  test('devuelve null si el arreglo está vacío', () => {
    expect(findMax([])).toBeNull();
  });

  test('devuelve null si no se pasa un arreglo', () => {
    expect(findMax('123')).toBeNull();
  });

  test('devuelve null si el arreglo contiene elementos no numéricos', () => {
    expect(findMax([1, 'a', 3])).toBeNull();
  });
});
