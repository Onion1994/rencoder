const langdetect = require("langdetect");
const { encodeCaesarCipher } = require("./encodeCaesarCipher");

const decodeCaesarCipher = (string, num) => {
  if (num) {
    return encodeCaesarCipher(string, -num);
  }
  let shiftNum = 25;
  const decodedArr = [];
  if (string.length > 0) {
    for (let i = 25; i > 0; i--) {
      decodedArr.push(encodeCaesarCipher(string, shiftNum));
      shiftNum--;
    }
  }
  const englishStrings = decodedArr.filter((str) => {
    const infoLang = langdetect.detect(str);
    return infoLang[0].lang === "en" && infoLang[0].prob > 0.9;
  });
  return englishStrings;
};

module.exports = decodeCaesarCipher;
