/*Hector Daniel Carabali Valencia*/

function sumaMenoresQueN(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    return 0;
  }
  
  if (n === 0 || n === 1) {
    return 0;
  }
  
  return n * (n - 1) / 2;
}

function teoremaPitagoras(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a <= 0 || b <= 0) {
    return 0;
  }
  
  return Math.sqrt(a * a + b * b);
}

function isIsogram(word) {
  if (typeof word !== 'string') {
    return false;
  }

  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
  const letterSet = new Set(cleanWord);
  
  return letterSet.size === cleanWord.length;
}

module.exports = {
  sumaMenoresQueN,
  teoremaPitagoras,
  isIsogram
};