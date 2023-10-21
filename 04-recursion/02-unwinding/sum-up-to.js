function sumUpTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumUpTo(n - 1);
  }
}

module.exports = sumUpTo;
