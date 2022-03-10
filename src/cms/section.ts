import path from 'path';

export function getSection({ file, astro: { html }, ...rest }: any): Section {
  const { name } = path.parse(file.pathname);
  const [sortOrder, id] = name.split('.')[0].split('-');

  return { id, sortOrder: parseInt(sortOrder, 10), html, ...rest };
}
