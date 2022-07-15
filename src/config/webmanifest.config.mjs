import i18n from './i18n.mjs';

// @ts-ignore
function transform({ siteTitle, siteShortName, siteDescription, htmlLang }, locale = '') {
  const o = {};
  o.start_url = `/${locale}`;
  o.name = siteTitle;
  o.short_name = siteShortName;
  o.description = siteDescription;
  o.lang = htmlLang;
  return o;
}

const locales = {};
Object.entries(i18n.locales)
  .filter(([locale]) => locale !== i18n.defaultLocale)
  .forEach(([locale, src]) => {
    // @ts-ignore
    locales[locale] = transform(src, locale);
  });

const webmanifest = {
  // common source to generate a favicon and icons
  icon: 'src/assets/images/logomark-light.svg',

  // language specific (the default language)
  // @ts-ignore
  ...transform(i18n.locales[i18n.defaultLocale]),

  // shared
  theme_color: '#3367D6',
  background_color: '#3367D6',
  display: 'standalone',

  // other then default language
  locales,
};

export default webmanifest;
