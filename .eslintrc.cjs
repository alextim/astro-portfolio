module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    requireConfigFile: false,
    // experimentalObjectRestSpread: true,
    sourceType: 'module',
    /*
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    */
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-quotes': [2, 'prefer-double'],
    semi: ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-plusplus': 'off',
    'no-restricted-exports': 'off',

    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // 'import/no-unresolved': 'error',
    '@typescript-eslint/no-empty-interface': [
      'warn',
      {
        allowSingleExtends: false,
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': 'error',
  },
};