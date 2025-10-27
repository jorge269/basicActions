const { sumaMenoresQueN, teoremaPitagoras, isIsogram } = require('../src/level2');

describe('Level 2 - Test', () => {

    describe('sumaMenoresQueN', () => {
        test('debería calcular la suma correctamente para enteros positivos', () => {
            expect(sumaMenoresQueN(5)).toBe(10); // 0+1+2+3+4 = 10
            expect(sumaMenoresQueN(10)).toBe(45); // 0+1+2+...+9 = 45
        });

        test('debería retornar 0 para n=0', () => {
            expect(sumaMenoresQueN(0)).toBe(0);
        });

        test('debería retornar 0 para n=1', () => {
            expect(sumaMenoresQueN(1)).toBe(0);
        });

        test('debería calcular correctamente para n=100', () => {
            expect(sumaMenoresQueN(100)).toBe(4950);
        });

        test('debería retornar 0 para números negativos', () => {
            expect(sumaMenoresQueN(-5)).toBe(0);
        });

        test('debería retornar 0 para números no enteros', () => {
            expect(sumaMenoresQueN(5.5)).toBe(0);
        });

        test('debería retornar 0 para entradas no numéricas', () => {
            expect(sumaMenoresQueN('5')).toBe(0);
        });
    });

    describe('teoremaPitagoras', () => {
        test('debería calcular la hipotenusa correctamente para triángulo 3-4-5', () => {
            expect(teoremaPitagoras(3, 4)).toBe(5);
        });

        test('debería calcular la hipotenusa correctamente para triángulo 5-12-13', () => {
            expect(teoremaPitagoras(5, 12)).toBe(13);
        });

        test('debería calcular la hipotenusa para lados iguales', () => {
            expect(teoremaPitagoras(1, 1)).toBeCloseTo(Math.sqrt(2), 5);
        });

        test('debería calcular la hipotenusa para valores decimales', () => {
            expect(teoremaPitagoras(2.5, 6)).toBeCloseTo(6.5, 5);
        });

        test('debería retornar 0 para valores cero', () => {
            expect(teoremaPitagoras(0, 5)).toBe(0);
            expect(teoremaPitagoras(5, 0)).toBe(0);
        });

        test('debería retornar 0 para valores negativos', () => {
            expect(teoremaPitagoras(-3, 4)).toBe(0);
            expect(teoremaPitagoras(3, -4)).toBe(0);
        });

        test('debería retornar 0 para entradas no numéricas', () => {
            expect(teoremaPitagoras('3', 4)).toBe(0);
            expect(teoremaPitagoras(3, '4')).toBe(0);
        });
    });

    describe('isIsogram', () => {
        test('debería retornar verdadero para palabras isogramas', () => {
            expect(isIsogram('background')).toBe(true);
            expect(isIsogram('algorithm')).toBe(true);
        });

        test('debería retornar falso para palabras no isogramas', () => {
            expect(isIsogram('hello')).toBe(false);
            expect(isIsogram('programming')).toBe(false);
        });

        test('debería ser insensible a mayúsculas y minúsculas', () => {
            expect(isIsogram('JavaScript')).toBe(false);
        });

        test('debería retornar verdadero para cadena vacía', () => {
            expect(isIsogram('')).toBe(true);
        });

        test('debería retornar verdadero para un solo carácter', () => {
            expect(isIsogram('a')).toBe(true);
        });

        test('debería ignorar caracteres no alfabéticos', () => {
            expect(isIsogram('first-class')).toBe(false);
        });

        test('debería retornar falso para entradas no string', () => {
            expect(isIsogram(123)).toBe(false);
        });
    });

});
