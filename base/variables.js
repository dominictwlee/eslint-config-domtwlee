module.exports = {
  rules: {
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^ignored',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
  },
};
