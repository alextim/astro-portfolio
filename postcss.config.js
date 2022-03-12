// postcss.config.cjs
const plugins = [
  //'postcss-import': {},
  //'postcss-flexbugs-fixes': {},
  //'tailwindcss/nesting': {},
  //tailwindcss: {},
  require('postcss-import'),
  require('postcss-flexbugs-fixes'),
  require('tailwindcss/nesting'),
  require('tailwindcss'),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('autoprefixer')({ flexbox: false })); // flexbox: 'no-2009'
  plugins.push(require('cssnano')({ preset: 'default' }));
}

module.exports = {
  plugins,
};
