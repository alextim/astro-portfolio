/**
 * webmanifest   - gatsby-config.js: htmlLang, siteTitle, siteDescription, siteShortName
 * SEO           - SeoBase.jsx:      htmlLang, siteTitle, siteDescription, ogLocale
 * datePublished - PostInfo.jsx:     formatLocale
 * Site Title    - Logo.jsx:         siteShortName
 */
const i18n: Required<I18n> = {
  locales: {
    ru: {
      htmlLang: 'ru',
      formatLocale: 'ru-UA',
      ogLocale: 'ru_UA',
      name: 'Russian',
      shortName: 'Rus',
      localName: 'Русский',
      shortLocalName: 'Рус',

      dateFormat: 'dd.MM.yyyy',

      siteTitle: 'Скалолазание в Турции',
      siteDescription:
        'Парк "Тарутинская степь" - одна из последних нетронутых степных жемчужин Европы, в которой как в древности обитают дикие куланы, лани, сайгаки и другие животные.',
      siteHeadline: 'Хед лайн sfsdcv ыма ывм ывм ывм ывм ыв м ым ым ы мы м ым м ы мs d',
      siteShortName: 'Скалолазание в Турции',
    },

    en: {
      htmlLang: 'en',
      formatLocale: 'en-GB',
      ogLocale: 'en_UA',
      name: 'English',
      shortName: 'Eng',
      localName: 'English',
      shortLocalName: 'Eng',

      dateFormat: 'dd/MM/yyyy',

      siteTitle: 'Climbing in Turkey',
      siteDescription:
        'Park “Tarutyno Steppe” is one of the last untouched steppe pearls of Europe, where wild kulans, fallow deers, saigas and other animals roam free like centuries ago.',
      siteHeadline: 'Headline dcdsc dsc sdc sdc sdc s dc sdc ds c c sdc d sc dc c s cs d',
      siteShortName: 'Climbing in Turkey',
    },

    tr: {
      htmlLang: 'tr',
      formatLocale: 'tr-TR',
      ogLocale: 'tr_TR',
      name: 'Turkish',
      shortName: 'Trk',
      localName: 'Türkce',
      shortLocalName: 'Trk',

      dateFormat: 'dd.MM.yyyy',

      siteTitle: "Türkiye'de Tırmanış",
      siteDescription:
        'Парк "Тарутинская степь" - одна из последних нетронутых степных жемчужин Европы, в которой как в древности обитают дикие куланы, лани, сайгаки и другие животные.',
      siteHeadline: 'Хед лайн sfsdcv ыма ывм ывм ывм ывм ыв м ым ым ы мы м ым м ы мs d',
      siteShortName: "Türkiye'de Tırmanış",
    },
  },
  defaultLocale: 'ru',
} as const;

export default i18n;
