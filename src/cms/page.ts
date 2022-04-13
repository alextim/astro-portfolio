import path from 'path';
import { localize } from '@/helpers/i18n-utils';

export function getPage({ Content, /* url, */ file, frontmatter }: Record<string, any>): Page {
  const { title, headline, metaTitle, metaDescription } = frontmatter;

  const { name } = path.parse(file);
  const [fileName, locale] = name.split('.');

  const slug = fileName === 'home' ? '/' : fileName;

  return {
    ...frontmatter,
    title,
    headline,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || headline,
    Content,

    slug,
    to: localize(slug, locale),
    locale,
  };
}
