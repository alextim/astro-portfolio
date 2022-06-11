import path from 'path';
import fg from 'fast-glob';
import getYaml from './getYaml';

const getYamlsByLocale = async (pattern: string) => {
  const entries = await fg(pattern, { dot: true });
  if (entries.length === 0) {
    console.warn(`getYamlsByLocale: no matches for "${pattern}"`);
    return undefined;
  }
  const result: Record<string, any> = {};
  /* eslint-disable-next-line no-restricted-syntax */
  for (const p of entries) {
    const { name } = path.parse(p);
    const [, locale] = name.split('.');
    /* eslint-disable-next-line no-await-in-loop */
    result[locale] = await getYaml(p);
  }
  return result;
};

export default getYamlsByLocale;
