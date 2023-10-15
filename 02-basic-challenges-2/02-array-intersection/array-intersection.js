function arrayIntersection(arr1, arr2) {
  const mergedArray = [...new Set([...arr1, ...arr2])];
  return mergedArray;
}

module.exports = arrayIntersection;
