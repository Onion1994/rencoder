const decodeCaesarCipher = require("../lib/decodeCaesarCipher");
describe("decodeCaesarCipher", () => {
  test("when passed an empty string and a number, it should return an empty string", () => {
    const input = "";
    const expected = "";
    const actual = decodeCaesarCipher(input, 5);
    expect(actual).toBe(expected);
  });
  test("when passed an empty string and no number, it should return an empty array", () => {
    const input = "";
    const expected = [];
    const actual = decodeCaesarCipher(input);
    expect(actual).toEqual(expected);
  });
  test("when passed an encoded string and no number, it should return an array with shifted strings that are most likely right, excluding all others", () => {
    const input = "Olssv Dvysk!";
    const expected = "Hello World!";
    const actual = decodeCaesarCipher(input);
    expect(actual).toContain(expected);
    expect(actual.length).toBeLessThan(25);
  });
  test("when passed a string and a number, it should return the string shifted by the provided number", () => {
    const input = "Jgnnq Yqtnf!";
    const expected = "Hello World!";
    const actual = decodeCaesarCipher(input, 2);
    expect(actual).toBe(expected);
  });
});
