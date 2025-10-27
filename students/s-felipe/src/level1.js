// --- Funciones Nivel 1 ---

// --- Funcion 1 ---
function countVowels(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  const vowels = 'aeiouáéíóú';
  return [...text.toLowerCase()].filter(c => vowels.includes(c)).length;
}


// --- Funcion 2 ---
function sumEvenNumbers(numbers) {
  if (!Array.isArray(numbers)) throw new Error('Input must be an array');
  return numbers
    .filter(num => typeof num === 'number' && num % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
}

// --- Funcion 3 ---
function getInitials(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') {
    throw new Error('Input must be a non-empty string');
  }
  return sentence
    .trim()
    .split(/\s+/)
    .map(word => word[0].toUpperCase())
    .join('');
}

module.exports = {
  countVowels,
  sumEvenNumbers,
  getInitials
};
