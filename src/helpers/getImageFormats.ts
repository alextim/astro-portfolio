const getImageFormats = (): string[] => {
  const imageFormats = process.env.PUBLIC_IMAGE_FORMATS || import.meta.env.PUBLIC_IMAGE_FORMATS;
  return imageFormats.split(',').map((s) => s.trim());
};

export default getImageFormats;
