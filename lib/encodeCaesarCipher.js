const encodeCaesarCipher = (string, num) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const splitString = string.split("");
  const shiftedAlphabet = alphabet.slice(num).concat(alphabet.slice(0, num));
  const shiftedSplitString = [];
  splitString.forEach((letter) => {
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] === letter) {
        shiftedSplitString.push(shiftedAlphabet[i]);
      }
    }
  });
  const shiftedString = shiftedSplitString.join("");
  return shiftedString;
};

module.exports = encodeCaesarCipher;
