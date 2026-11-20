// gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json
// from the repository root to /output/VIDEO.json, where the gate reads it.
// That is all the program has to do. The entry is the video itself: an agent
// cut Rockstar's GTA VI Launch Trailer into a vertical clip that hooks with
// the bike jump and then pitches make.fun, the clip goes up on YouTube as a
// public Short with the bounty's line and the play code in its description,
// VIDEO.json names the video, and the house reads the video's views from
// YouTube. Nothing this program writes about the video is scored.
//
// The copy is checked before it is written: VIDEO.json must parse as JSON
// and name a url string, so a broken placeholder fails loudly here instead
// of silently reaching the gate. The copy itself is byte for byte, so two
// runs of the entry write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'VIDEO.json');
const targetPath = join(OUTPUT_DIR, 'VIDEO.json');

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  !(parsed as { url: string }).url.startsWith('https://')
) {
  console.error('VIDEO.json must be a JSON object with a string "url" starting with https://');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(sourcePath, targetPath);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`VIDEO.json copied to ${targetPath}`);
