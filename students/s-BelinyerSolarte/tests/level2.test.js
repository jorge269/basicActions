const { toUpperCaseText, toLowerCaseText } = require('../src/level2');

describe('Level 2 - Text conversions', () => {
  test('Convierte texto a mayúsculas', () => {
    expect(toUpperCaseText('andrea')).toBe('ANDREA');
    expect(toUpperCaseText('JavaScript')).toBe('JAVASCRIPT');
    expect(toUpperCaseText('electroencefalografía')).toBe('ELECTROENCEFALOGRAFÍA');
  });

  test('Convierte texto a minúsculas', () => {
    expect(toLowerCaseText('SOLARTE')).toBe('solarte');
    expect(toLowerCaseText('HOLA MUNDO')).toBe('hola mundo');
    expect(toLowerCaseText('OTORRINOLARINGOLOGÍA')).toBe('otorrinolaringología');
  });

  test('Devuelve vacío si la entrada no es texto', () => {
    expect(toUpperCaseText(123)).toBe('');
    expect(toLowerCaseText(null)).toBe('');
  });
});
