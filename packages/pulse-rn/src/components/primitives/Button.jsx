/**
 * Pulse Button
 * ----------------------------------------------------------------------------
 * Figma: Pulse / Components / Button (component set 2020:11226)
 * Variants modelled: Type × Size × State  (Theme is app-level, not a prop)
 *
 * Type:  Primary | Secondary | Tertiary
 * Size:  L (56) | M (48) | S (44)
 * State: Default | Pressed | Disabled
 *
 * Every visual value in this file comes from @pulse/tokens. No raw hex, no
 * raw px, no magic numbers for spacing or typography. Enforced by
 * packages/pulse-rn/.eslintrc.cjs (no-restricted-syntax).
 *
 * Theme switching (Tap Health vs WeightEasy) is handled at the app root by
 * choosing which @pulse/tokens output to import. The component is
 * intentionally theme-agnostic.
 */
import React, { useState, useCallback, useMemo } from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {
  // Shape
  RadiusFull,
  // Spacing
  Space4,
  Space8,
  Space12,
  Space16,
  // Heights: the Figma Button component renders at L=56, M=48, S=44.
  // Figma's own `size/button/*` variables say lg=48, md=40, sm=32 — which
  // is drift inside the Pulse design system (the Button component isn't
  // bound to size/button/*). Until those Figma variables are corrected,
  // we map to Space tokens which carry the correct numeric values.
  // See MIGRATION.md → "Figma cleanup tasks" for the fix-in-Figma TODO.
  Space44,
  Space48,
  Space56,
  // Typography
  FontFamily,
  TypoHeadingSmSize,
  TypoHeadingSmLineHeight,
  TypoHeadingSmWeight,
  TypoHeadingSmLetterSpacing,
  TypoTitleSmSize,
  TypoTitleSmLineHeight,
  TypoTitleSmWeight,
  TypoTitleSmLetterSpacing,
  // Semantic colors
  PrimaryDefault,
  PrimaryPressed,
  PrimaryContainer,
  ContentInverse,
  ContentTertiary,
  ContentDisabled,
  InteractionPressed,
  SurfaceContainer,
  BorderBrand,
  BorderDisabled,
  BorderThin,
} from '@pulse/tokens';

// ---------------------------------------------------------------------------
// Size table (Figma Pulse Button component set 2020:11226)
// L: typo/heading/sm (16/24, weight 700)
// M, S: typo/title/sm (14/20, weight 600)
// paddingX is always space/16; paddingY: L=16, M=12, S=12.
// itemSpacing (gap between icon and label): L=8, M=4, S=4.
// Height is fixed per size; width hugs content with paddingX applied.
// ---------------------------------------------------------------------------
const SIZE_SPEC = {
  L: {
    height: Space56,
    paddingX: Space16,
    paddingY: Space16,
    gap: Space8,
    label: {
      fontFamily: FontFamily,
      fontSize: TypoHeadingSmSize,
      lineHeight: TypoHeadingSmLineHeight,
      fontWeight: String(TypoHeadingSmWeight),
      letterSpacing: TypoHeadingSmLetterSpacing,
    },
  },
  M: {
    height: Space48,
    paddingX: Space16,
    paddingY: Space12,
    gap: Space4,
    label: {
      fontFamily: FontFamily,
      fontSize: TypoTitleSmSize,
      lineHeight: TypoTitleSmLineHeight,
      fontWeight: String(TypoTitleSmWeight),
      letterSpacing: TypoTitleSmLetterSpacing,
    },
  },
  S: {
    height: Space44,
    paddingX: Space16,
    paddingY: Space12,
    gap: Space4,
    label: {
      fontFamily: FontFamily,
      fontSize: TypoTitleSmSize,
      lineHeight: TypoTitleSmLineHeight,
      fontWeight: String(TypoTitleSmWeight),
      letterSpacing: TypoTitleSmLetterSpacing,
    },
  },
};

