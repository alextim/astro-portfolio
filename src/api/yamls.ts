import getYaml from './utils/getYaml';
import getYamlsByLocale from './utils/getYamlsByLocale';

let contacts: any;
export async function fetchContacts(): Promise<Contacts> {
  const result = contacts || (contacts = await getYaml('content/data/contacts.yaml'));
  return result;
}

let allSocialLinks: any;
export async function fetchSocialLinks(locale: string): Promise<SocialLinks | undefined> {
  if (!allSocialLinks) {
    allSocialLinks = await getYamlsByLocale('content/data/locales/social-links/social-links.??.yaml');
  }
  return allSocialLinks && allSocialLinks[locale];
}

let allAddress: any;
export async function fetchAddress(locale: string): Promise<Address | undefined> {
  if (!allAddress) {
    allAddress = await getYamlsByLocale('content/data/locales/address/address.??.yaml');
  }
  return allAddress && allAddress[locale];
}

let allTranslations: any;
export async function fetchTranslations(locale: string): Promise<Translations | undefined> {
  if (!allTranslations) {
    allTranslations = await getYamlsByLocale('content/data/locales/translations/translations.??.yaml');
  }
  return allTranslations && allTranslations[locale];
}
