import StyleDictionary from 'style-dictionary';

// --- Custom transforms ---------------------------------------------------
// Append "px" to numeric tokens whose path implies a pixel dimension.
const PX_PATH_PARTS = new Set([
  'space', 'spacing', 'radius', 'size', 'sizing', 'border', 'icon',
  'avatar', 'button', 'input', 'touch-target', 'lineHeight', 'blur',
  'offsetY', 'spreadRadius',
]);
// font/size and font/lineHeight should also be px
const PX_NAME_PREFIXES = ['font.size.', 'font.lineHeight.', 'typo.'];

StyleDictionary.registerTransform({
  name: 'pulse/size/px',
  type: 'value',
  filter: (token) => {
    if (token.type !== 'number') return false;
    const v = token.original?.value ?? token.value;
    if (typeof v !== 'number') return false;
    if (token.path.some((p) => PX_PATH_PARTS.has(p))) return true;
    const dotted = token.path.join('.');
    return PX_NAME_PREFIXES.some((p) => dotted.startsWith(p));
  },
  transform: (token) => `${token.original?.value ?? token.value}px`,
});

// Unitless: weight, opacity, z-index, motion.scale, spring, duration (ms)
StyleDictionary.registerTransform({
  name: 'pulse/duration/ms',
  type: 'value',
  filter: (token) =>
    token.type === 'number' && token.path[0] === 'motion' &&
    (token.path[1] === 'duration' || token.path[1] === 'delay'),
  transform: (token) => `${token.original?.value ?? token.value}ms`,
});

const cssGroup = ['attribute/cti', 'name/kebab', 'time/seconds', 'html/icon',
  'color/css', 'pulse/size/px', 'pulse/duration/ms', 'asset/url',
  'fontFamily/css', 'cubicBezier/css', 'strokeStyle/css/shorthand',
  'border/css/shorthand', 'typography/css/shorthand', 'transition/css/shorthand', 'shadow/css/shorthand'];
const jsGroup  = ['attribute/cti', 'name/pascal', 'size/rem', 'color/hex'];

async function build(name, sources, suffix = '', selector = ':root') {
  const sd = new StyleDictionary({
    source: sources,
    platforms: {
      css: {
        transforms: cssGroup,
        buildPath: 'build/css/',
        files: [{
          destination: `tokens${suffix}.css`,
          format: 'css/variables',
          options: { selector },
        }],
      },
      js: {
        transformGroup: 'js',
        buildPath: 'build/ts/',
        files: [{ destination: `tokens${suffix}.js`, format: 'javascript/es6' }],
      },
      json: {
        transformGroup: 'js',
        buildPath: 'build/json/',
        files: [{ destination: `tokens${suffix}.json`, format: 'json/flat' }],
      },
      rn: {
        // React Native: numbers stay numbers (no "px"), colors as hex.
        transforms: ['attribute/cti', 'name/camel', 'color/hex'],
        buildPath: 'build/rn/',
        files: [
          { destination: `theme${suffix}.js`, format: 'javascript/es6' },
          { destination: `theme${suffix}.d.ts`, format: 'typescript/es6-declarations' },
        ],
      },
    },
    log: { warnings: 'disabled', verbosity: 'silent' },
  });
  await sd.buildAllPlatforms();
  console.log(`✔ ${name}`);
}

await build('light',          ['tokens/tokens.json']);
await build('dark',           ['tokens/tokens.json', 'tokens/tokens.dark.json'],          '.dark',    '[data-theme="dark"]');
await build('weighteasy-light', ['tokens/tokens.json', 'tokens/tokens.weighteasy-light.json'], '.weighteasy-light', '[data-theme="weighteasy-light"]');
await build('typo.tablet',    ['tokens/tokens.json', 'tokens/tokens.typography.tablet.json'],  '.tablet',  '@media (min-width: 768px) :root');
await build('typo.desktop',   ['tokens/tokens.json', 'tokens/tokens.typography.desktop.json'], '.desktop', '@media (min-width: 1280px) :root');
