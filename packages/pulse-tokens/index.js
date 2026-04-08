// Public API — re-exports generated tokens grouped under the same names
// the WeightEasy RN app already uses (Colors, Typography, Spacing, Radius, BorderWidth).
import tokens from './build/js/tokens.esm.js';

export const Colors = {
  ...tokens.color,
  // legacy flat aliases kept for back-compat
  surfaceDefault:   tokens.color.surface.default,
  surfaceContainer: tokens.color.surface.container,
  surfaceInverse:   tokens.color.surface.inverse,
  contentPrimary:   tokens.color.content.primary,
  contentSecondary: tokens.color.content.secondary,
  contentTertiary:  tokens.color.content.tertiary,
  contentInverse:   tokens.color.content.inverse,
  borderDefault:    tokens.color.border.default,
  white:            tokens.color.fixed.white,
  black:            tokens.color.fixed.black,
};

// Typography tokens ship as DTCG composite objects; splay them out for RN consumers.
const splayType = (bucket) => {
  const out = {};
  for (const [k, v] of Object.entries(bucket)) {
    out[k] = {
      fontSize:      v.fontSize,
      lineHeight:    v.lineHeight,
      fontWeight:    v.fontWeight,
      letterSpacing: v.letterSpacing,
      fontFamily:    v.fontFamily,
    };
  }
  return out;
};

export const Typography = {
  fontFamily: tokens.typography.fontFamily,
  display: splayType(tokens.typography.display),
  heading: splayType(tokens.typography.heading),
  title:   splayType(tokens.typography.title),
  body:    splayType(tokens.typography.body),
  label:   splayType(tokens.typography.label),
};

export const Spacing     = tokens.spacing;
export const Radius      = tokens.radius;
export const BorderWidth = tokens.borderWidth;

export default { Colors, Typography, Spacing, Radius, BorderWidth };
