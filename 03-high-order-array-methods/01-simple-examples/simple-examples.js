const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const F = numbers.map((num) => {
  return num * (9 / 5) + 32;
});

console.log(`F is: ${F}`);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});
console.log(`Even Numbers are: ${evenNumbers}`);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);
console.log("Total sum: ", sum);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((num) => {
  console.log(`Array elements are: ${num}`);
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const foundNumber = numbers.find((num) => num > 2);
console.log("Returns the first number: ", foundNumber);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const hasEvenNumber = numbers.some((num) => {
  return num % 2 === 0;
});
console.log("Does even number exist: ", hasEvenNumber);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const allNumGreaterThanZero = numbers.some((num) => {
  return num < 0;
});
console.log("All numbers greater then zero: ", allNumGreaterThanZero);
