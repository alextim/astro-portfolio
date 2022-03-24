// tailwind.config.cjs
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  /*
  corePlugins: {

    // preflight: false,

    // We disable those because they add stuff to the CSS file even when unused
    filter: false,
    backdropFilter: false,
    ringWidth: false,
    ringColor: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    // boxShadow: false,
    // transform: false,
    touchAction: false,
    scrollSnapType: false,
    // borderColor: false, // If we don't disable this, Tailwind will apply a default border color to all the elements
    // borderOpacity: false,
    // textOpacity: false,

    // Things we might need in the future but disable for now as they also add stuff
    fontVariantNumeric: false,
  },
*/
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
        text: 'black',
        primary: '#f4623a',
        'primary-light': '#F68A6C',
        light: '#f8f9fa',
        muted: '#868e96',
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
      fontFamily: {
        body: ['Helvetica', 'Arial', 'sans-serif'],
        heading: ['Oswald', 'fallback-heading-font', 'sans-serif'],
      },
      rotate: {
        225: '225deg',
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
      });
    }),
    plugin(({ addBase }) => {
      addBase({
        // Small reset, preflight include a lot of stuff we don't use so let's make our own
        '*, ::before, ::after': {
          boxSizing: 'border-box',
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
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
      });
    }),
  ],
};
