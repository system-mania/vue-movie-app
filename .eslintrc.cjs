/* eslint-env node */
module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
    vue: true,
  },

  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
