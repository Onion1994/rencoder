const encodeCaesarCipher = require("./encodeCaesarCipher");

const decodeCaesarCipher = (string, num) => {
  if (num) {
    return encodeCaesarCipher(string, -num);
  }
  let dynamicNum = 25;
  const decodedArr = [];
  const alphabetLength = 26;
  if (string.length > 0) {
    for (let i = 1; i < alphabetLength; i++) {
      decodedArr.push(encodeCaesarCipher(string, dynamicNum));
      dynamicNum--;
    }
  }
  return decodedArr;
};

module.exports = decodeCaesarCipher;
