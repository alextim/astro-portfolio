import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      path: './tailwind.config.cjs',
      applyAstroPreset: false,
    }
  })],
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './static',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  buildOptions: {
    site: 'https://climbing-in-turkey-astro.netlify.app',
    // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: false // Generate sitemap (set to "false" to disable)

  },
  // devOptions: {
  //  hostname: 'localhost',  // The hostname to run the dev server on.
  //  port: 3000,             // The port to run the dev server on.
  //  trailingSlash: 'always',
  // },
  vite: {
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
      external: ['svgo', '@11ty/eleventy-img']
    },
    plugins: []
  }
});
