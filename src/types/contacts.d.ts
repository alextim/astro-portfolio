type OpeningHoursRow = [string, Time, Time];
type OpeningHours = OpeningHoursRow[];
type VoiceType = 'skype' | 'whatsapp' | 'telegram' | 'viber';
type Voice = Record<VoiceType, string>;
type PriceRange = '$' | '$$' | '$$$' | '$$$$';
type OrganizationType = 'LocalBusiness' | 'ProfessionalService';

interface Contacts extends Record<string, geo | string | Phone[] | Voice | Email[] | OpeningHours | PriceRange | Date> {
  organizationType: OrganizationType;

  geo?: {
    latitude: number;
    longitude: number;
  };

  hasMap?: string;
  embedMap?: string;
  phones?: Phone[];
  voice?: Voice;

  fax?: string;

  emails: Email[];

  /*
  - ['mo-sa', '09:00', '18:00']
  - ["mo", "10:00", "18:00"]
  - ["tu", "10:00", "18:00"]
  - ["we", "10:00", "18:00"]
  - ["th", "10:00", "18:00"]
  - ["fr", "10:00", "18:00"]
  # day off
  - ['su', '00:00', '00:00']
  # 24/7
  - ["su", "00:00", "23:59"]
  */
  openingHours?: OpeningHours;

  priceRange?: PriceRange;
  currenciesAccepted?: string;
  paymentAccepted?: string;

  foundingDate?: Date;
}
