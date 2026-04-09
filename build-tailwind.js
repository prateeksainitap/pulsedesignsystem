// Generates a Tailwind preset from the light tokens. Run after build:tokens.
import fs from 'node:fs';

const T = JSON.parse(fs.readFileSync('tokens/tokens.json', 'utf8'));

const map = (group, transform = (v) => v) => {
  const out = {};
  const walk = (node, prefix = []) => {
    for (const [k, v] of Object.entries(node || {})) {
      if (v && typeof v === 'object' && 'value' in v) out[[...prefix, k].join('-')] = transform(v.value);
      else if (v && typeof v === 'object') walk(v, [...prefix, k]);
    }
  };
  walk(group);
  return out;
};

const px = (v) => (typeof v === 'number' ? `${v}px` : v);

// Flatten color primitives + semantic into a single palette keyed by path.
const colors = { ...map(T.color), ...map(T.surface), ...map(T.text), ...map(T.border), ...map(T.icon), ...map(T.primary), ...map(T.accent), ...map(T.status) };

const spacing = map(T.space, px);
const borderRadius = map(T.radius, (v) => (v === undefined ? undefined : px(v)));
const fontWeight = map(T.font?.weight ?? {});
const fontFamily = map(T.font?.family ?? {});
const fontSize = map(T.font?.size ?? {}, px);
const lineHeight = map(T.font?.lineHeight ?? {}, px);
const opacity = map(T.opacity);
const zIndex = map(T.zIndex);

const preset = {
  theme: { extend: { colors, spacing, borderRadius, fontWeight, fontFamily, fontSize, lineHeight, opacity, zIndex } },
};

fs.mkdirSync('build/tailwind', { recursive: true });
fs.writeFileSync(
  'build/tailwind/preset.cjs',
  `// Auto-generated from tokens — do not edit.\nmodule.exports = ${JSON.stringify(preset, null, 2)};\n`
);
console.log(`✔ tailwind preset (${Object.keys(colors).length} colors, ${Object.keys(spacing).length} spacing)`);
