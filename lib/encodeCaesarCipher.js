const encodeCaesarCipher = (string, num) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const adjustedNum = num % alphabet.length;
  const splitString = string.split("");
  const shiftedAlphabet = alphabet
    .slice(adjustedNum)
    .concat(alphabet.slice(0, adjustedNum));
  const shiftedSplitString = [];
  splitString.forEach((letter) => {
    if (!alphabet.includes(letter.toLowerCase())) {
      shiftedSplitString.push(letter);
    } else {
      for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) {
          shiftedSplitString.push(shiftedAlphabet[i]);
          break;
        } else if (alphabet[i].toUpperCase() === letter) {
          shiftedSplitString.push(shiftedAlphabet[i].toUpperCase());
          break;
        }
      }
    }
  });
  const shiftedString = shiftedSplitString.join("");
  return shiftedString;
};

module.exports = encodeCaesarCipher;
