import React from 'react';

/**
 * Notification Badge — rebuilt from Figma Pulse "Badge" component set
 * (nodeId 2023:5861). Variants: Dot, Count-SM, Count-LG, Count-Max.
 *
 * Pulse Badge is a notification counter, NOT a status pill.
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, 'Segoe UI', sans-serif)";

// content/negative (12:667) and content/inverse (12:645)
const RED = 'var(--content-negative, #dc2626)';
const WHITE = 'var(--content-inverse, #fdfdfd)';

const baseShell: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 9999,
  background: RED,
  boxSizing: 'border-box',
};

const baseText: React.CSSProperties = {
  fontFamily: FONT,
  fontSize: 11,
  lineHeight: '14px',
  fontWeight: 500,
  color: WHITE,
  letterSpacing: 0,
};

export type BadgeType = 'Dot' | 'Count-SM' | 'Count-LG' | 'Count-Max';

export interface BadgeProps {
  type?: BadgeType;
  count?: number;
  max?: number;
}

export function Badge({ type, count, max = 99 }: BadgeProps) {
  let resolved: BadgeType = type ?? 'Dot';
  let text: string | null = null;

  if (count != null) {
    if (count <= 0) return null;
    if (count > max) {
      resolved = 'Count-Max';
      text = `${max}+`;
    } else if (count >= 10) {
      resolved = 'Count-LG';
      text = String(count);
    } else {
      resolved = 'Count-SM';
      text = String(count);
    }
  }

  if (resolved === 'Dot') {
    return <span style={{ ...baseShell, width: 8, height: 8 }} aria-label="notification" />;
  }

  const perType: Record<Exclude<BadgeType, 'Dot'>, React.CSSProperties> = {
    'Count-SM': { width: 18, height: 18, padding: '2px 0' },
    'Count-LG': { minWidth: 25, height: 18, padding: '2px 6px' },
    'Count-Max': { minWidth: 30, height: 18, padding: '2px 6px' },
  };

  const display = text ?? (resolved === 'Count-Max' ? '99+' : resolved === 'Count-LG' ? '12' : '3');

  return (
    <span style={{ ...baseShell, ...perType[resolved] }} aria-label={`${display} notifications`}>
      <span style={baseText}>{display}</span>
    </span>
  );
}
