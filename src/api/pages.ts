import { AstroFetchedContentPage, getPage } from '../cms/page';
import fetchContent from './utils/fetchContent';

async function fetchPageByPath(path: string, locale: string) {
  if (!path) {
    throw new Error('path is required parameter');
  }
  const result = await fetchContent(`./content/pages/${path}.${locale}.md`);
  if (!result || result.length === 0) {
    return null;
  }
  return getPage(result[0] as AstroFetchedContentPage, locale);
}

export const fetchHome = (locale: string) => fetchPageByPath('home', locale);
