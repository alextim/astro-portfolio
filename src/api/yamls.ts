import getYaml from './utils/getYaml';

export async function fetchContacts(): Promise<Contacts> {
  const result = await getYaml('content/data/contacts.yaml');
  return result as Promise<Contacts>;
}

export async function fetchSocialLinks(locale: string): Promise<SocialLinks> {
  const result = await getYaml(`content/data/locales/social-links/social-links.${locale}.yaml`);
  return result as Promise<SocialLinks>;
}

export async function fetchAddress(locale: string): Promise<Address> {
  const result = await getYaml(`content/data/locales/address/address.${locale}.yaml`);
  return result as Promise<Address>;
}
