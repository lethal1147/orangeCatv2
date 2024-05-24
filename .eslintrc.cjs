module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    ".eslintrc.cjs",
    "vite.config.ts",
    "postcss.config.js",
    "tailwind.config.js",
    "vite.config.js",
    "App.css",
    "index.css",
  ],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "function-paren-newline": "off",
    "@typescript-eslint/quotes": "off",
    "react/jsx-filename-extension": [2, { extensions: [".ts", ".tsx"] }],
    "tailwindcss/classnames-order": "off",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "tailwindcss/classnames-order": "warn",
    "react-hooks/rules-of-hooks": "warn",
    semi: "off",
    quotes: ["error", "double"],
    "func-names": "off",
    "import/no-unresolved": "off",
    "no-noninteractive-element-to-interactive-role": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "react/require-default-props": "off",
    indent: "off",
    "@typescript-eslint/indent": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": 0,
    "linebreak-style": "off",
    "react/jsx-curly-newline": 0,
    "implicit-arrow-linebreak": 0,
    "operator-linebreak": 0,
    "no-plusplus": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
