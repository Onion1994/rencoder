const alphabet = "abcdefghijklmnopqrstuvwxyz";

const getShiftedAlphabet = (num) => {
  const adjustedNum = num % alphabet.length;
  const shiftedAlphabet =
    alphabet.slice(adjustedNum) + alphabet.slice(0, adjustedNum);
  return shiftedAlphabet;
};

const createAlphabetMap = (original, shifted) => {
  const alphabetMap = new Map();
  original.split("").forEach((letter, index) => {
    alphabetMap.set(letter, shifted[index]);
    alphabetMap.set(letter.toUpperCase(), shifted[index].toUpperCase());
  });
  return alphabetMap;
};

const encodeCaesarCipher = (string, num) => {
  const shiftNum = num || num === 0 ? num : Math.floor(Math.random() * 26);
  const shiftedAlphabet = getShiftedAlphabet(shiftNum);
  const alphabetMap = createAlphabetMap(alphabet, shiftedAlphabet);

  return string
    .split("")
    .map((letter) => alphabetMap.get(letter) || letter)
    .join("");
};

module.exports = { encodeCaesarCipher, getShiftedAlphabet, createAlphabetMap };
