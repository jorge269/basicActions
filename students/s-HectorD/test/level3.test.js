const { esKaprekar, tipoDeTriangulo, esArmstrong } = require('./level3');

describe('Level 3 - Test', () => {

    describe('esKaprekar', () => {
        test('debería retornar verdadero para números de Kaprekar', () => {
            expect(esKaprekar(9)).toBe(true);   // 9^2=81, 8+1=9
            expect(esKaprekar(45)).toBe(true);  // 45^2=2025, 20+25=45
            expect(esKaprekar(297)).toBe(true); // 297^2=88209, 88+209=297
        });

        test('debería retornar verdadero para 1', () => {
            expect(esKaprekar(1)).toBe(true);
        });

        test('debería retornar falso para números no Kaprekar', () => {
            expect(esKaprekar(2)).toBe(false);
            expect(esKaprekar(10)).toBe(false);
            expect(esKaprekar(100)).toBe(false);
        });

        test('debería retornar falso para 0', () => {
            expect(esKaprekar(0)).toBe(false);
        });

        test('debería retornar falso para números negativos', () => {
            expect(esKaprekar(-9)).toBe(false);
        });

        test('debería retornar falso para números no enteros', () => {
            expect(esKaprekar(9.5)).toBe(false);
        });

        test('debería retornar falso para entradas no numéricas', () => {
            expect(esKaprekar('9')).toBe(false);
        });
    });

    describe('tipoDeTriangulo', () => {
        test('debería identificar triángulo equilátero', () => {
            expect(tipoDeTriangulo(5, 5, 5)).toBe('Equilátero');
            expect(tipoDeTriangulo(10, 10, 10)).toBe('Equilátero');
        });

        test('debería identificar triángulo isósceles', () => {
            expect(tipoDeTriangulo(5, 5, 3)).toBe('Isósceles');
            expect(tipoDeTriangulo(5, 3, 5)).toBe('Isósceles');
            expect(tipoDeTriangulo(3, 5, 5)).toBe('Isósceles');
        });

        test('debería identificar triángulo escaleno', () => {
            expect(tipoDeTriangulo(3, 4, 5)).toBe('Escaleno');
            expect(tipoDeTriangulo(7, 8, 10)).toBe('Escaleno');
        });

        test('debería rechazar triángulo con lados negativos', () => {
            expect(tipoDeTriangulo(-1, 5, 5)).toBe('No es un triángulo (lados deben ser positivos)');
            expect(tipoDeTriangulo(5, -1, 5)).toBe('No es un triángulo (lados deben ser positivos)');
        });

        test('debería rechazar triángulo con lados cero', () => {
            expect(tipoDeTriangulo(0, 5, 5)).toBe('No es un triángulo (lados deben ser positivos)');
        });

        test('debería rechazar triángulo inválido por desigualdad triangular', () => {
            expect(tipoDeTriangulo(1, 2, 10)).toBe('No es un triángulo (desigualdad triangular)');
            expect(tipoDeTriangulo(1, 10, 2)).toBe('No es un triángulo (desigualdad triangular)');
        });

        test('debería rechazar entradas no numéricas', () => {
            expect(tipoDeTriangulo('5', 5, 5)).toBe('No es un triángulo (lados deben ser números)');
            expect(tipoDeTriangulo(5, '5', 5)).toBe('No es un triángulo (lados deben ser números)');
        });
    });

    describe('esArmstrong', () => {
        test('debería retornar verdadero para números Armstrong de un dígito', () => {
            expect(esArmstrong(0)).toBe(true);
            expect(esArmstrong(1)).toBe(true);
            expect(esArmstrong(5)).toBe(true);
            expect(esArmstrong(9)).toBe(true);
        });

        test('debería retornar verdadero para números Armstrong de múltiples dígitos', () => {
            expect(esArmstrong(153)).toBe(true);  // 1^3 + 5^3 + 3^3 = 153
            expect(esArmstrong(370)).toBe(true);  // 3^3 + 7^3 + 0^3 = 370
            expect(esArmstrong(371)).toBe(true);  // 3^3 + 7^3 + 1^3 = 371
            expect(esArmstrong(407)).toBe(true);  // 4^3 + 0^3 + 7^3 = 407
        });

        test('debería retornar verdadero para números Armstrong de 4 dígitos', () => {
            expect(esArmstrong(1634)).toBe(true); // 1^4 + 6^4 + 3^4 + 4^4 = 1634
            expect(esArmstrong(8208)).toBe(true); // 8^4 + 2^4 + 0^4 + 8^4 = 8208
        });

        test('debería retornar falso para números no Armstrong', () => {
            expect(esArmstrong(10)).toBe(false);
            expect(esArmstrong(123)).toBe(false);
            expect(esArmstrong(100)).toBe(false);
        });

        test('debería retornar falso para números negativos', () => {
            expect(esArmstrong(-153)).toBe(false);
        });

        test('debería retornar falso para números no enteros', () => {
            expect(esArmstrong(153.5)).toBe(false);
        });

        test('debería retornar falso para entradas no numéricas', () => {
            expect(esArmstrong('153')).toBe(false);
        });
    });

});

