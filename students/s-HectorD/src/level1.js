/*Hector Daniel Carabali Valencia*/

function esAutomorfico(num) {
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    return false;
  }
  
  const cuadrado = (num * num).toString();
  return cuadrado.endsWith(num.toString());
}

function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    return 0;
  }
  
  return numbers.reduce((sum, num) => {
    return typeof num === 'number' ? sum + num : sum;
  }, 0);
}

function esBisiesto(year) {
  if (typeof year !== 'number' || !Number.isInteger(year) || year < 0) {
    return false;
  }
  
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

module.exports = {
  esAutomorfico,
  sumArray,
  esBisiesto
};
