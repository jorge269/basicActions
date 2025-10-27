const { esKaprekar, esTrianguloValido, esArmstrong } = require('../src/level3');

describe('Level 3 - Test', () => {

    describe('esKaprekar', () => {
        test('debería retornar verdadero para números de Kaprekar', () => {
            expect(esKaprekar(9)).toBe(true);  
            expect(esKaprekar(45)).toBe(true);  
            expect(esKaprekar(297)).toBe(true); 
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

    describe('esTrianguloValido', () => {
        test('debería retornar válido para triángulo correcto', () => {
            const result = esTrianguloValido(3, 4, 5);
            expect(result.isValid).toBe(true);
            expect(result.error).toBe(null);
        });

        test('debería retornar inválido para números negativos', () => {
            const result = esTrianguloValido(-1, 5, 5);
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('No es un triángulo (lados deben ser positivos)');
        });

        test('debería retornar inválido para tipos incorrectos', () => {
            const result = esTrianguloValido('5', 5, 5);
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('No es un triángulo (lados deben ser números)');
        });

        test('debería retornar inválido por desigualdad triangular', () => {
            const result = esTrianguloValido(1, 2, 10);
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('No es un triángulo (desigualdad triangular)');
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
            expect(esArmstrong(153)).toBe(true);  
            expect(esArmstrong(370)).toBe(true);  
            expect(esArmstrong(371)).toBe(true);  
            expect(esArmstrong(407)).toBe(true);  
        });

        test('debería retornar verdadero para números Armstrong de 4 dígitos', () => {
            expect(esArmstrong(1634)).toBe(true); 
            expect(esArmstrong(8208)).toBe(true); 
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

