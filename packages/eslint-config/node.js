module.exports = {
  extends: ["./index.js"],
  env: {
    node: true
  },
  rules: {
    "no-var": "error",
    "prefer-const": "error"
  }
};
