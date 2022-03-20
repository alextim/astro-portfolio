import { getSection } from '../cms/section';

let allSections;
async function load() {
  if (allSections) {
    return allSections;
  }
  const fetchedSections = import.meta.glob('../../content/sections/*.??.md');
  allSections = await Promise.all(
    Object.entries(fetchedSections)
      .map(([pathname, f]) =>
        f().then((result) =>
          getSection({
            ...result.frontmatter,
            file: { pathname },
          }),
        ),
      )
      .sort((a, b) => a.sortOrder - b.sortOrder),
  );
  return allSections;
}

export async function fetchAllSections(locale: string): Promise<Section[]> {
  return (await load()).filter((section: Section) => section.locale === locale);
}

export async function fetchSection(id: string, locale: string): Promise<Section> {
  return (await load()).find((section: Section) => section.id === id && section.locale === locale);
}
