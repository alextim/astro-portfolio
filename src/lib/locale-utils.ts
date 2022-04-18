const KEY_NAME = 'locale';

function getSavedLocale() {
  const { localStorage } = window;

  // test browser support
  if (!localStorage) {
    return false;
  }

  const locale = localStorage.getItem(KEY_NAME);

  if (!locale) {
    return false;
  }

  return [locale];
}

export function saveLocale(locale: string) {
  const { localStorage } = window;

  // test browser support
  if (!localStorage) {
    return;
  }

  localStorage.setItem(KEY_NAME, locale);
}

function getLocaleByBrowser() {
  let languages: string[];
  const { navigator } = window;

  if (Array.isArray(navigator.languages)) {
    // Prefer experimental NavigatorLanguage.languages property if available.
    // NavigatorLanguage.languages returns an array of language codes ordered by preference.
    // Need to clone returned array cause otherwise Safari 10.1 throws an
    // "Attempted to assign to readonly property" error.
    languages = navigator.languages.slice(0);
  } else if (navigator.language) {
    // navigator.language should be available in most browsers
    // but only returns most preferred language
    languages = [navigator.language];
  } else {
    return null;
  }

  if (languages.length === 1) {
    // add primary language if the only available one is a combined language code
    const [primaryLanguage] = languages[0].split('-');
    if (primaryLanguage !== languages[0]) {
      languages.push(primaryLanguage);
    }
  }

  // normalize all language codes to lower case
  languages = languages.map((language) => language.toLowerCase());

  return languages;
}

export function getLocale(availableLocales: string[]): string {
  const methods = [getSavedLocale, getLocaleByBrowser];
  let locale = '';

  methods.some((method) => {
    const preferredLocales = method();

    if (!preferredLocales) {
      return false;
    }

    const match = preferredLocales.find((preferredLocale) => availableLocales.indexOf(preferredLocale) !== -1);

    if (!match) {
      return false;
    }

    locale = match;
    return true;
  });

  return locale;
}
