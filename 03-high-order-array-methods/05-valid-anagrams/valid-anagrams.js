function validAnagrams(str1, str2) {
  //sort str2
  let sortedStr = [...str2].sort().join("");
  if (str1 === sortedStr) {
    return true;
  } else {
    return false;
  }
}

module.exports = validAnagrams;
