const { FlatCompat } = require("@eslint/eslintrc");
const path = require("path");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      ".swc/**",
      "public/**",
    ]
  },
  ...compat.extends("next/core-web-vitals"),
];

module.exports = eslintConfig;
