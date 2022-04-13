import path from 'path';

export function getSection({ frontmatter, file, Content }: Record<string, any>): Section {
  const { name } = path.parse(file);
  const [fileName, locale] = name.split('.');
  const [sortOrder, id] = fileName.split('-');

  return { id, ...frontmatter, sortOrder: parseInt(sortOrder, 10), locale, Content };
}
