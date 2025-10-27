function passwordStrength(password) {
  if (typeof password !== 'string') return 'Débil';

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score >= 5) return 'Fuerte';
  if (score >= 3) return 'Media';
  return 'Débil';
}

module.exports = { passwordStrength };