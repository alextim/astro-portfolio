import path from 'path';

export function getSection({ file, astro: { html }, ...rest }: any): Section {
  const { name } = path.parse(file.pathname);
  const [fileName, locale] = name.split('.');
  const [sortOrder, id] = fileName.split('-');

  return { id, sortOrder: parseInt(sortOrder, 10), html, locale, ...rest };
}
