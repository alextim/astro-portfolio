import astroConfig from '../../astro.config.mjs';

const siteUrl = astroConfig?.buildOptions?.site;

const config: Record<string, any> = {
  siteUrl,
  siteLogo: `${siteUrl}/assets/logo.svg`,

  /**
   * webmanifest
   *  */
  // meta name="theme-color"
  themeColor: '#3498DB',
  backgroundColor: '#2e3246',
} as const;

export default config;
