type CountryCode = 'UA' | 'RU' | 'EN';

interface PostalAddress extends Record<string, string | string[] | CountryCode> {
  streetAddress?: string[];
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: CountryCode;
  addressCountryName: string;
}

type ContactType = 'sales';

interface ContactPoint extends Record<string, string | ContactType | Phone[] | Email[]> {
  name: string;
  description?: string;
  contactType: ContactType;
  contactTypeName?: string;
  phones?: Phone[];
  emails?: Email[];
}

interface Address extends Record<string, string | PostalAddress | ContactPoint[]> {
  name: string;
  alternateName?: string;
  legalName?: string;
  description?: string;
  postalAddress: PostalAddress;

  contactPoint?: ContactPoint[];
}
