/**
 * Returns array of image formats from .env
 * It should be used only in .astro files
 *
 * @returns {Array<string>}
 */
const getImageFormats = () => {
  const imageFormats = import.meta.env.PUBLIC_IMAGE_FORMATS;
  const result = imageFormats.split(',').map((s) => s.trim());
  return result;
};

export default getImageFormats;
