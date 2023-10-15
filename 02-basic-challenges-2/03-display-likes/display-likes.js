function displayLikes(arr) {
  switch (arr.length) {
    case 0:
      return "No one likes this";
    case 1:
      return `${arr[0]} likes this`;
    case 2:
      return `${arr[0]} and ${arr[1]} like this`;
    case 3:
      return `${arr[0]}, ${arr[1]}, and ${arr[2]} like this`;
    default:
      return `${arr[0]}, ${arr[1]}, and ${arr.length - 2} others like this`;
  }
}

module.exports = displayLikes;
