import i18n from '@/config/i18n.mjs';

export const isValidLocale = (locale: string): boolean => {
  if (!locale) {
    return false;
  }

  if (locale.length !== 2) {
    return false;
  }

  return !!(i18n.locales as Record<string, any>)[locale];
};

export const isDefaultLocale = (locale: string): boolean => i18n.defaultLocale === locale;

export const localize = (s: string | string[], locale: string): string => {
  const a = Array.isArray(s) ? s : [s];
  const isRoot = a.length === 1 && a[0] === '/';

  if (isRoot) {
    if (isDefaultLocale(locale)) {
      return '/';
    }
    return ['', locale, ''].join('/');
  }

  if (isDefaultLocale(locale)) {
    return ['', ...a, ''].join('/');
  }

  return ['', locale, ...a, ''].join('/');
};

const addStartSlash = (s: string) => (s.startsWith('/') ? s : `/${s}`);
const addTrailingSlash = (s: string) => (s.endsWith('/') ? s : `${s}/`);
const addSlashes = (s: string) => addStartSlash(addTrailingSlash(s));

export const localizePath = (pathname: string, locale: string): string => {
  const samePage = pathname.indexOf('#') !== -1;
  if (isDefaultLocale(locale)) {
    return samePage ? addStartSlash(pathname) : addSlashes(pathname);
  }

  if (pathname === '/') {
    return `/${locale}/`;
  }

  return `/${locale}${samePage ? addStartSlash(pathname) : addSlashes(pathname)}`;
};

export const getPurePathname = (pathname: string): string => {
  if (pathname === '/') {
    return '/';
  }

  const a = pathname.split('/');
  if (!pathname.endsWith('/')) {
    a.push('');
  }

  const [, locale] = a;
  if (!locale) {
    throw new Error(`No locale in ${pathname}`);
  }

  const isLocalized = !!(i18n.locales as Record<string, any>)[locale];
  if (isLocalized) {
    const n = a.length;
    if (n < 4) {
      return '/';
    }
    return a
      .slice(0, a.length - 1)
      .slice(2)
      .join('/');
  }

  a.shift();
  a.pop();

  return a.join('/');
};
