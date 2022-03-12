import Image from '@11ty/eleventy-img';

const commonPath = 'assets/images';

const defaultOptions: ImageOptions = {
  outputDir: `public/${commonPath}`,
  urlPath: `/${commonPath}`,
};

export function generateImage(src: string, options: ImageOptions): Record<string, ImageFormat[]> {
  // Merge with default settings
  const n = src.indexOf(commonPath);
  let opts;
  if (n !== -1) {
    const s = src.substring(n + commonPath.length);
    const a = s.split('/');
    a.pop();
    opts = {
      outputDir: `${defaultOptions.outputDir}${a.join('/')}`,
      urlPath: `${defaultOptions.urlPath}${a.join('/')}`,
    };
  }
  const settings = { ...(opts || defaultOptions), ...options };

  // Generate the image
  (async () => {
    await Image(src, settings);
  })();

  // Return the images info
  return Image.statsSync(src, settings);
}

// Please Eleventy, adopt TypeScript!
export interface ImageFormat {
  format: string;
  width: number;
  height: number;
  filename: string;
  outputPath: string;
  url: string;
  sourceType: string;
  srcset: string;
  size: number;
}

export interface ImageOptions {
  widths?: number[];
  formats?: string[];
  outputDir?: string;
  urlPath?: string;
  [key: string]: unknown;
}
