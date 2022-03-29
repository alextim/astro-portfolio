import { generateImage, ImageOptions } from '@/astro-eleventy-img';

export const getSrcset = (imageFormat: any[]): string => imageFormat.map((entry) => entry.srcset).join(', ');

export const getMetadata = (src: string, opts: ImageOptions) => {
  const metadata = generateImage(src, opts);

  const lowsrc = metadata.jpeg[0];
  const highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return {
    metadata,

    lowsrc,
    highsrc,
  };
};
