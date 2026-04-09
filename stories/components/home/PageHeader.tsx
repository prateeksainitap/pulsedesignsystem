import React from 'react';

/**
 * Page Header — WeightEasy Figma "Page Header / Type=Home" (9898:80825).
 * 360×430, vertical, padding 48/16/16/16, gap 16.
 * Background = content/primary base + 3 radial gradients (teal-green, cyan,
 * muted teal) taken 1:1 from Figma fills. No hardcoded hex — all colours
 * flow through Pulse CSS variable tokens.
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

export interface PageHeaderProps {
  greeting?: string;
  day?: string;
  initials?: string;
  contextTip?: string;
  children?: React.ReactNode;
  chipLeft?: string;
  chipRight?: string;
}

const CoachGlyph = () => (
  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" aria-hidden>
    <circle cx="9" cy="9" r="9" fill="var(--primary-default)" />
    <circle cx="6.5" cy="8" r="1" fill="var(--content-inverse)" />
    <circle cx="11.5" cy="8" r="1" fill="var(--content-inverse)" />
  </svg>
);

export function PageHeader({
  greeting = 'Good Morning Manit!',
  day = 'Day 3 of Cycle',
  initials = 'MK',
  contextTip = 'Your appetite suppression is stable, and energy will be returning soon.',
  children,
  chipLeft = 'Ask Coach anything',
  chipRight = '\u201CBest foods for nausea?\u201D',
}: PageHeaderProps) {
  return (
    <div
      style={{
        width: 360,
        boxSizing: 'border-box',
        padding: '48px 16px 16px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-16)',
        // Figma fills (node 9898:80825): content/primary base + teal-green,
        // cyan, muted-teal radial gradients. Stops mirror Figma alpha stops.
        background:
          'radial-gradient(60% 45% at 32% 36%, var(--color-gradient-header-accent) 0%, var(--color-gradient-header-start) 55%, transparent 100%),' +
          'radial-gradient(70% 55% at 63% 59%, var(--color-gradient-header-cyan) 0%, var(--color-gradient-header-mid) 55%, transparent 100%),' +
          'var(--color-gradient-header-end)',
        fontFamily: FONT,
      }}
    >
      {/* Home Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', width: 328 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 12, lineHeight: '16px', fontWeight: 400, color: 'var(--content-inverse)' }}>
              {greeting}
            </span>
            <span style={{ fontSize: 20, lineHeight: '28px', fontWeight: 500, color: 'var(--content-inverse)' }}>
              {day}
            </span>
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 'var(--radius-full)',
              background: 'var(--surface-container)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-default)',
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {initials}
          </div>
        </div>
        <div style={{ fontSize: 16, lineHeight: '24px', fontWeight: 400, color: 'var(--content-inverse)' }}>
          {contextTip}
        </div>
      </div>

      {/* Action center slot */}
      <div style={{ width: 328 }}>{children}</div>
    </div>
  );
}
