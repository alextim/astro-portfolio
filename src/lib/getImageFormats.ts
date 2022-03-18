const getImageFormats = (formats: string | undefined): string[] => {
  const s = formats || process.env.IMAGE_FORMATS || 'webp,jpg';
  return s.split(',').map((s) => s.trim());
};

export default getImageFormats;
