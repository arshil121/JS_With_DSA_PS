function twoSum(arr, target) {
  const numSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (numSet.has(complement)) {
      return [complement, arr[i]]; // Return the pair of elements that add up to the target
    }

    numSet.add(arr[i]); // Add the current element to the set
  }

  return false; // Return false if no such pair is found
}

module.exports = twoSum;
