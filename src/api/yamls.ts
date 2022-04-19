import fg from 'fast-glob';
import getYaml from './utils/getYaml';

let contacts: Promise<Contacts>;
export async function fetchContacts(): Promise<Contacts> {
  if (contacts) {
    
  }
  // return contacts || (contacts = await getYaml('content/data/contacts.yaml'));
}

export async function fetchSocialLinks(locale: string): Promise<SocialLinks> {
  const entries = await fg(['content/data/locales/social-links/social-links.??.yaml'], { dot: true });
  console.log(entries);
  const result = await getYaml(`content/data/locales/social-links/social-links.${locale}.yaml`);
  return result as Promise<SocialLinks>;
}

export async function fetchAddress(locale: string): Promise<Address> {
  const result = await getYaml(`content/data/locales/address/address.${locale}.yaml`);
  return result as Promise<Address>;
}
