module.exports = {
  rules: {
    'callback-return': 'off',
    'global-require': 'warn',
    'handle-callback-err': 'error',
    'no-mixed-requires': ['error', { grouping: true, allowCall: false }],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
  },
};
