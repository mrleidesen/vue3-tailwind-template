/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
