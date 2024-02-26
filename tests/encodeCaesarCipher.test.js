const decodeCaesarCipher = require("../lib/decodeCaesarCipher");
const {
  encodeCaesarCipher,
  getShiftedAlphabet,
  createAlphabetMap,
} = require("../lib/encodeCaesarCipher");

describe("encodeCaesarCipher", () => {
  test("when passed an empty string, it should return an empty string", () => {
    const input = "";
    const expected = "";
    const actual = encodeCaesarCipher(input, 5);
    expect(actual).toBe(expected);
  });
  test("when passed 0, it should return the same string", () => {
    const input = "hello";
    const expected = "hello";
    const actual = encodeCaesarCipher(input, 0);
    expect(actual).toBe(expected);
  });
  test("when passed a single word, it should return the word shifted by the provided number", () => {
    const input = "hello";
    const expected = "jgnnq";
    const actual = encodeCaesarCipher(input, 2);
    expect(actual).toBe(expected);
  });
  test("should handle different letter case", () => {
    const input = "Hello";
    const expected = "Khoor";
    const actual = encodeCaesarCipher(input, 3);
    expect(actual).toBe(expected);
  });
  test("should handle punctuation and symbols", () => {
    const input = "[Hello!]";
    const expected = "[Lipps!]";
    const actual = encodeCaesarCipher(input, 4);
    expect(actual).toBe(expected);
  });
  test("when passed multiple words, it should return the string shifted by the provided number", () => {
    const input = "Hello World! This is a test.";
    const expected = "Mjqqt Btwqi! Ymnx nx f yjxy.";
    const actual = encodeCaesarCipher(input, 5);
    expect(actual).toBe(expected);
  });
  test("when passed a number greater than or equal to the alphabet's length, it should wrap around the alphabet", () => {
    const input =
      "Hello World! This is a test to check a number greater than or equal to 26.";
    const expected =
      "Jgnnq Yqtnf! Vjku ku c vguv vq ejgem c pwodgt itgcvgt vjcp qt gswcn vq 26.";
    const actual = encodeCaesarCipher(input, 80);
    expect(actual).toBe(expected);
  });
  test("when no number is passed, it should generate a random number to encode the string", () => {
    const input =
      "Hello World! This is a test to check if a string can be encoded without passing a number.";
    const encodedString = encodeCaesarCipher(input);
    const actual = decodeCaesarCipher(encodedString);
    expect(actual).toContain(input);
  });
});

describe("getShiftedAlphabet", () => {
  test("should return the alphabet if passed 0", () => {
    const expected = "abcdefghijklmnopqrstuvwxyz";
    const actual = getShiftedAlphabet(0);
    expect(actual).toBe(expected);
  });
  test("when passed a number greater than or equal to the alphabet's length, it should wrap around the alphabet", () => {
    const expected = "yzabcdefghijklmnopqrstuvwx";
    const actual = getShiftedAlphabet(76);
    expect(actual).toBe(expected);
  });
});

describe("getShiftedAlphabet", () => {
  test("should return the alphabet if passed 0", () => {
    const expected = "abcdefghijklmnopqrstuvwxyz";
    const actual = getShiftedAlphabet(0);
    expect(actual).toBe(expected);
  });
  test("when passed a number greater than or equal to the alphabet's length, it should wrap around the alphabet", () => {
    const expected = "yzabcdefghijklmnopqrstuvwx";
    const actual = getShiftedAlphabet(76);
    expect(actual).toBe(expected);
  });
});

describe("createAlphabetMap", () => {
  test("should return a Map object that maps each letter from the alphabet to the corresponding shifted letter, both in lowercase and uppercase", () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const shiftedAlphabet = "yzabcdefghijklmnopqrstuvwx";
    const expected = {
      a: "y",
      A: "Y",
      b: "z",
      B: "Z",
      c: "a",
      C: "A",
      d: "b",
      D: "B",
      e: "c",
      E: "C",
      f: "d",
      F: "D",
      g: "e",
      G: "E",
      h: "f",
      H: "F",
      i: "g",
      I: "G",
      j: "h",
      J: "H",
      k: "i",
      K: "I",
      l: "j",
      L: "J",
      m: "k",
      M: "K",
      n: "l",
      N: "L",
      o: "m",
      O: "M",
      p: "n",
      P: "N",
      q: "o",
      Q: "O",
      r: "p",
      R: "P",
      s: "q",
      S: "Q",
      t: "r",
      T: "R",
      u: "s",
      U: "S",
      v: "t",
      V: "T",
      w: "u",
      W: "U",
      x: "v",
      X: "V",
      y: "w",
      Y: "W",
      z: "x",
      Z: "X",
    };
    const actual = createAlphabetMap(alphabet, shiftedAlphabet);
    expect(Object.fromEntries(actual)).toMatchObject(expected);
  });
});
