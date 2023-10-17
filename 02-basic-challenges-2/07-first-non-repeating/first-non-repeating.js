function findFirstNonRepeatingCharacter(str) {
  const charObject = {};
  for (const char of str) {
    charObject[char] = (charObject[char] || 0) + 1;
  }

  for (const char of str) {
    if (charObject[char] === 1) {
      return char;
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
