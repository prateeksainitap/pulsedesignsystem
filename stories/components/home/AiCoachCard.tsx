import React from 'react';
import { AnimatedCoachMascot } from '../AnimatedCoachMascot';

/**
 * AI Coach Card — from WeightEasy Figma "Card/AI Coach" (8696:50144).
 * 328×76, radius 24, padding 16/24, gap 20, radial gradient bg, subtle 1px border,
 * 2 drop shadows.
 *
 * Layout: row of [avatar 32×32] [title+subtitle stack, gap 0] [44×44 circular CTA button].
 * Prompt  (14, Regular, #3d4966 content-secondary)
 * Title   (16, Bold,    #181f3a content-primary)
 * CTA button: secondary-ish (#f2f5f9 fill, #beC5D2 border), arrow-right icon
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

export interface AiCoachCardProps {
  prompt?: string;
  title?: string;
  avatar?: React.ReactNode;
  onActionClick?: () => void;
}

const ArrowRightIcon = ({ size = 24, color = '#181f3a' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M5 12h13" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <path d="M12 5l7 7-7 7" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Default avatar — animated 3D coach gif
const CoachAvatar = () => (
  <AnimatedCoachMascot size={32} style={{ flexShrink: 0 }} />
);

export function AiCoachCard({
  prompt = 'Don\u2019t like your meals?',
  title = 'Talk to your Coach',
  avatar,
  onActionClick,
}: AiCoachCardProps) {
  return (
    <div
      style={{
        width: 328,
        boxSizing: 'border-box',
        padding: '16px 24px',
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        // Radial gradient approximating the Figma fill
        background:
          'radial-gradient(120% 100% at 0% 50%, #eef4ff 0%, #fdfdfd 50%, #f7eefb 100%)',
        border: '1px solid var(--border-default, #dce1e8)',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05), 0 2px 6px 2px rgba(0,0,0,0.08)',
        fontFamily: FONT,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {avatar ?? <CoachAvatar />}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 14,
              lineHeight: '20px',
              fontWeight: 400,
              color: 'var(--content-secondary, #3d4966)',
            }}
          >
            {prompt}
          </div>
          <div
            style={{
              fontSize: 16,
              lineHeight: '24px',
              fontWeight: 700,
              color: 'var(--content-primary, #181f3a)',
            }}
          >
            {title}
          </div>
        </div>
        <button
          type="button"
          aria-label="Open coach"
          onClick={onActionClick}
          style={{
            width: 44,
            height: 44,
            borderRadius: 9999,
            background: 'var(--surface-muted, #f2f5f9)',
            border: '1px solid var(--border-default, #beC5D2)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
            padding: 0,
          }}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
