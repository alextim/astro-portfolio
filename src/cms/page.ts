import seoConfig from '@/config/website';
import { getPurePathname } from '@/helpers/i18n-utils';
import getLocaleFromUrlPathname from '@/helpers/getLocaleFromUrlPathname';

const { disableIndexing } = seoConfig;
export function getPage({ astro: {html},  title, headline, metaTitle, metaDescription, noindex, nofollow, ...rest }: Record<string, any>, pathname: string): Page {
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
