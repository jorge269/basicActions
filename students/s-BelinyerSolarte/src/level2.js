function toUpperCaseText(text) {
  if (typeof text !== 'string') {
    return '';
  }
  return text.toUpperCase(); 
}

function toLowerCaseText(text) {
  if (typeof text !== 'string') {
    return '';
  }
  return text.toLowerCase();
}

module.exports = { toUpperCaseText, toLowerCaseText };