module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["standard", "prettier"],
  plugins: ["jest"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
