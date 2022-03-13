const getImageFormats = (): string[] => {
  const s = process.env.IMAGE_FORMATS || 'webp,jpg';
  return s.split(',').map((s) => s.trim());
}

export default getImageFormats;
