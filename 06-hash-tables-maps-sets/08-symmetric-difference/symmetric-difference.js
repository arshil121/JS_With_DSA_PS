function symmetricDifference(arr1, arr2) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);
  const result = [];

  for (const value of arr1) {
    if (!setB.has(value) && !result.includes(value)) {
      result.push(value);
    }
  }

  for (const value of arr2) {
    if (!setA.has(value) && !result.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

module.exports = symmetricDifference;
