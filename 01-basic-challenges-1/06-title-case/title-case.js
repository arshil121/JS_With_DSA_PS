function titleCase(str) {
  let words = str.toLowerCase();
  let newString = "";
  for (let i = 0; i < words.length; i++) {
    if (i === 0 || words[i - 1] === " ") {
      newString += words[i].toUpperCase();
    } else {
      newString += words[i];
    }
  }
  return newString;
}

module.exports = titleCase;
