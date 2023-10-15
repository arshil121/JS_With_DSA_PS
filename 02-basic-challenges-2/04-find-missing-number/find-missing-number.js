function findMissingNumber(numbers) {
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== i + 1) {
      return `Missing Number: ${i + 1}`;
    }
  }
}

module.exports = findMissingNumber;
