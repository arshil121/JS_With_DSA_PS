// function filteredArray(arr) {
//   return arr.filter((num) => {
//     return num % 2 === 0;
//   });
// }

// function SquaresofArray(filteredArr) {
//   return filteredArr.map((num) => {
//     return Math.pow(num, 2);
//   });
// }

// function sumOfArrays(squaredValues) {
//   return squaredValues.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
// }

function sumOfEvenSquares(arr) {
  // const filteredArr = filteredArray(arr);
  // const squaredValues = SquaresofArray(filteredArr);
  // const sum = sumOfArrays(squaredValues);
  // return sum;

  const evenSquares = arr
    .filter((num) => num % 2 === 0)
    .map((num) => Math.pow(num, 2))
    .reduce((sum, square) => sum + square, 0);
  return evenSquares;
  
}

module.exports = sumOfEvenSquares;
