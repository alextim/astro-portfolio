import Icon48 from '../assets/logo.png?w=48&format=png';
import Icon72 from '../assets/logo.png?w=72&format=png';
import Icon96 from '../assets/logo.png?w=96&format=png';
import Icon144 from '../assets/logo.png?w=144&format=png';
import Icon168 from '../assets/logo.png?w=168&format=png';
import Icon192 from '../assets/logo.png?w=192&format=png';

import config from '@/config/website';
import i18n from '@/config/i18n';

const { siteTitle: name, siteShortName: short_name, siteDescription: description } = i18n.locales[i18n.defaultLocale];
const { display, backgroundColor: background_color, themeColor: theme_color } = config;

const manifest = {
  name,
  short_name,
  description,

  display,
  background_color,
  theme_color,
  scope: '/',
  start_url: '/',

  prefer_related_applications: false,

  icons: [
    {
      src: Icon48,
      sizes: '48x48',
      type: 'image/png',
    },
    {
      src: Icon72,
      sizes: '72x72',
      type: 'image/png',
    },
    {
      src: Icon96,
      sizes: '96x96',
      type: 'image/png',
    },
    {
      src: Icon144,
      sizes: '144x144',
      type: 'image/png',
    },
    {
      src: Icon168,
      sizes: '168x168',
      type: 'image/png',
    },
    {
      src: Icon192,
      sizes: '192x192',
      type: 'image/png',
    },
  ],
};

export async function get() {
  return {
    body: JSON.stringify(manifest),
  };
}
