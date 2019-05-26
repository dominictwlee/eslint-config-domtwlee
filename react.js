module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 'off',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-typos': 'error',
    'react/no-this-in-sfc': 'error',
  },
};
