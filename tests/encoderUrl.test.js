const encoderUrl = require("../lib/encoderUrl");

describe("encodeUrl", () => {
  test("should return an empty string if provided string is empty", () => {
    const input = "";
    const expected = "";
    const actual = encoderUrl(input);
    expect(actual).toBe(expected);
  });
});
