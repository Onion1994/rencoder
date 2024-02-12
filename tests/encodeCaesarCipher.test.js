const encodeCaesarCipher = require("../lib/encodeCaesarCipher");

describe("encodeCaesarCipher", () => {
  test("when passed an empty string, it should return an empty string", () => {
    const input = "";
    const expected = "";
    const actual = encodeCaesarCipher(input, 5);
    expect(actual).toBe(expected);
  });
  test("when passed a single word and 0, it should return the same word", () => {
    const input = "hello";
    const expected = "hello";
    const actual = encodeCaesarCipher(input, 0);
    expect(actual).toBe(expected);
  });
  test("when passed a single word, it should return the word shifted by the provided number", () => {
    const input = "hello";
    const expected = "mjqqt";
    const actual = encodeCaesarCipher(input, 5);
    expect(actual).toBe(expected);
  });
});
