// tailwind.config.cjs
// eslint-disable-next-line @typescript-eslint/no-var-requires

const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],

  corePlugins: {
    preflight: false,

    // We disable those because they add stuff to the CSS file even when unused
    filter: false,
    backdropFilter: false,
    // ringWidth: false,
    // ringColor: false,
    // ringOffsetWidth: false,
    // ringOffsetColor: false,
    boxShadow: false,
    // transform: false,
    touchAction: false,
    scrollSnapType: false,
    // borderColor: false, // If we don't disable this, Tailwind will apply a default border color to all the elements
    borderOpacity: false,
    // textOpacity: false,

    // Things we might need in the future but disable for now as they also add stuff
    fontVariantNumeric: false,
  },

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        muted: colors.gray['700'],
        primary: '#f4623a',
        'primary-light': '#F68A6C',
        light: '#f8f9fa',
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
        brands: {
          skype: 'rgb(0, 175, 240)',
          viber: '#bcaec7',
          whatsapp: '#25d366',
          telegram: '#0088cc',
        },
      },
      spacing: {
        18: '4.5rem',
        header: '3.5rem',
        'header-xl': '4.5rem',
      },
      content: {
        empty: '""',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        p: {
          marginBottom: '1rem',
          lineHeight: 1.75,
        },
        'p:last-of-type': {
          marginBottom: 0,
        },
        a: {
          backgroundColor: 'transparent',
          color: theme('colors.primary'),
          textDecoration: 'none',
        },
        '.divider': {
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            bottom: '-1rem',
            left: '50%',
            height: '0.2rem',
            width: '3.25rem',
            backgroundColor: theme('colors.primary'),
            transform: 'translate(-50%)',
          },
        },
        '.at-a': {
          cursor: 'pointer',
          textDecoration: 'none',
        },
        '.at-a-undecorated': {
          ':active, :hover, :focus': {
            outline: 0,
            textDecoration: 'none',
          },
        },
        '.border-round': {
          border: 'solid 0.25rem',
          borderColor: theme('colors.gray.300'),
          borderRadius: '100%',
        },
      });
    }),
    plugin(({ addBase }) => {
      addBase({
        // Small reset, preflight include a lot of stuff we don't use so let's make our own
        '*, ::before, ::after': {
          boxSizing: 'border-box',
          borderWidth: 0,
          borderStyle: 'solid',
        },
        'html,body': {
          '-moz-osx-font-smoothing': 'grayscale',
          '-webkit-font-smoothing': 'antialiased',
          textRendering: 'optimizeSpeed',
          margin: 0,
          padding: 0,
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
        },
        html: {
          scrollBehavior: 'smooth',
          overflowY: 'auto',
        },
        'h1, h2, h3, p': {
          margin: 0,
        },
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
        'img, svg, video, canvas, audio, iframe, embed, object': {
          display: 'block',
          verticalAlign: 'middle',
        },
        'img, video': {
          maxWidth: '100%',
          height: 'auto',
        },
        'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre': {
          margin: 0,
        },
      });
    }),
  ],
};
