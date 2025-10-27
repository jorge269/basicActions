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

function esTrianguloValido(a, b, c) {

  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return { isValid: false, error: "No es un triángulo (lados deben ser números)" };
  }
  
  if (a <= 0 || b <= 0 || c <= 0) {
    return { isValid: false, error: "No es un triángulo (lados deben ser positivos)" };
  }
  
  if (a + b <= c || a + c <= b || b + c <= a) {
    return { isValid: false, error: "No es un triángulo (desigualdad triangular)" };
  }
  
  return { isValid: true, error: null };
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
  esTrianguloValido,
  esArmstrong
};