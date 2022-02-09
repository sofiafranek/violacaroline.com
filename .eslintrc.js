module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react', 'react-hooks'],

  settings: {
    'import/resolver': 'root-import',
  },

  rules: {
    // No need to append .js extension to imports
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],

    'react/prop-types': [0],
    'global-require': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/sort-comp': [0],
    'react/prop-types': [0],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-one-expression-per-line': [0],
    'import/no-cycle': [1, { maxDepth: 1 }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-wrap-multilines': [0],
    'react/no-array-index-key': [0],

    'jsx-a11y/anchor-is-valid': [0],

    'import/prefer-default-export': [0],

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
  },
};
