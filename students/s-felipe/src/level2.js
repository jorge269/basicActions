// --- Funciones Nivel 2---

// --- Funcion 1---
function isValidEmail(email) {
  if (typeof email !== 'string' || email.trim() === '') {
    return false;
  }
  const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email.trim());
}

// --- Funcion 2---
function longestWord(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') {
    return '';
  }
  const clean = sentence
    .replace(/[^\wáéíóúüñ\s]/gi, '')
    .split(/\s+/);
  let longest = '';
  for (let i = 0; i < clean.length; i++) {
    if (clean[i].length > longest.length) {
      longest = clean[i];
    }
  }
  return longest;
}

// --- Funcion 3---
function isPerfectNumber(num) {
  if (typeof num !== 'number' || num <= 1) {
    return false;
  }
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

module.exports = {
  isValidEmail,
  longestWord,
  isPerfectNumber
};
