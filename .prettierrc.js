const prettierPluginAstro = require.resolve('prettier-plugin-astro');
const prettierPluginTailwindcss = require('prettier-plugin-tailwindcss');

/** @type {import("@types/prettier").Options */
module.exports = {
  // Trailing commas help with git merging and conflict resolution
  trailingComma: 'all',
  // Why include an unnecessary character at the end of every line? Break the habit (automatically)!
  semi: true,
  singleQuote: true,
  printWidth: 140,
  endOfLine: 'auto',
  plugins: [prettierPluginAstro, prettierPluginTailwindcss],
  astroAllowShorthand: false,
  overrides: [
    {
      files: '**/*.astro',
      options: { parser: 'astro' },
    },
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' },
    },
    {
      files: ['*.json', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
  ],

  tailwindConfig: './tailwind.config.cjs',
};
