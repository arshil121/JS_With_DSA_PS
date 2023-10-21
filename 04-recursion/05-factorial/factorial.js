function factorial(num) {
  if (num === 0) {
    return 1; // Base case: factorial of 0 is 1
  } else {
    return num * factorial(num - 1); // Recursive case
  }
}

module.exports = factorial;
