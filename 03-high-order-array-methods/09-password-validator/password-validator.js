function validatePassword(str) {
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  // at least one digit, one lowercase letter, one uppercase letter, and at least 8 characters long
  return passwordPattern.test(str);
}

module.exports = validatePassword;
