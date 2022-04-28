import siteUrl from './siteUrl.mjs';

const config: Record<string, string | boolean> = {
  siteUrl,
  siteLogo: `${siteUrl}/assets/logo.svg`,

  // webmanifest and head:meta name="theme-color"
  themeColor: '#3498DB',
  // webmanifest
  backgroundColor: '#2e3246',
  display: 'standalone',
} as const;

export default config;
