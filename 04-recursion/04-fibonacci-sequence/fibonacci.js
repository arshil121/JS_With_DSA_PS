function fibonacci(num) {
  console.log(`Fibonacci: ${num}`)
  if (num < 2) return num;
  else return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
