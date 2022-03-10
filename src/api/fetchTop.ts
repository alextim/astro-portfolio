import { getSection } from '../cms/section';
import fetchContent from './utils/fetchContent';

async function fetchTop(locale: string): Promise<Section[]> {
  const result = await fetchContent(`./content/top/top.${locale}.md`);
  return result ? result.map(getSection) : [];
}

export default fetchTop;
