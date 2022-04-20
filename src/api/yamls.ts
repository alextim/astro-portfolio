import getYaml from './utils/getYaml';
import getYamlsByLocale from './utils/getYamlsByLocale';

let contacts: any;
export async function fetchContacts(): Promise<Contacts> {
  return contacts || (contacts = await getYaml('content/data/contacts.yaml'));
}

let allSocialLinks: any;
export async function fetchSocialLinks(locale: string): Promise<SocialLinks | undefined>  {
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
