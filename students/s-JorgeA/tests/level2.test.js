const { toTitleCase } = require('../src/level2');

test('Convierte texto a Title Case', () => {
  expect(toTitleCase('hola mundo desde node')).toBe('Hola Mundo Desde Node');
});

test('Maneja texto vacío', () => {
  expect(toTitleCase('')).toBe('');
});