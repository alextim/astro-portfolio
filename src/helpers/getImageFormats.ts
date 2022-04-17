const getImageFormats = (): string[] => {
  console.log('pocess:',process.env.PUBLIC_IMAGE_FORMATS);
  console.log('imp:', import.meta.env.PUBLIC_IMAGE_FORMATS);
  const imageFormats = import.meta.env.PUBLIC_IMAGE_FORMATS;
  const result = imageFormats.split(',').map((s) => s.trim());
  return result;
};

export default getImageFormats;
