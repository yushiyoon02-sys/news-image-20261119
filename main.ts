// news-image-20261119 entry program.
//
// The entry image for this bounty is a single JPEG that lives beside this
// file in the repository. When the grader runs this program, all it has to
// do is hand those exact bytes over as /output/entry.png (the gate reads
// the file type from the leading bytes, so a JPEG keeps the entry.png
// name). There is no network in the sandbox and nothing to install, so
// this uses only the Node standard library.
//
// For a local test run, point MAKEFUN_OUTPUT_DIR at a scratch folder:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, 'entry.jpg');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(sourceImage)) {
  throw new Error(`entry image not found next to main.ts: ${sourceImage}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourceImage, join(outputDir, 'entry.png'));
console.log(`wrote ${join(outputDir, 'entry.png')} from ${sourceImage}`);
