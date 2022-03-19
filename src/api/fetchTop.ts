import { getSection } from '../cms/section';

let allTops;
async function load() {
  const fetchedTops = import.meta.glob('../../content/top/top.??.md');
  const mappedTops = await Promise.all(Object.entries(fetchedTops).map(([pathname, f]) =>
    f().then((result) => getSection({
      ...result.frontmatter,
      file: { pathname },
    }))));
  return mappedTops;
}

async function fetchTop(locale: string): Promise<Section> {
  allTops = allTops || load();
  return (await allTops).find((section: Section) => section.locale === locale);
}

export default fetchTop;
