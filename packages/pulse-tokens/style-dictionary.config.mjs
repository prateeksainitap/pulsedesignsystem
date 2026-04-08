import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

register(StyleDictionary);

StyleDictionary.registerTransformGroup({
  name: 'js/rn',
  transforms: [
    'ts/descriptionToComment',
    'ts/size/px',
    'ts/opacity',
    'ts/size/lineheight',
    'ts/typography/fontWeight',
    'ts/resolveMath',
    'ts/color/modifiers',
    'attribute/cti',
    'name/camel',
    'color/hex',
  ],
});

export default {
  source: ['../../tokens/**/*.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    js: {
      transformGroup: 'js/rn',
      buildPath: 'build/js/',
      files: [{ destination: 'tokens.esm.js', format: 'javascript/es6' }],
    },
    json: {
      transformGroup: 'js/rn',
      buildPath: 'build/json/',
      files: [{ destination: 'tokens.flat.json', format: 'json/flat' }],
    },
  },
};
