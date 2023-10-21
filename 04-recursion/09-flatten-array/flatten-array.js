function flattenArray(arr) {
  let result = []; // Keeps the flattened array
  for (const item of arr) {
    // Iterating through each item of the array
    if (Array.isArray(item)) {
      // Checking if the selected item is an array or a single element
      result = result.concat(flattenArray(item)); // Concatenating the flattened inner array
    } else {
      result.push(item); // Pushing the element to the result array
    }
  }
  return result; // Returning the final flattened array
}

module.exports = flattenArray;