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
  test("when passed an encoded string and no number, it should return the correct decoded string", () => {
    const input =
      "Olssv Dvysk. Aopz pz h alza av joljr dolaoly aol kljvkpun tlaovk ylabyuz aol jvyylja zaypun.";
    const expected =
      "Hello World. This is a test to check whether the decoding method returns the correct string.";
    const actual = decodeCaesarCipher(input);
    expect(actual).toBe(expected);
  });
  test("when passed an encoded string and no number, it should return an array of all possible correct strings if there are multiple potentially correct strings", () => {
    const input = "xy qbb";
    const expected = ["hi all", "ab tee"];
    const actual = decodeCaesarCipher(input);
    expect(actual).toEqual(expected);
  });
  test("when passed a string and a number, it should return the string shifted by the provided number", () => {
    const input = "Czggj rjmgy!";
    const expected = "Zwddg ogjdv!";
    const actual = decodeCaesarCipher(input, 3);
    expect(actual).toBe(expected);
  });
  test("when passed no number and a string that does not have a possible encoding solution, it should return an empty array", () => {
    const input = "lwozwzs";
    const expected = [];
    const actual = decodeCaesarCipher(input);
    expect(actual).toEqual(expected);
  });
});
