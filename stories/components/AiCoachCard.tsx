import React from 'react';
import { AnimatedCoachMascot } from './AnimatedCoachMascot';
import { IconButton } from './IconButton';

/**
 * AI Coach card — 1:1 mirror of Figma node 9104:146118 ("Card/AI Coach").
 *
 * Frame: 328 × 76, radius 24, padding 16 / 24, itemSpacing 20.
 * Fill: radial gradient #f0fdfa → #fdfdfd.
 * Stroke: 1px radial gradient teal #5eeaD4 → blue #3b82f6 → violet #a78bfa.
 *
 * Inner container 280 × 44, gap 8:
 *   - Coach gif: 32 × 32 square
 *   - Text column:
 *       • "Don’t like your meals?" — Noto Sans 14/20 weight 400, color #3d4966
 *       • "Talk to your Coach"      — Noto Sans 16/24 weight 700, color #050914
 *   - Circular arrow button: 44 × 44, bg #f2f5f9, 1px border #bec5d2,
 *     content: 24px monotone arrow-right, stroke #050914.
 */

// Static Figma border — GRADIENT_RADIAL from node 9104:146118.
// Center at ~50%/50%, elongated ellipse (x-radius ≈ 155px, y-radius ≈ 19px
// on the 328×76 card), stops: teal #5eead4 → blue #3b82f6 → violet #a78bfa.
const BORDER_GRADIENT =
  'radial-gradient(ellipse 47% 25% at 50% 50%, #5eead4 0%, #3b82f6 50%, #a78bfa 100%)';

// The background is a wide, soft gradient painted onto a canvas 300% wide
// then panned left→right→left to give a subtle "flowing curtain" feel.
// The border stays completely static.
const SHIMMER_CSS = `
.ai-coach-card { position: relative; isolation: isolate; }
.ai-coach-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  pointer-events: none;
  background: ${BORDER_GRADIENT};
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
}
.ai-coach-card::before { z-index: 2; }
.ai-coach-curtain {
  position: absolute;
  inset: 1px;
  border-radius: 23px;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}
.ai-coach-curtain::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      105deg,
      #fdfdfd 0%,
      #f0fdfa 18%,
      #ecfeff 32%,
      #eef2ff 48%,
      #f5f3ff 64%,
      #f0fdfa 82%,
      #fdfdfd 100%
    );
  background-size: 300% 100%;
  background-position: 0% 50%;
  animation: aiCoachCurtain 9s ease-in-out infinite;
}
@keyframes aiCoachCurtain {
  0%   { background-position:   0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position:   0% 50%; }
}`;

function ArrowRight() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none"
         stroke="var(--content-primary)" strokeWidth={1.5}
         strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export interface AiCoachCardProps {
  eyebrow?: string;
  title?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function AiCoachCard({
  eyebrow = 'Don\u2019t like your meals?',
  title = 'Talk to your Coach',
  onClick,
  style,
}: AiCoachCardProps) {
  return (
    // Animated gradient border: outer element hosts a spinning conic gradient
    // (::before); inner element masks it to a 1px stroke + hosts the sheen sweep.
    <>
      <style>{SHIMMER_CSS}</style>
    <div
      className="ai-coach-card"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      style={{
        width: 328,
        height: 76,
        borderRadius: 24,
        boxSizing: 'border-box',
        cursor: onClick ? 'pointer' : undefined,
        fontFamily: "var(--font-family, 'Noto Sans', -apple-system, system-ui, sans-serif)",
        background: 'var(--surface-container)',
        ...style,
      }}
    >
      {/* Flowing curtain background — wide gradient panned horizontally. */}
      <div className="ai-coach-curtain" />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          borderRadius: 24,
          padding: '14px 22px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        {/* Inner container 280 × 44, gap 8 */}
        <div
          style={{
            flex: 1,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          {/* Animated coach mascot — 32 × 32 */}
          <AnimatedCoachMascot size={32} style={{ flex: '0 0 auto' }} />
          {/* Text column */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontSize: 'var(--typo-body-md-size, 14px)',
                lineHeight: 'var(--typo-body-md-line-height, 20px)',
                fontWeight: 400,
                color: 'var(--content-secondary)',
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                fontSize: 'var(--typo-title-md-size, 16px)',
                lineHeight: 'var(--typo-title-md-line-height, 24px)',
                fontWeight: 700,
                color: 'var(--content-primary)',
              }}
            >
              {title}
            </div>
          </div>
          {/* Pulse IconButton — weightEasy secondary, M (44×44 matches spec). */}
          <IconButton
            theme="weightEasy"
            variant="secondary"
            size="M"
            aria-label={title}
            icon={<ArrowRight />}
            style={{ flex: '0 0 auto' }}
          />
        </div>
      </div>
    </div>
    </>
  );
}
