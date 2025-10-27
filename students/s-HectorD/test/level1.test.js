
const { esAutomorfico, sumArray, esBisiesto } = require('./level1');

describe('Level 1 - Test', () => {

    describe('esAutomorfico', () => {
        test('debería retornar verdadero para números automórficos', () => {
            expect(esAutomorfico(5)).toBe(true); // 5^2 = 25
            expect(esAutomorfico(6)).toBe(true); // 6^2 = 36
            expect(esAutomorfico(25)).toBe(true); // 25^2 = 625
        });

        test('debería retornar verdadero para 0 y 1', () => {
            expect(esAutomorfico(0)).toBe(true); // 0^2 = 0
            expect(esAutomorfico(1)).toBe(true); // 1^2 = 1
        });

        test('debería retornar verdadero para 76', () => {
            expect(esAutomorfico(76)).toBe(true); // 76^2 = 5776
        });

        test('debería retornar falso para números no automórficos', () => {
            expect(esAutomorfico(2)).toBe(false);
            expect(esAutomorfico(7)).toBe(false);
            expect(esAutomorfico(10)).toBe(false);
        });

        test('debería retornar falso para números negativos', () => {
            expect(esAutomorfico(-5)).toBe(false);
        });

        test('debería retornar falso para números no enteros', () => {
            expect(esAutomorfico(5.5)).toBe(false);
        });

        test('debería retornar falso para entradas no numéricas', () => {
            expect(esAutomorfico('5')).toBe(false);
        });
    });

    describe('sumArray', () => {
        test('debería sumar números positivos', () => {
            expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
        });

        test('debería sumar números negativos', () => {
            expect(sumArray([-1, -2, -3])).toBe(-6);
        });

        test('debería sumar números positivos y negativos mezclados', () => {
            expect(sumArray([10, -5, 3, -2])).toBe(6);
        });

        test('debería retornar 0 para un array vacío', () => {
            expect(sumArray([])).toBe(0);
        });

        test('debería ignorar valores no numéricos', () => {
            expect(sumArray([1, 'dos', 3, null, 5])).toBe(9);
        });

        test('debería retornar 0 para entradas no array', () => {
            expect(sumArray('no es un array')).toBe(0);
        });
    });

    describe('esBisiesto', () => {
        test('debería retornar verdadero para años bisiestos divisibles por 4 pero no por 100', () => {
            expect(esBisiesto(2024)).toBe(true);
            expect(esBisiesto(2020)).toBe(true);
            expect(esBisiesto(2016)).toBe(true);
        });

        test('debería retornar falso para años no bisiestos', () => {
            expect(esBisiesto(2023)).toBe(false);
            expect(esBisiesto(2021)).toBe(false);
            expect(esBisiesto(2019)).toBe(false);
        });

        test('debería retornar falso para años divisibles por 100 pero no por 400', () => {
            expect(esBisiesto(1900)).toBe(false);
            expect(esBisiesto(2100)).toBe(false);
        });

        test('debería retornar verdadero para años divisibles por 400', () => {
            expect(esBisiesto(2000)).toBe(true);
            expect(esBisiesto(2400)).toBe(true);
        });

        test('debería retornar falso para números negativos', () => {
            expect(esBisiesto(-2020)).toBe(false);
        });

        test('debería retornar falso para números no enteros', () => {
            expect(esBisiesto(2020.5)).toBe(false);
        });

        test('debería retornar falso para entradas no numéricas', () => {
            expect(esBisiesto('2020')).toBe(false);
        });
    });

});