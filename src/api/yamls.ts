import getYaml from './utils/getYaml';

export function fetchContacts(): Contacts {
  return getYaml('content/data/contacts.yaml');
}

export function fetchSocialLinks(locale: string): SocialLinks {
  return getYaml(`content/data/locales/social-links/social-links.${locale}.yaml`);
}

export function fetchTranslations(locale: string): Translations {
  return getYaml(`content/data/locales/translations/translations.${locale}.yaml`);
}

export function fetchAddress(locale: string): Address {
  return getYaml(`content/data/locales/address/address.${locale}.yaml`);
}
