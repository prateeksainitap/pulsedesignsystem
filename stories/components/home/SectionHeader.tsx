import React from 'react';

/**
 * Section Header — from WeightEasy Figma "Section Header" (9461:67637).
 * Sizes: Small | Medium | Large. HasAction: None | Badge | Subtext | Link.
 *
 * Large/None: row 328×32, heading frame with optional 24px icon + title 24px Bold
 * (Noto Sans, color content-primary #181f3a), optional right 24px more-vertical icon.
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

export type SectionSize = 'Small' | 'Medium' | 'Large';
export type SectionAction = 'None' | 'Badge' | 'Subtext' | 'Link';

export interface SectionHeaderProps {
  size?: SectionSize;
  hasAction?: SectionAction;
  heading?: string;
  subtext?: string;
  linkLabel?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  badgeCount?: number;
  onLinkClick?: () => void;
}

const SIZE: Record<SectionSize, { titleFs: number; titleLh: number; weight: number; h: number; iconSize: number }> = {
  Large: { titleFs: 24, titleLh: 32, weight: 700, h: 32, iconSize: 24 },
  Medium: { titleFs: 18, titleLh: 26, weight: 700, h: 26, iconSize: 20 },
  Small: { titleFs: 16, titleLh: 20, weight: 600, h: 20, iconSize: 16 },
};

const SunIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="4" stroke="#181f3a" strokeWidth={1.5} />
    <g stroke="#181f3a" strokeWidth={1.5} strokeLinecap="round">
      <line x1="12" y1="3" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="21" />
      <line x1="3" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="21" y2="12" />
      <line x1="5.6" y1="5.6" x2="7" y2="7" />
      <line x1="17" y1="17" x2="18.4" y2="18.4" />
      <line x1="5.6" y1="18.4" x2="7" y2="17" />
      <line x1="17" y1="7" x2="18.4" y2="5.6" />
    </g>
  </svg>
);

const MoreVerticalIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="5" r="2" fill="#252e49" />
    <circle cx="12" cy="12" r="2" fill="#252e49" />
    <circle cx="12" cy="19" r="2" fill="#252e49" />
  </svg>
);

export function SectionHeader({
  size = 'Large',
  hasAction = 'None',
  heading = "Today's Tasks",
  subtext,
  linkLabel = 'See all',
  showLeftIcon = true,
  showRightIcon = false,
  leftIcon,
  rightIcon,
  badgeCount,
  onLinkClick,
}: SectionHeaderProps) {
  const s = SIZE[size];
  return (
    <div
      style={{
        width: 328,
        minHeight: s.h,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: FONT,
        gap: 8,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
        {showLeftIcon && (
          <span style={{ display: 'inline-flex', width: s.iconSize, height: s.iconSize }}>
            {leftIcon ?? <SunIcon size={s.iconSize} />}
          </span>
        )}
        <h2
          style={{
            margin: 0,
            padding: 0,
            fontSize: s.titleFs,
            lineHeight: `${s.titleLh}px`,
            fontWeight: s.weight,
            color: 'var(--content-primary, #181f3a)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {heading}
        </h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        {hasAction === 'Subtext' && subtext && (
          <span style={{ fontSize: 14, color: 'var(--content-secondary, #3d4966)' }}>{subtext}</span>
        )}
        {hasAction === 'Link' && (
          <button
            type="button"
            onClick={onLinkClick}
            style={{
              border: 0,
              background: 'transparent',
              color: 'var(--border-focus, #2563eb)',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: FONT,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            {linkLabel}
          </button>
        )}
        {hasAction === 'Badge' && badgeCount != null && (
          <span
            style={{
              minWidth: 18,
              height: 18,
              padding: '0 6px',
              borderRadius: 9999,
              background: 'var(--content-negative, #dc2626)',
              color: '#fdfdfd',
              fontSize: 11,
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {badgeCount}
          </span>
        )}
        {showRightIcon && (rightIcon ?? <MoreVerticalIcon size={s.iconSize} />)}
      </div>
    </div>
  );
}
