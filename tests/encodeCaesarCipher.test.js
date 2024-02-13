const encodeCaesarCipher = require("../lib/encodeCaesarCipher");

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
});
