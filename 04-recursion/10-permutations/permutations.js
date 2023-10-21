function permutations(str) {
  let result = [];

  if (str.length === 0) {
    return [""];
  }

  for (let i = 0; i < str.length; i++) {
    let subStr = str.slice(0, i) + str.slice(i + 1);
    let perms = permutations(subStr);
    for (let j = 0; j < perms.length; j++) {
      result.push(str[i] + perms[j]);
    }
  }

  return result;
}

module.exports = permutations;
