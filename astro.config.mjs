import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroImagePlugin from 'astro-imagetools/plugin';

// https://astro.build/config
export default defineConfig({
  logLevel: 'info',

  // root: '.',

  // srcDir: './src',
  // publicDir: './public',
  // outDir: './dist',

  site: 'https://climbing-in-turkey-astro.netlify.app',
  base: '/',
  // trailingSlash: 'always',

  // build: {},
  // devOptions: {
  //  hostname: 'localhost',  // The hostname to run the dev server on.
  //  port: 3000,             // The port to run the dev server on.
  //  trailingSlash: 'always',
  // },
  integrations: [
    tailwind({
      config: {
        // path: './tailwind.config.cjs',
        // applyAstroPreset: false,
        applyBaseStyles: false,
      },
    }),
  ],
  vite: {
    /*
    optimizeDeps: {
      exclude: ['path', 'fs', 'os', 'perf_hooks', 'util', 'url', 'module', 'astro-imagetools'],
    },
*/
    /*
    optimizeDeps: {
      exclude: ['astro-eleventy-img'],
    },
    */
    /**
     * Due to an issue in the current version of Vite used by Astro, you need to add the following to your astro project config file:
     *
     */
    ssr: {
      external: ['svgo', '@11ty/eleventy-img'],
    },
    plugins: [astroImagePlugin],
  },
});
