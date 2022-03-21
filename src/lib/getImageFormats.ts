// import { loadEnv } from 'vite';

// formats: string | undefined
const getImageFormats = (): string[] => {
  // const mode = import.meta.env.MODE;
  // const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // PUBLIC_
  const imageFormats = process.env.PUBLIC_IMAGE_FORMATS || import.meta.env.PUBLIC_IMAGE_FORMATS;
  return imageFormats.split(',').map((s) => s.trim());
};

export default getImageFormats;