// ---------------------------------------------------------------------------
// Colour/border table, indexed by [type][state].
// Values come straight from the Figma spec extraction; every entry maps
// to a Pulse semantic colour token.
// Secondary is the only type that has a border (1px = BorderThin).
// Tertiary Default/Disabled are transparent; Pressed shows InteractionPressed.
// ---------------------------------------------------------------------------
const TRANSPARENT = 'transparent'; // RN-legal keyword, not a raw colour

const TYPE_STATE = {
  Primary: {
    Default:  { bg: PrimaryDefault,   fg: ContentInverse,  bc: TRANSPARENT,   bw: 0 },
    Pressed:  { bg: PrimaryPressed,   fg: ContentInverse,  bc: TRANSPARENT,   bw: 0 },
    Disabled: { bg: ContentDisabled,  fg: ContentTertiary, bc: TRANSPARENT,   bw: 0 },
  },
  Secondary: {
    Default:  { bg: PrimaryContainer,   fg: PrimaryDefault,  bc: BorderBrand,      bw: BorderThin },
    Pressed:  { bg: InteractionPressed, fg: PrimaryPressed,  bc: InteractionPressed, bw: BorderThin },
    Disabled: { bg: SurfaceContainer,   fg: ContentTertiary, bc: BorderDisabled,   bw: BorderThin },
  },
  Tertiary: {
    Default:  { bg: TRANSPARENT,        fg: PrimaryDefault,  bc: TRANSPARENT, bw: 0 },
    Pressed:  { bg: InteractionPressed, fg: PrimaryPressed,  bc: TRANSPARENT, bw: 0 },
    Disabled: { bg: TRANSPARENT,        fg: ContentTertiary, bc: TRANSPARENT, bw: 0 },
  },
};

function resolveState({ disabled, pressed }) {
  if (disabled) return 'Disabled';
  if (pressed) return 'Pressed';
  return 'Default';
}

/**
 * Button
 *
 * Props:
 *   label       — string, required (the button text)
 *   type        — 'Primary' | 'Secondary' | 'Tertiary' (default 'Primary')
 *   size        — 'L' | 'M' | 'S' (default 'L')
 *   disabled    — boolean
 *   leftIcon    — optional element rendered before the label
 *   rightIcon   — optional element rendered after the label
 *   onPress     — function
 *   accessibilityLabel — override; defaults to `label`
 *   testID      — passthrough
 *   style       — extra container style overrides (use sparingly)
 */
export function Button({
  label,
  type = 'Primary',
  size = 'L',
  disabled = false,
  leftIcon,
  rightIcon,
  onPress,
  accessibilityLabel,
  testID,
  style,
}) {
  const [pressed, setPressed] = useState(false);
  const onPressIn = useCallback(() => setPressed(true), []);
  const onPressOut = useCallback(() => setPressed(false), []);

  const stateKey = resolveState({ disabled, pressed });
  const palette = TYPE_STATE[type][stateKey];
  const sizing = SIZE_SPEC[size];

  const containerStyle = useMemo(
    () => [
      styles.base,
      {
        height: sizing.height,
        paddingHorizontal: sizing.paddingX,
        paddingVertical: sizing.paddingY,
        backgroundColor: palette.bg,
        borderColor: palette.bc,
        borderWidth: palette.bw,
      },
      style,
    ],
    [sizing, palette, style]
  );

  const labelStyle = useMemo(
    () => [sizing.label, { color: palette.fg }],
    [sizing, palette]
  );

  const gapStyle = { width: sizing.gap };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={accessibilityLabel ?? label}
      testID={testID}
      style={containerStyle}
    >
      {leftIcon ? (
        <>
          {leftIcon}
          <View style={gapStyle} />
        </>
      ) : null}
      <Text style={labelStyle} numberOfLines={1}>
        {label}
      </Text>
      {rightIcon ? (
        <>
          <View style={gapStyle} />
          {rightIcon}
        </>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RadiusFull,
    overflow: 'hidden',
  },
});

export default Button;
