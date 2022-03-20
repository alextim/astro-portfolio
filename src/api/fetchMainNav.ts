import { fetchAllSections } from './sections';

async function fetchMainNav(locale: string): Promise<Link[]> {
  const result = await fetchAllSections(locale);
  return result ? result.map(({ id, title }) => ({ to: `#${id}`, title })) : [];
}

export default fetchMainNav;
