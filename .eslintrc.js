module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
  rules: {
    'import/perfer-default-exprot': ['off'],
  },
}
