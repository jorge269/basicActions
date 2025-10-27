const { countVowels, sumEvenNumbers, getInitials } = require('../src/level1');

describe('Nivel 1 – Funciones Básicas', () => {

  // -----------------------------
  test('countVowels: debería contar correctamente las vocales', () => {
    expect(countVowels('Hola Mundo')).toBe(4);
    expect(countVowels('xyz')).toBe(0);
    expect(countVowels('')).toBe(0);
    expect(() => countVowels(123)).toThrow('Input must be a string');
    expect(() => countVowels(null)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('sumEvenNumbers: debería sumar solo los números pares', () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
    expect(sumEvenNumbers([2, 4, 6, 8])).toBe(20);
    expect(sumEvenNumbers([1, 3, 5])).toBe(0);
    expect(sumEvenNumbers([10])).toBe(10);
    expect(sumEvenNumbers([])).toBe(0);
    expect(sumEvenNumbers([2, 'a', null, 4])).toBe(6);
    expect(() => sumEvenNumbers('no array')).toThrow('Input must be an array');
  });

  // -----------------------------
  test('getInitials: debería devolver las iniciales correctamente', () => {
    expect(getInitials('Juan Felipe Figueroa')).toBe('JFF');
    expect(getInitials('hola mundo')).toBe('HM');
    expect(getInitials('multi palabra prueba')).toBe('MPP');
    expect(() => getInitials('')).toThrow('Input must be a non-empty string');
    expect(() => getInitials(123)).toThrow('Input must be a non-empty string');
    expect(() => getInitials(null)).toThrow('Input must be a non-empty string');
  });

});
