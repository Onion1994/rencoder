const decodeCaesarCipher = require("./lib/decodeCaesarCipher");
const { encodeCaesarCipher } = require("./lib/encodeCaesarCipher");

const rencoder = {
  encodeCaesarCipher,
  decodeCaesarCipher,
};

module.exports = rencoder;
