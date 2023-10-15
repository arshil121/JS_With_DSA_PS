function palingdrome(str) {
  const checker = str.toLowerCase().replace(/^a-z0-9/g, "");
  const reversed = checker.split("").reverse().join("");
  return checker === reversed;
}

module.exports = palingdrome;
