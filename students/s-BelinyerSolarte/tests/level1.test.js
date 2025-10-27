const { countVowels } = require('../src/level1');

describe('Level 1 - countVowels', () => {
  test('Debe contar correctamente las vocales en una frase', () => {
    expect(countVowels('Hola mundo')).toBe(4);
    expect(countVowels('Cuentas claras y el chocolate espeso')).toBe(13);
    expect(countVowels('Sóbese que no hay pomada')).toBe(10);
    expect(countVowels('El que tiene tienda, que la atienda')).toBe(16);
  });

  test('Debe devolver 0 si no hay vocales', () => {
    expect(countVowels('rhythm')).toBe(0);
    expect(countVowels('gypsy')).toBe(0);
    expect(countVowels('crypt')).toBe(0);
  });

  test('Debe reconocer mayusculas y tildes', () => {
    expect(countVowels('Árbol')).toBe(2);
    expect(countVowels('RÁPIDO')).toBe(3);
    expect(countVowels('electroencefalografía')).toBe(10);
  });
});
