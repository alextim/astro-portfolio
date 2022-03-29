import getSlugFromFilePathname from './utils/getSlugFromFilePathname';

import { getBaseObject } from './base';

export function getPage({ file, ...rest }: AstroFetchedContentPage, locale?: string): Page {
  const slug = getSlugFromFilePathname(file?.pathname);
  return getBaseObject({ ...rest }, slug, locale);
}
