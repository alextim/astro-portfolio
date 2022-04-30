// @ts-check

/** @type {import('astro')} */
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import sitemap from './src/lib/siteMap.mjs';
import robotsTxt from 'astro-robots-txt';
// import sitemap from '@astrojs/sitemap';
import astroImagePlugin from 'astro-imagetools/plugin';

import siteUrl from './src/config/siteUrl.mjs';
import seoConfig from './src/config/seo.config.mjs';


// https://astro.build/config
export default defineConfig({
  // root: '.',
  // srcDir: './src',
  // publicDir: './public',
  // outDir: './dist',
  site: siteUrl,
  base: '/',
  // trailingSlash: 'always',
  // build: {},
  // devOptions: {
  //  hostname: 'localhost',  // The hostname to run the dev server on.
  //  port: 3000,             // The port to run the dev server on.
  //  trailingSlash: 'always',
  // },
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    // sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          disallow: seoConfig.disableIndexing ? '/' : '',
        },
      ],
    }),
  ],
  vite: {
    /**
     * Due to an issue in the current version of Vite used by Astro, you need to add the following to your astro project config file:
     *
     */
    ssr: {
      external: ['svgo'],
    },
    plugins: [astroImagePlugin],
  },
});
