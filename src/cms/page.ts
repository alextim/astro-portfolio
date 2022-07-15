import seoConfig from '@/config/seo.config.mjs';
import getLocaleFromUrlPathname from '@/helpers/getLocaleFromUrlPathname';
import { getPurePathname } from '@/helpers/i18n-utils';

const { disableIndexing } = seoConfig;
export function getPage(
  { astro: { html }, title, headline, metaTitle, metaDescription, noindex, nofollow, ...rest }: Record<string, any>,
  pathname: string,
): Page {
  const locale = getLocaleFromUrlPathname(pathname);
  const slug = getPurePathname(pathname);
  return {
    ...rest,
    title,
    headline,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || headline,
    noindex: disableIndexing || noindex,
    nofollow: disableIndexing || nofollow,

    html,

    slug,
    to: pathname,
    locale,
  };
}
