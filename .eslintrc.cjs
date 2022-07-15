/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: false,
    // experimentalObjectRestSpread: true,
    sourceType: 'module',
    ecmaFeatures: {
      // globalReturn: false,
      // jsx: true,
    },
    // tsconfigRootDir: './',
    project: './tsconfig.json',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    // 'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-base',
    'airbnb-typescript/base',
    // 'plugin:import/recommended',
    'plugin:prettier/recommended',
    'prettier',
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

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 0,

    '@typescript-eslint/no-empty-interface': [
      'warn',
      {
        allowSingleExtends: false,
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['tailwind.config.cjs', 'postcss.config.cjs', '.prettierrc.cjs', '.eslintrc.cjs', 'astro.config.mjs'],
  overrides: [
    // Configuration for Astro
    {
      files: ['**/*.astro'],
      plugins: ['@typescript-eslint', 'react', 'unused-imports', 'tailwindcss', 'simple-import-sort'],
      extends: ['plugin:tailwindcss/recommended', 'airbnb-typescript', 'plugin:prettier/recommended'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
          },
        ],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            mjs: 'never',
            ts: 'never',
            tsx: 'never',
            '': 'never'
          },
        ], // Avoid missing file extension errors in .astro files
        'import/no-unresolved': [
          'error',
          {
            ignore: ['@/*'],
          },
        ], // Disable no-unresolved rule for .astro files
        'react/jsx-filename-extension': [1, { extensions: ['.astro'] }], // Accept jsx in astro files
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'tailwindcss/classnames-order': [
          'warn',
          {
            officialSorting: true,
          },
        ], // Follow the same ordering as the official plugin `prettier-plugin-tailwindcss`
        'simple-import-sort/imports': 'error', // Import configuration for `eslint-plugin-simple-import-sort`
        'simple-import-sort/exports': 'error', // Export configuration for `eslint-plugin-simple-import-sort`
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      },
      globals: {
        Astro: 'readonly',
      },
    },
  ],
};
