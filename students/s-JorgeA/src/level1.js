function findMax(numbers) {
  // Validar que sea un array y que no esté vacío
  if (!Array.isArray(numbers) || numbers.length === 0) return null;

  // Validar que todos los elementos sean números
  if (!numbers.every(num => typeof num === 'number')) return null;

  // Usar Math.max con spread operator
  return Math.max(...numbers);
}

module.exports = { findMax };
