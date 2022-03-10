import { getSection } from '../cms/section';
import fetchContent from './utils/fetchContent';

async function fetchAllSections(locale: string): Promise<Section[]> {
  const result = await fetchContent(`./content/sections/*.${locale}.md`);
  return result ? result.map(getSection).sort((a, b) => a.sortOrder - b.sortOrder) : [];
}

export default fetchAllSections;
