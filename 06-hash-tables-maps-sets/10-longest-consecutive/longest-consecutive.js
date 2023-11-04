function longestConsecutiveSequence(arr) {
  const numSet = new Set(arr);
  let longestSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let sequenceLength = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        sequenceLength += 1;
      }
      longestSequence = Math.max(longestSequence, sequenceLength);
    }
  }
  return longestSequence; 
}

module.exports = longestConsecutiveSequence;
