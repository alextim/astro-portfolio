import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroImagePlugin from 'astro-imagetools/plugin';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        path: './tailwind.config.cjs',
      },
    }),
  ],
  buildOptions: {
    site: 'https://climbing-in-turkey-astro.netlify.app',
    // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: false, // Generate sitemap (set to "false" to disable)
  },
  // devOptions: {
  //  hostname: 'localhost',  // The hostname to run the dev server on.
  //  port: 3000,             // The port to run the dev server on.
  //  trailingSlash: 'always',
  // },
  vite: {
    optimizeDeps: {
      exclude: ['path', 'fs', 'os', 'perf_hooks', 'util', 'url', 'module', 'astro-imagetools'],
    },
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
