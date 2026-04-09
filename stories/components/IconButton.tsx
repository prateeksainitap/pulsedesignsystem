import React from 'react';

/**
 * Pulse IconButton — 1:1 mirror of Figma componentSet 3394:6306 ("Icon button").
 *
 * Same variant axes as Button (Theme × Type × Size × State), but circular
 * (width = height) and icon-only. Sizes match Button heights: L=56, M=48, S=44.
 * Icon size scales with the button.
 */

type Theme = 'tapHealth' | 'weightEasy';
type Type = 'primary' | 'secondary' | 'tertiary';
type Size = 'L' | 'M' | 'S';
type State = 'default' | 'pressed' | 'disabled';

const SIZES: Record<Size, { d: number; icon: number }> = {
  L: { d: 56, icon: 24 },
  M: { d: 48, icon: 20 },
  S: { d: 44, icon: 16 },
};

const WE_INNER_SHADOW_DEFAULT = 'inset 0 8px 20px 0 rgba(93, 106, 133, 1)';
const WE_INNER_SHADOW_PRESSED = 'inset 0 8px 20px 0 rgba(5, 9, 20, 1)';

function paint(theme: Theme, type: Type, state: State): React.CSSProperties {
  let s: React.CSSProperties = {};
  if (theme === 'tapHealth') {
    if (type === 'primary') {
      s = { background: 'var(--primary-default)', color: 'var(--primary-on)', border: '0' };
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
      s = { background: 'transparent', color: 'var(--primary-default)', border: '0' };
      if (state === 'pressed') {
        s.background = 'var(--interaction-pressed)';
        s.color = 'var(--primary-pressed)';
      }
    }
  } else {
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
      if (state === 'pressed') s.background = 'var(--interaction-pressed)';
    } else {
      s = { background: 'transparent', color: 'var(--content-primary)', border: '0' };
      if (state === 'pressed') s.background = 'var(--interaction-pressed)';
    }
  }
  if (state === 'disabled') s.opacity = 0.4;
  return s;
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  theme?: Theme;
  variant?: Type;
  size?: Size;
  state?: State;
  icon?: React.ReactNode;
  'aria-label': string;
}

export function IconButton({
  theme = 'tapHealth',
  variant = 'primary',
  size = 'M',
  state = 'default',
  icon,
  children,
  style,
  disabled,
  ...rest
}: IconButtonProps) {
  const effective: State = disabled ? 'disabled' : state;
  const s = SIZES[size];
  return (
    <button
      {...rest}
      disabled={disabled || effective === 'disabled'}
      style={{
        width: s.d,
        height: s.d,
        padding: 0,
        borderRadius: 9999,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        cursor: effective === 'disabled' ? 'not-allowed' : 'pointer',
        transition: 'background 150ms ease, color 150ms ease, opacity 150ms ease, box-shadow 150ms ease',
        ...paint(theme, variant, effective),
        ...style,
      }}
    >
      {icon ?? children ?? <ArrowRight size={s.icon} />}
    </button>
  );
}
