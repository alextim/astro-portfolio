import path from 'path';
import seoConfig from '@/config/website';
import { localize } from '@/helpers/i18n-utils';

const { disableIndexing } = seoConfig;
export function getPage({ Content, /* url, */ file, frontmatter }: Record<string, any>): Page {
  const { title, headline, metaTitle, metaDescription, noindex, nofollow } = frontmatter;

  const { name } = path.parse(file);
  const [fileName, locale] = name.split('.');

  const slug = fileName === 'home' ? '/' : fileName;

  return {
    ...frontmatter,
    title,
    headline,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || headline,
    noindex: disableIndexing || noindex,
    nofollow: disableIndexing || nofollow,
    
    Content,

    slug,
    to: localize(slug, locale),
    locale,
  };
}
