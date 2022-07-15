import i18n from '@/config/i18n.mjs';

import { isValidLocale } from './i18n-utils';

function getLocaleFromUrlPathname(pathname: string) {
  if (!pathname) {
    throw new Error('pathname required!');
  }
  if (pathname === '/') {
    return i18n.defaultLocale;
  }
  const [, locale = ''] = pathname.split('/');

  if (locale.length === 2) {
    if (!isValidLocale(locale)) {
      throw new Error(`Not valid locale ${locale} in ${pathname}`);
    }
    return locale;
  }

  return i18n.defaultLocale;
}

export default getLocaleFromUrlPathname;
