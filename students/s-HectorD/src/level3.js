/*Hector Daniel Carabali Valencia*/

function esKaprekar(num) {
  if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
    return false;
  }
  
  if (num === 1) {
    return true;
  }
  
  const cuadrado = (num * num).toString();
  for (let i = 1; i < cuadrado.length; i++) {
    const parte1 = parseInt(cuadrado.substring(0, i));
    const parte2 = parseInt(cuadrado.substring(i));
    if (parte1 + parte2 === num && parte2 !== 0) {
      return true;
    }
  }
  return false;
}

function tipoDeTriangulo(a, b, c) {
  // Validar que sea un triángulo
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return "No es un triángulo (lados deben ser números)";
  }
  
  if (a <= 0 || b <= 0 || c <= 0) {
    return "No es un triángulo (lados deben ser positivos)";
  }
  
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "No es un triángulo (desigualdad triangular)";
  }
  
  // Clasificar por lados
  if (a === b && b === c) {
    return "Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

function esArmstrong(num) {
  if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
    return false;
  }
  
  const digitos = num.toString().split('');
  const potencia = digitos.length;
  const suma = digitos.reduce((total, d) => 
    total + Math.pow(parseInt(d), potencia), 0);
  return suma === num;
}

module.exports = {
  esKaprekar,
  tipoDeTriangulo,
  esArmstrong
};