module.exports = {
  plugins: ['import'],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
  },
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-cycle': 'warn',
    'import/no-self-import': 'error',

    'import/first': 'error',
    'import/no-absolute-path': 'error',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'global-require': 'off',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-restricted-paths': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-unused-modules': 'off',

    'import/extensions': 'error',
    'import/newline-after-import': 'error',
    'import/no-named-as-default': 'error',
    'import/no-amd': 'error',
    'import/no-commonjs': 'off',
    'import/no-named-default': 'error',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', ['external', 'internal'], 'parent', ['sibling', 'index']],
      },
    ],
  },
};
