import fg from 'fast-glob';
import getYaml from './utils/getYaml';
import path from 'path';

let contacts: any;
export async function fetchContacts(): Promise<Contacts> {
  return contacts || (contacts = await getYaml('content/data/contacts.yaml'));
}


const getObj = async (pattern: string) => {
  const entries = await fg(pattern, { dot: true });
  if (entries.length === 0) {
    return undefined;
  }
  const result: Record<string, any> = {};
  for (const p of entries) {
    const { name } = path.parse(p);
    const [,locale] = name.split('.');
    result[locale] = await getYaml(p);
  }
  return result;
};

let allSocialLinks: any;
export async function fetchSocialLinks(locale: string): Promise<SocialLinks | undefined>  {
  if (!allSocialLinks) {
    allSocialLinks = await getObj('content/data/locales/social-links/social-links.??.yaml');
  }
  return allSocialLinks && allSocialLinks[locale];
}

let allAddress: any;
export async function fetchAddress(locale: string): Promise<Address | undefined> {
  if (!allAddress) {
    allAddress = await getObj('content/data/locales/address/address.??.yaml');
  }
  return allAddress && allAddress[locale];
}
