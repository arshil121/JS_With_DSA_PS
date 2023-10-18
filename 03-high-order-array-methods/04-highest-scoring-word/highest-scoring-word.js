function highestScoringWord(str) {
  const words = str.split(" ");
  const scores = words.map((word) => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });
  console.log(scores);

  //find max value position from scores
  const maxValueIndex = scores.indexOf(Math.max(...scores));
  return words[maxValueIndex];
}

module.exports = highestScoringWord;
