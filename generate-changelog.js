// Diffs the current built tokens against the previous snapshot and prepends
// an entry to changelog.json. Covers every platform (default, dark,
// weighteasy-light, typography tablet/desktop) so theme- and breakpoint-only
// changes are captured.
import fs from 'node:fs';

const PLATFORMS = {
  default: 'build/json/tokens.json',
  dark: 'build/json/tokens.dark.json',
  'weighteasy-light': 'build/json/tokens.weighteasy-light.json',
  'typo.tablet': 'build/json/tokens.tablet.json',
  'typo.desktop': 'build/json/tokens.desktop.json',
};
const SNAPSHOT = '.tokens-snapshot.json';
const CHANGELOG = 'changelog.json';

function loadAll() {
  const out = {};
  for (const [tag, file] of Object.entries(PLATFORMS)) {
    if (!fs.existsSync(file)) continue;
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const [k, v] of Object.entries(json)) out[`${tag}::${k}`] = v;
  }
  return out;
}

function diff(prev, next) {
  const added = [], removed = [], changed = [];
  for (const k of Object.keys(next)) {
    if (!(k in prev)) added.push({ token: k, value: next[k] });
    else if (JSON.stringify(prev[k]) !== JSON.stringify(next[k]))
      changed.push({ token: k, from: prev[k], to: next[k] });
  }
  for (const k of Object.keys(prev)) if (!(k in next)) removed.push({ token: k, value: prev[k] });
  return { added, removed, changed };
}

const next = loadAll();
if (Object.keys(next).length === 0) {
  console.error('Run `npm run build:tokens` first — no built token files found.');
  process.exit(1);
}

const isFirstRun = !fs.existsSync(SNAPSHOT);
const prev = isFirstRun ? {} : JSON.parse(fs.readFileSync(SNAPSHOT, 'utf8'));
const delta = diff(prev, next);
const total = delta.added.length + delta.changed.length + delta.removed.length;

if (total === 0 && !isFirstRun) {
  console.log('[changelog] no token changes detected');
} else {
  const log = fs.existsSync(CHANGELOG) ? JSON.parse(fs.readFileSync(CHANGELOG, 'utf8')) : [];
  const entry = {
    date: new Date().toISOString().slice(0, 10),
    summary: isFirstRun
      ? `Initial snapshot — ${Object.keys(next).length} tokens across ${Object.keys(PLATFORMS).length} platforms`
      : `+${delta.added.length}  ~${delta.changed.length}  -${delta.removed.length}`,
    ...delta,
  };
  log.unshift(entry);
  fs.writeFileSync(CHANGELOG, JSON.stringify(log, null, 2));
  console.log(`[changelog] ${entry.summary}`);
}

fs.writeFileSync(SNAPSHOT, JSON.stringify(next, null, 2));
