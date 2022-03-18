const path = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.js'), // update this if your path differs!
    },
    // 'postcss-import': {},
    // 'postcss-flexbugs-fixes': {},
    // 'tailwindcss/nesting': {},
    autoprefixer: { flexbox: false }, // flexbox: 'no-2009'
    ...(process.env.NODE_ENV === 'production' ? { cssnano: { preset: 'default' } } : {}),
  },
};
