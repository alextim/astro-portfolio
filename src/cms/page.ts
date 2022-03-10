import getSlugFromFilePathname from './utils/getSlugFromFilePathname';

import type { AstroFetchedContent } from './base';
import { getBaseObject } from './base';

export interface AstroFetchedContentPage extends AstroFetchedContent {}

export function getPage({ file, ...rest }: AstroFetchedContentPage, locale?: string): Page {
  const slug = getSlugFromFilePathname(file?.pathname);
  return getBaseObject({ ...rest }, slug, locale);
}
