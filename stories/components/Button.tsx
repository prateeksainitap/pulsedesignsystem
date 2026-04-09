import React from 'react';

/**
 * Pulse Button — 1:1 mirror of Figma componentSet 2020:11226.
 *
 * Variant axes: Theme × Type × Size × State  (2 × 3 × 3 × 3 = 54 variants).
 *
 * CRITICAL: The Theme axis in Figma swaps **which semantic tokens are used**,
 * it is not just a data-theme value override. Tap Health Primary uses
 * `primary/default` + `primary/on`, while WeightEasy Primary uses
 * `surface/inverse` + `content/inverse` AND adds a 20px inner shadow. The
 * implementation below mirrors that by branching per theme.
 *
 * Sizes (exact Figma metrics):
 *   L: height 56, padX 16, padY 16, gap 8,  fontSize 16, lineHeight 24
 *   M: height 48, padX 16, padY 12, gap 4,  fontSize 14, lineHeight 20
 *   S: height 44, padX 16, padY 12, gap 4,  fontSize 12, lineHeight 16
 * Font: Noto Sans SemiBold (600). Fully rounded pill (radius 9999).
 */

type Theme = 'tapHealth' | 'weightEasy';
type Type = 'primary' | 'secondary' | 'tertiary';
type Size = 'L' | 'M' | 'S';
type State = 'default' | 'pressed' | 'disabled';

const SIZES: Record<Size, {
  height: number; padX: number; padY: number;
  font: number; lineHeight: number; gap: number;
}> = {
  L: { height: 56, padX: 16, padY: 16, font: 16, lineHeight: 24, gap: 8 },
  M: { height: 48, padX: 16, padY: 12, font: 14, lineHeight: 20, gap: 4 },
  S: { height: 44, padX: 16, padY: 12, font: 12, lineHeight: 16, gap: 4 },
};

// Inner shadow used by WeightEasy Primary variants.
// Figma: offset y=8, blur 20, spread 0, color ≈ neutral/600 (default) or
// neutral-950 (pressed). Applied as a box-shadow: inset.
const WE_INNER_SHADOW_DEFAULT = 'inset 0 8px 20px 0 rgba(93, 106, 133, 1)';
const WE_INNER_SHADOW_PRESSED = 'inset 0 8px 20px 0 rgba(5, 9, 20, 1)';

function paint(theme: Theme, type: Type, state: State): React.CSSProperties {
  let s: React.CSSProperties = {};

  // ─── Tap Health theme ──────────────────────────────────────────────
  if (theme === 'tapHealth') {
    if (type === 'primary') {
      s = {
        background: 'var(--primary-default)',
        color: 'var(--primary-on)',
        border: '0',
      };
      if (state === 'pressed') s.background = 'var(--primary-pressed)';
    } else if (type === 'secondary') {
      s = {
        background: 'var(--primary-container)',
        color: 'var(--primary-default)',
        border: '1px solid var(--border-brand)',
      };
      if (state === 'pressed') {
        s.background = 'var(--interaction-pressed)';
        s.color = 'var(--primary-pressed)';
      }
    } else {
      // tertiary
      s = { background: 'transparent', color: 'var(--primary-default)', border: '0' };
      if (state === 'pressed') {
        s.background = 'var(--interaction-pressed)';
        s.color = 'var(--primary-pressed)';
      }
    }
  }

  // ─── WeightEasy theme ──────────────────────────────────────────────
  else {
    if (type === 'primary') {
      s = {
        background: 'var(--surface-inverse)',
        color: 'var(--content-inverse)',
        border: '0',
        boxShadow: WE_INNER_SHADOW_DEFAULT,
      };
      if (state === 'pressed') {
        s.background = 'var(--primary-pressed)';
        s.boxShadow = WE_INNER_SHADOW_PRESSED;
      }
    } else if (type === 'secondary') {
      s = {
        background: 'var(--surface-default)',
        color: 'var(--content-primary)',
        border: '1px solid var(--border-strong)',
      };
      if (state === 'pressed') {
        s.background = 'var(--interaction-pressed)';
      }
    } else {
      // tertiary
      s = { background: 'transparent', color: 'var(--content-primary)', border: '0' };
      if (state === 'pressed') {
        s.background = 'var(--interaction-pressed)';
      }
    }
  }

  // Disabled: Figma applies motion/opacity/disabled = 0.4 to the whole frame.
  if (state === 'disabled') s.opacity = 0.4;

  return s;
}

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  theme?: Theme;
  variant?: Type;
  size?: Size;
  state?: State;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
}

export function Button({
  theme = 'tapHealth',
  variant = 'primary',
  size = 'M',
  state = 'default',
  leftIcon,
  rightIcon,
  label,
  children,
  style,
  disabled,
  ...rest
}: ButtonProps) {
  const effective: State = disabled ? 'disabled' : state;
  const s = SIZES[size];
  return (
    <button
      {...rest}
      disabled={disabled || effective === 'disabled'}
      style={{
        height: s.height,
        padding: `${s.padY}px ${s.padX}px`,
        borderRadius: 9999,
        fontFamily: "var(--font-family, 'Noto Sans', system-ui, sans-serif)",
        fontSize: s.font,
        fontWeight: 600,
        lineHeight: `${s.lineHeight}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        boxSizing: 'border-box',
        cursor: effective === 'disabled' ? 'not-allowed' : 'pointer',
        transition: 'background 150ms ease, color 150ms ease, opacity 150ms ease, box-shadow 150ms ease',
        ...paint(theme, variant, effective),
        ...style,
      }}
    >
      {leftIcon}
      {label ?? children}
      {rightIcon}
    </button>
  );
}
