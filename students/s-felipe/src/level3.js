// --- Funciones Nivel 3---

// --- Funcion 1---
function calcularMediana(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error('Input must be a non-empty array');
  }
  if (numeros.some(n => typeof n !== 'number')) {
    throw new Error('All elements must be numbers');
  }

  const ordenados = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 === 0) {
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  } else {
    return ordenados[mitad];
  }
}


// --- Funcion 2---
function esPangrama(texto) {
  if (typeof texto !== 'string' || texto.trim() === '') {
    return false;
  }

  const letras = new Set();
  const limpio = texto.toLowerCase().replace(/[^a-záéíóúüñ]/g, '');

  for (const char of limpio) {
    letras.add(char);
  }

  const alfabeto = 'abcdefghijklmnñopqrstuvwxyz';
  return [...alfabeto].every(l => letras.has(l));
}


// --- Funcion 3---
function palabrasFrecuentes(texto, n = 3) {
  if (typeof texto !== 'string' || texto.trim() === '') {
    return [];
  }
  if (typeof n !== 'number' || n <= 0) {
    throw new Error('The second parameter must be a positive number');
  }

  const palabras = texto
    .toLowerCase()
    .replace(/[^\wáéíóúüñ\s]/gi, '')
    .split(/\s+/)
    .filter(Boolean);

  const conteo = {};
  for (const palabra of palabras) {
    conteo[palabra] = (conteo[palabra] || 0) + 1;
  }

  const ordenadas = Object.entries(conteo)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([palabra, cantidad]) => ({ palabra, cantidad }));

  return ordenadas;
}

module.exports = {
  calcularMediana,
  esPangrama,
  palabrasFrecuentes
};
