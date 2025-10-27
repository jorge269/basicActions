function countVowels(sentence) {
  if (typeof sentence !== 'string') {
    return 0;
  }

  const matches = sentence.match(/[aeiouáéíóú]/gi);
  
  return matches ? matches.length : 0;
}

module.exports = { countVowels };