const isValidIPv4 = (arr) => {
  //split arr based on .
  let ipArr = arr.split(".");
  if (ipArr.length !== 4) {
    return false;
  } else {
    //check if each arr is in range 0 to 255
    for (let i = 0; i < ipArr.length; i++) {
      let currentPart = parseInt(ipArr[i]);
      if (!(currentPart >= 0 && currentPart <= 255)) {
        return false;
      }
    }
    return true;
  }
};

module.exports = isValidIPv4;
