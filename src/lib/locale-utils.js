const KEY_NAME = 'locale';

export function getLocale(availableLocales){
  let methods = [
    getSavedLocale,
    getLocaleByBrowser
  ];
  let locale;

  methods.some((method) => {
    const preferredLocales = method();

    if (!preferredLocales) {
      return false;
    }

    const match = preferredLocales.find((preferredLocale) => {
      return availableLocales.indexOf(preferredLocale) !== -1;
    });

    if (!match) {
      return false;
    }

    locale = match;
    return true;
  });

  return locale;
}

function getSavedLocale() {
  let { localStorage } = window;
  let locale;

  // test browser support
  if (!localStorage) {
    return;
  }

  locale = localStorage.getItem(KEY_NAME);

  if (!locale) {
    return;
  }

  return [locale];
}

export function saveLocale(locale) {
  let { localStorage } = window;

  // test browser support
  if (!localStorage) {
    return;
  }

  localStorage.setItem(KEY_NAME, locale);
}


function getLocaleByBrowser() {
  let languages;
  let { navigator } = window;
  let primaryLanguage;

  if (Array.isArray(navigator.languages)) {
    // Prefer experimental NavigatorLanguage.languages property if available.
    // NavigatorLanguage.languages returns an array of language codes ordered by preference.
    // Need to clone returned array cause otherwise Safari 10.1 throws an
    // "Attempted to assign to readonly property" error.
    languages = navigator.languages.slice(0);
  } else if (navigator.language) {
    // navigator.language should be available in most browsers
    // but only returns most prefered language
    languages = [navigator.language];
  } else {
    return;
  }

  if (languages.length === 1) {
    // add primary language if the only available one is a combined language code
    primaryLanguage = languages[0].split('-')[0];
    if (primaryLanguage !== languages[0]) {
      languages.push(primaryLanguage);
    }
  }

  // normalize all language codes to lower case
  languages = languages.map((language) => {
    return language.toLowerCase();
  });

  return languages;
}
