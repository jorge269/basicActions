const { isValidEmail, longestWord, isPerfectNumber } = require('../src/level2');

describe('Nivel 2 – Lógica y Condiciones', () => {

  // -----------------------------
  test('isValidEmail: debería validar correctamente correos electrónicos', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@mail.co')).toBe(true);
    expect(isValidEmail('usuario@dominio.org')).toBe(true);

    // Casos inválidos
    expect(isValidEmail('sin-arroba.com')).toBe(false);
    expect(isValidEmail('mal@correo')).toBe(false);
    expect(isValidEmail('@correo.com')).toBe(false);
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('   ')).toBe(false);
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(12345)).toBe(false);
  });

  // -----------------------------
  test('longestWord: debería devolver la palabra más larga de una oración', () => {
    expect(longestWord('El gato duerme profundamente')).toBe('profundamente');
    expect(longestWord('Rápido y furioso')).toBe('furioso');
    expect(longestWord('Solo una palabra')).toBe('palabra');
    expect(longestWord('Esto, es. una prueba!!')).toBe('prueba');
    expect(longestWord('')).toBe('');
    expect(longestWord('   ')).toBe('');
    expect(longestWord(null)).toBe('');
    expect(longestWord(123)).toBe('');
  });

  // -----------------------------
  test('isPerfectNumber: debería identificar correctamente los números perfectos', () => {
    expect(isPerfectNumber(6)).toBe(true);   // 1 + 2 + 3 = 6
    expect(isPerfectNumber(28)).toBe(true);  // 1 + 2 + 4 + 7 + 14 = 28

    // No perfectos
    expect(isPerfectNumber(12)).toBe(false);
    expect(isPerfectNumber(1)).toBe(false);
    expect(isPerfectNumber(0)).toBe(false);
    expect(isPerfectNumber(-6)).toBe(false);

    // Tipos inválidos
    expect(isPerfectNumber('6')).toBe(false);
    expect(isPerfectNumber(null)).toBe(false);
    expect(isPerfectNumber([])).toBe(false);
  });

});
