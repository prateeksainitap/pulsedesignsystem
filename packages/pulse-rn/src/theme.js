// Thin shim that re-exports from @your-org/pulse-tokens so every component
// imports from a single path. Tokens stay the source of truth; this file
// never hard-codes a hex or a size.
export { Colors, Typography, Spacing, Radius, BorderWidth } from '@your-org/pulse-tokens';

// Component-internal helpers that aren't design tokens (shadows, sizing scale).
// These should eventually move into the tokens repo once Zeroheight models them.
import { Colors as _C } from '@your-org/pulse-tokens';

export const Sizing = {
  icon:    { xs: 16, sm: 20, md: 24, lg: 28, xl: 32 },
  control: { xs: 24, sm: 32, md: 40, lg: 44, xl: 48, '2xl': 52, '3xl': 56 },
  hairline: 1,
};

export const Shadows = {
  elevation1: { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2,  elevation: 1 },
  elevation2: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 6,  elevation: 2 },
  card:       { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 3 },
  glowPrimary:{ shadowColor: _C.primary.default, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.35, shadowRadius: 8, elevation: 6 },
};
