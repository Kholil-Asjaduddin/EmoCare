const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

module.exports = [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: require("@babel/eslint-parser"),
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
      },
      globals: {
        browser: true,
        es2021: true,
        node: true
      }
    },
    plugins: {
      react: require("eslint-plugin-react")
    },
    rules: {
      // Atur aturan sesuai kebutuhanmu
    }
  },
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:react/recommended")
];