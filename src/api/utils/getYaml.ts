import yaml from 'js-yaml';
/*
import { fileURLToPath } from 'url';1
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
*/

import path from 'path';
import { promises as fs } from 'fs';

async function getYaml(fileName: string) {
  const pathname = path.join(process.cwd(), fileName);
  try {
    const data = await fs.readFile(pathname, 'utf8');
    return yaml.load(data);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default getYaml;
