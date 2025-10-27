const { passwordStrength } = require('../src/level3');

test('Contraseña fuerte', () => {
  expect(passwordStrength('Abc123!@#')).toBe('Fuerte');
});

test('Contraseña media', () => {
  expect(passwordStrength('Abc123')).toBe('Media');
});

test('Contraseña débil', () => {
  expect(passwordStrength('abc')).toBe('Débil');
});