const getImageFormats = (formats: string | undefined): string[] =>
  (formats || process.env.IMAGE_FORMATS || 'webp,jpg').split(',').map((s) => s.trim());

export default getImageFormats;
