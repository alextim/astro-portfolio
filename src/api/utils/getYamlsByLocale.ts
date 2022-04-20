import path from 'path';
import fg from 'fast-glob';
import getYaml from './getYaml';

const getYamlsByLocale = async (pattern: string) => {
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

export default getYamlsByLocale;
