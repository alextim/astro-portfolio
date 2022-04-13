import { AstroFetchedContentPage, getPage } from '../cms/page';

let allRawPages;
async function load() {
  const fetchedPages = import.meta.glob('../../content/pages/*.??.md');
  const mappedPages = await Promise.all(
    Object.entries(fetchedPages).map(([pathname, f]) =>
      f().then((result) => ({
        ...result.frontmatter,
        file: { pathname },
      })),
    ),
  );
  return mappedPages;
}

async function fetchPageByPath(path: string, locale: string) {
  if (!path) {
    throw new Error('path is required parameter');
  }
  if (!locale) {
    throw new Error('locale is required parameter');
  }
  allRawPages = allRawPages || load();
  const result = await allRawPages;
  const o = result.find(({ file }) => file.pathname.indexOf(`${path}.${locale}`) !== -1);

  return getPage(o as AstroFetchedContentPage, locale);
}

export const fetchHome = (locale: string) => fetchPageByPath('home', locale);
