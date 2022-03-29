const path = require('path');

module.exports = {
  plugins: {
    // 'postcss-import': {},
    // 'postcss-flexbugs-fixes': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.cjs'), // update this if your path differs!
    },
    autoprefixer: { flexbox: false }, // flexbox: 'no-2009'
    ...(process.env.NODE_ENV === 'production' ? { cssnano: { preset: 'default' } } : {}),
  },
};
