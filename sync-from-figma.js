// Stub: in the real workflow you ask Claude (via the Figma MCP) to read your
// Figma variables and write tokens/tokens.json + tokens/tokens.dark.json +
// tokens/guidelines.json. This file exists so `npm run sync` has a hook.
//
// If you want to convert a Figma Variables REST API export, drop the JSON
// into ./figma-export.json and transform it here.

import fs from 'node:fs';

const EXPORT = 'figma-export.json';
if (!fs.existsSync(EXPORT)) {
  console.log(`[sync] No ${EXPORT} found — skipping. Ask Claude to "sync from Figma" instead.`);
  process.exit(0);
}

const raw = JSON.parse(fs.readFileSync(EXPORT, 'utf8'));
// TODO: map Figma variable collections → Style Dictionary token tree
console.log('[sync] TODO: implement Figma → tokens.json transform for', Object.keys(raw));
