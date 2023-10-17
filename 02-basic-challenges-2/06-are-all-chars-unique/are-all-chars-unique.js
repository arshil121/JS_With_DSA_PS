function areAllCharactersUnique(str) {
  const charObject = {};
  for(let i=0;i<str.length;i++){
    const char = str[i];

    if(charObject[char] === true){
      return false;
    }

    charObject[char] = true;
  }

  return true;
}

module.exports = areAllCharactersUnique;
