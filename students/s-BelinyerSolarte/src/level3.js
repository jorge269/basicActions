/* eslint-disable complexity */
function validatePasswordStrength(password) {
  if (typeof password !== 'string') return 'Entrada inválida';

  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[@$!%*?&]/.test(password)) score++;

  if (score <= 2) return 'Débil';
  if (score === 3 || score === 4) return 'Media';
  if (score === 5) return 'Fuerte';
}

module.exports = { validatePasswordStrength };