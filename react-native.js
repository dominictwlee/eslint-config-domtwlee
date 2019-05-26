module.exports = {
  plugins: ['react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'off',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': 'error',
  },
};
