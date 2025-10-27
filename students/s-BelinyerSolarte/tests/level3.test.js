const { validatePasswordStrength } = require('../src/level3');

describe('Level 3 - validatePasswordStrength', () => {
  test('Debe devolver "Débil" para contraseñas simples', () => {
    expect(validatePasswordStrength('abc')).toBe('Débil');
    expect(validatePasswordStrength('12345')).toBe('Débil');
  });

  test('Debe devolver "Media" para contraseñas medianamente seguras', () => {
    expect(validatePasswordStrength('Andrea12')).toBe('Media');
  });

  test('Debe devolver "Fuerte" para contraseñas seguras', () => {
    expect(validatePasswordStrength('Andr3a$olarte')).toBe('Fuerte');
  });

  test('Debe devolver mensaje de error si la entrada no es válida', () => {
    expect(validatePasswordStrength(null)).toBe('Entrada inválida');
  });
});
