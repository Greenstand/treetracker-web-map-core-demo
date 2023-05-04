module.exports = {
  root: true,
  extends: ["plugin:prettier/recommended", "@react-native-community"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "parser": "flow"
      }
    ]

  },
};
