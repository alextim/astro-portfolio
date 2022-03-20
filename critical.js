const crit = require('critical');

crit.generate({
  base: 'dist/',
  src: 'index.html',
  target: 'index.html',
  width: 1300,
  height: 900,
  inline: {
    strategy: 'swap',
  },
});
