const langdetect = require('langdetect');
const encodeCaesarCipher = require("./encodeCaesarCipher");

const decodeCaesarCipher = (string, num) => {
  if (num) {
    return encodeCaesarCipher(string, -num);
  }
  let shiftNum = 25;
  const decodedArr = [];
  const alphabetLength = 26;
  if (string.length > 0) {
    for (let i = 1; i < alphabetLength; i++) {
      decodedArr.push(encodeCaesarCipher(string, shiftNum));
      shiftNum--;
    }
  }
  const englishStrings = decodedArr.filter((str) => {
    const lang = langdetect.detect(str);
    return lang[0].lang === 'en'
  });
  return englishStrings;
};

module.exports = decodeCaesarCipher;
