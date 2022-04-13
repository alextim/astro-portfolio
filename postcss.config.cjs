const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  plugins: {
    // 'postcss-import': {},
    // 'postcss-flexbugs-fixes': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.cjs'), // update this if your path differs!
    },
    autoprefixer: { flexbox: false }, // flexbox: 'no-2009'
    ...(isProduction ? { cssnano: { preset: 'default' } } : {}),
    /*
    ...(isProduction
      ? {
          purgecss: {
            content: ['./src/** /*.astro'],
            // function used to extract class names from the templates
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : { }),
    */
  },
};
