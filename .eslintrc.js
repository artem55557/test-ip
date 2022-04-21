module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'comma-dangle': 0,
    'vue/max-attributes-per-line': 'off',
    'space-before-function-paren': 'off',
    'no-return-assign': 'off',
  },
}
