module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
  ],
  // add your custom rules here
  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { semi: false }],
    "vue/html-self-closing": 0,
    "vue/html-indent": 0,
    "vue/singleline-html-element-content-newline": 0,
  },
  ignorePatterns: ["assets/bulma-generated/*"],
}
