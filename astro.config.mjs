// @ts-check

/** @type {import('astro')} */
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

// @ts-ignore
import { astroImageTools } from 'astro-imagetools';

import siteUrl from './src/config/siteUrl.mjs';
import seoConfig from './src/config/seo.config.mjs';
import webmanifestConfig from './src/config/webmanifest.config.mjs';

// https://astro.build/config
export default defineConfig({
  // root: '.',
  // srcDir: './src',
  // publicDir: './public',
  // outDir: './dist',
  site: siteUrl,
  // base: '/',
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
    astroImageTools,
    tailwind({ config: { applyBaseStyles: false } }),
    robotsTxt({
      sitemap: false,
      policy: [
        {
          userAgent: '*',
          disallow: seoConfig.disableIndexing ? '/' : '',
        },
      ],
    }),
    webmanifest(webmanifestConfig),
  ],
  vite: {
    /**
     * Due to an issue in the current version of Vite used by Astro, you need to add the following to your astro project config file:
     *
     */
    ssr: {
      external: ['svgo'],
    },
  },
});
