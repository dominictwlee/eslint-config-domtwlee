module.exports = {
  extends: [
    'eslint:recommended',
    './possible-errors.js',
    './best-practices.js',
    './variables.js',
    './common-js.js',
    './es6.js',
  ],
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
