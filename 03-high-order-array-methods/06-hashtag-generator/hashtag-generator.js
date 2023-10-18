function generateHashtag(str) {
  if (str === "") {
    return false; // If the input string is empty, return false
  }

  let str1 = str.trim(); // Remove leading and trailing white spaces
  if (str1 === "") {
    return false; // If the input string contains only white spaces, return false
  }

  let newStr = str1
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  if (newStr.length >= 140) {
    return false; // If the final string exceeds 140 characters, return false
  }

  return "#" + newStr; // Return the hashtag with the generated string
}

module.exports = generateHashtag;
