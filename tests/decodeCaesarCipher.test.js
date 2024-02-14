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
  test("when passed an encoded string and no number, it should return an array of all possible decoding solutions", () => {
    const input = "Olssv Dvysk!";
    const expected = [
      "Nkrru Cuxrj!",
      "Mjqqt Btwqi!",
      "Lipps Asvph!",
      "Khoor Zruog!",
      "Jgnnq Yqtnf!",
      "Ifmmp Xpsme!",
      "Hello World!",
      "Gdkkn Vnqkc!",
      "Fcjjm Umpjb!",
      "Ebiil Tloia!",
      "Dahhk Sknhz!",
      "Czggj Rjmgy!",
      "Byffi Qilfx!",
      "Axeeh Phkew!",
      "Zwddg Ogjdv!",
      "Yvccf Nficu!",
      "Xubbe Mehbt!",
      "Wtaad Ldgas!",
      "Vszzc Kcfzr!",
      "Uryyb Jbeyq!",
      "Tqxxa Iadxp!",
      "Spwwz Hzcwo!",
      "Rovvy Gybvn!",
      "Qnuux Fxaum!",
      "Pmttw Ewztl!",
    ];
    const actual = decodeCaesarCipher(input);
    expect(actual).toEqual(expected);
  });
  test("when passed a string and a number, it should return the string shifted by the provided number", () => {
    const input = "Jgnnq Yqtnf!";
    const expected = "Hello World!";
    const actual = decodeCaesarCipher(input, 2);
    expect(actual).toBe(expected);
  });
});
