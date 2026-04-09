import React from 'react';

/**
 * Stat Card — from WeightEasy Figma "Stat Card" (8441:44797).
 * Variants: Size L (328×249) | M (156×249).
 *
 * Shell: radius 24, padding 24, gap 12, surface fill, 1px border default.
 * Header row: small section header (icon + title 14 SemiBold #3d4966 + more-vertical)
 *             + 44×44 dark circle arrow button (L only).
 * Body: slot for stat content / chart.
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

export type StatCardSize = 'L' | 'M';

export interface StatCardProps {
  size?: StatCardSize;
  title?: string;
  titleIcon?: React.ReactNode;
  showCta?: boolean;
  onCtaClick?: () => void;
  children?: React.ReactNode;
}

const ArrowRightIcon = ({ color = '#fdfdfd' }: { color?: string }) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M5 12h13M12 5l7 7-7 7" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WeightIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 13c0-3 1-6 2-7M13 13c0-3-1-6-2-7" stroke="#15803d" strokeWidth={1.5} strokeLinecap="round" />
    <path d="M5 6h6" stroke="#15803d" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

export function StatCard({
  size = 'L',
  title = 'Weight',
  titleIcon,
  showCta = true,
  onCtaClick,
  children,
}: StatCardProps) {
  const isL = size === 'L';
  return (
    <div
      style={{
        width: isL ? 328 : 156,
        boxSizing: 'border-box',
        padding: 24,
        borderRadius: 24,
        background: '#fdfdfd',
        border: '1px solid var(--border-default, #dce1e8)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        fontFamily: FONT,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: 32,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
          {titleIcon ?? <WeightIcon />}
          <span
            style={{
              fontSize: 14,
              lineHeight: '20px',
              fontWeight: 600,
              color: 'var(--content-secondary, #3d4966)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </span>
        </div>
        {showCta && (
          <button
            type="button"
            onClick={onCtaClick}
            aria-label="Open details"
            style={{
              width: 44,
              height: 44,
              borderRadius: 9999,
              border: 0,
              background: 'var(--content-primary, #090e1c)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: 'inset 0 6px 15px rgba(255,255,255,0.08)',
            }}
          >
            <ArrowRightIcon />
          </button>
        )}
      </div>

      {/* Slot */}
      <div style={{ flex: 1, minHeight: 0 }}>{children}</div>
    </div>
  );
}
