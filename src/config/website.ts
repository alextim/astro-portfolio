import astroConfig from '../../astro.config';

const siteUrl = astroConfig?.buildOptions?.site;

if (!siteUrl) {
  throw new Error('siteUrl is required');
}

const config: Record<string, string> = {
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
