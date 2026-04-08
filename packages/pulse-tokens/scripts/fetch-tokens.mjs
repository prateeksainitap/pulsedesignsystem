// Pulls token JSON directly from the upstream Pulse Design System repo.
// No local clone, no submodule — the upstream URL is the source of truth.
//
// Configure via env vars (defaults point at prateeksainitap/pulsedesignsystem@main):
//   PULSE_UPSTREAM_OWNER   e.g. "prateeksainitap"
//   PULSE_UPSTREAM_REPO    e.g. "pulsedesignsystem"
//   PULSE_UPSTREAM_REF     e.g. "main" or a commit SHA
//   PULSE_UPSTREAM_PATH    e.g. "tokens"
//   PULSE_GITHUB_TOKEN     optional — raises API rate limit for private repos
//
// Usage:  node scripts/fetch-tokens.mjs
// Hooked via `prebuild` in package.json so `npm run build` always refreshes.

import { mkdir, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

const OWNER = process.env.PULSE_UPSTREAM_OWNER || 'prateeksainitap';
const REPO  = process.env.PULSE_UPSTREAM_REPO  || 'pulsedesignsystem';
const REF   = process.env.PULSE_UPSTREAM_REF   || 'main';
const PATH_ = process.env.PULSE_UPSTREAM_PATH  || 'tokens';
const TOKEN = process.env.PULSE_GITHUB_TOKEN   || process.env.GITHUB_TOKEN;

const OUT_DIR = new URL('../tokens/', import.meta.url).pathname;

const headers = {
  'Accept': 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

async function gh(path) {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${REF}`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`GitHub API ${res.status} ${res.statusText} — ${url}`);
  return res.json();
}

async function fetchRaw(downloadUrl) {
  const res = await fetch(downloadUrl, { headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {} });
  if (!res.ok) throw new Error(`Raw fetch ${res.status} ${res.statusText} — ${downloadUrl}`);
  return res.text();
}

async function main() {
  console.log(`⇣ Pulling ${OWNER}/${REPO}@${REF}:${PATH_}/`);

  // Wipe existing tokens/ so deleted upstream files don't linger.
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const entries = await gh(PATH_);
  if (!Array.isArray(entries)) throw new Error(`Unexpected response shape for ${PATH_}`);

  const jsonFiles = entries.filter((e) => e.type === 'file' && e.name.endsWith('.json'));
  console.log(`  found ${jsonFiles.length} JSON files`);

  for (const f of jsonFiles) {
    const body = await fetchRaw(f.download_url);
    // Sanity check — must parse as JSON.
    JSON.parse(body);
    await writeFile(join(OUT_DIR, f.name), body);
    console.log(`  ✓ ${f.name}`);
  }

  console.log(`✓ Synced ${jsonFiles.length} token files to ./tokens/`);
}

main().catch((err) => {
  console.error('✗ Token sync failed:', err.message);
  process.exit(1);
});
