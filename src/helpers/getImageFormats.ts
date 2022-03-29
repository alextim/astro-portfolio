const getImageFormats = (): string[] => {
  const imageFormats = process.env.PUBLIC_IMAGE_FORMATS || import.meta.env.PUBLIC_IMAGE_FORMATS;
  const result = imageFormats.split(',').map((s) => s.trim());
  console.log('getImageFormats', result);
  return result;
};

export default getImageFormats;
