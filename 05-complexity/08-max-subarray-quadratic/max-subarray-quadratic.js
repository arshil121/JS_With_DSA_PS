function maxSubarraySum(arr, k) {
  let maxsum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }

    maxsum = Math.max(maxsum, currentSum);
  }
  return maxsum;
}

module.exports = maxSubarraySum;
