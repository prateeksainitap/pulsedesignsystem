import React from 'react';

/**
 * Round Icon Button — from WeightEasy Figma "Round icon button" (2271:6403).
 * Variants: Type (Primary | Secondary | Tertiary) × Size (S 34 | M 48 | L 56) × State.
 *
 * Primary: filled dark (#181f3a) with white icon.
 * Secondary: surface fill with border.
 * Tertiary: transparent with subtle hover.
 * Disabled: opacity 0.4.
 */

export type RoundBtnType = 'Primary' | 'Secondary' | 'Tertiary';
export type RoundBtnSize = 'S' | 'M' | 'L';

export interface RoundIconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  kind?: RoundBtnType;
  size?: RoundBtnSize;
  icon?: React.ReactNode;
  ariaLabel?: string;
}

const SIZE_MAP: Record<RoundBtnSize, { box: number; icon: number }> = {
  S: { box: 34, icon: 16 },
  M: { box: 48, icon: 24 },
  L: { box: 56, icon: 24 },
};

const KIND_STYLE: Record<RoundBtnType, React.CSSProperties> = {
  Primary: {
    background: 'var(--border-focus, #2563eb)',
    color: '#ffffff',
    border: 0,
  },
  Secondary: {
    background: 'var(--surface-muted, #eff6ff)',
    color: 'var(--border-focus, #2563eb)',
    border: '1px solid rgba(37,99,235,0.25)',
  },
  Tertiary: {
    background: 'transparent',
    color: 'var(--content-tertiary, #818ba0)',
    border: 0,
  },
};

// Default arrow-right icon
const ArrowRightIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function RoundIconButton({
  kind = 'Primary',
  size = 'M',
  icon,
  disabled,
  ariaLabel = 'action',
  style,
  ...rest
}: RoundIconButtonProps) {
  const s = SIZE_MAP[size];
  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
      style={{
        width: s.box,
        height: s.box,
        borderRadius: 9999,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        padding: 0,
        ...KIND_STYLE[kind],
        ...style,
      }}
    >
      {icon ?? <ArrowRightIcon size={s.icon} />}
    </button>
  );
}
