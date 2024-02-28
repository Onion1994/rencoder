const { encodeCaesarCipher } = require("./encodeCaesarCipher");

const decodeCaesarCipher = (string, num) => {
  if (num) {
    return encodeCaesarCipher(string, -num);
  }
  if (string.length) {
    let shiftNum = 25;
    const decodedArr = [];
    if (string.length > 0) {
      for (let i = 25; i > 0; i--) {
        decodedArr.push(encodeCaesarCipher(string, shiftNum, true));
        shiftNum--;
      }
    }
    const sortedArray = decodedArr.sort((a, b) => b[1] - a[1]);
    if (sortedArray[0][1] === sortedArray[1][1] && sortedArray[0][1] !== 0) {
      const highestValue = sortedArray[0][1];
      const filteredArray = sortedArray
        .filter((arr) => arr[1] === highestValue)
        .map((arr) => arr[0]);
      return filteredArray;
    } else if (sortedArray[0][1] !== 0) {
      return sortedArray[0][0];
    }
  }
  return [];
};

module.exports = decodeCaesarCipher;
