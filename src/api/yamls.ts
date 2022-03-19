import getYaml from './utils/getYaml';

export async function fetchContacts(): Promise<Contacts> {
  return await getYaml('content/data/contacts.yaml');
}

export async function fetchSocialLinks(locale: string): Promise<SocialLinks> {
  return await getYaml(`content/data/locales/social-links/social-links.${locale}.yaml`);
}

export async function fetchTranslations(locale: string): Promise<Translations> {
  return await getYaml(`content/data/locales/translations/translations.${locale}.yaml`);
}

export async function fetchAddress(locale: string): Promise<Address> {
  return await getYaml(`content/data/locales/address/address.${locale}.yaml`);
}
