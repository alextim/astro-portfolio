import path from 'path';

const getSlugFromFilePathname = (pathname: string | undefined): string => {
  if (!pathname) {
    throw new Error('pathname is required');
  }
  const { name, ext } = path.parse(pathname);
  if (!name) {
    throw new Error(`Wrong pathname ${pathname}.`);
  }
  if (ext.toLowerCase() !== '.md') {
    throw new Error(`Unsupported extension ${ext} in ${pathname}.`);
  }
  const [slug] = name.split('.');
  return slug === 'home' ? '/' : slug;
};

export default getSlugFromFilePathname;
