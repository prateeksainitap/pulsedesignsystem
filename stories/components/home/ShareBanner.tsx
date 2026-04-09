import React from 'react';
import thumbsUpPng from '../../assets/thumbs-up-3d.png';

/**
 * Share banner — WeightEasy Figma "Share banner" (8708:40384).
 * 360×264 frame, horizontal, padding 48/24/128/24, gap 8.
 *   Container: 207 wide, gap 8 → Title 26 + Subtitle 16.
 *   Share thumbs up: 107×88 slot holding the 3D hand raster (146×103),
 *   positioned so it overflows the slot to the right like in Figma.
 *
 * All colors + spacing flow through Pulse CSS variable tokens.
 */

const FONT = "var(--font-family, 'Google Sans', 'Noto Sans', -apple-system, sans-serif)";

export interface ShareBannerProps {
  title?: string;
  subtitle?: string;
}

export const ShareBanner: React.FC<ShareBannerProps> = ({
  title = 'Stay healthy!',
  subtitle = 'Each day is a step towards happiness',
}) => {
  return (
    <div
      style={{
        width: 360,
        boxSizing: 'border-box',
        padding: '48px var(--space-24) 48px var(--space-24)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-8)',
        background: 'var(--surface-muted, #f2f5f9)',
        fontFamily: FONT,
      }}
    >
      {/* Text stack — 207 wide in Figma */}
      <div
        style={{
          width: 207,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-8)',
        }}
      >
        <span
          style={{
            fontSize: 26,
            lineHeight: '32px',
            fontWeight: 700,
            color: 'var(--content-tertiary)',
            letterSpacing: '-0.3px',
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 400,
            color: 'var(--content-tertiary)',
          }}
        >
          {subtitle}
        </span>
      </div>

      {/* 3D thumbs-up: 107×88 slot, raster 146×103 overflowing to the right */}
      <div
        style={{
          width: 107,
          height: 88,
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <img
          src={thumbsUpPng as unknown as string}
          alt="Thumbs up"
          width={146}
          height={103}
          style={{
            position: 'absolute',
            left: -6,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 146,
            height: 103,
            objectFit: 'contain',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default ShareBanner;
