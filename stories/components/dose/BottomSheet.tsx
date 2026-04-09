import React from 'react';

/**
 * BottomSheet shell — used by all Dose logging / preferences sheets.
 * 360 wide, rounded top corners (28), #eff6ff/#f2f5f9 surface, header row with
 * title + right-aligned close X (or left back arrow), body content, and an
 * optional primary CTA button at the bottom.
 *
 * Used by nodes 8867:64336, 8867:64770, 8867:65192, 8867:65704, etc.
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

const CloseIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 6l12 12M18 6L6 18" stroke="#18203a" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const BackIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M15 6l-6 6 6 6" stroke="#18203a" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export interface BottomSheetProps {
  title?: string;
  leadingIcon?: 'close' | 'back' | 'none';
  cta?: string;
  onCta?: () => void;
  ctaDisabled?: boolean;
  progress?: number; // 0..1 — shows a 2-segment progress bar for multi-step flows
  children?: React.ReactNode;
  height?: number;
}

export function BottomSheet({
  title,
  leadingIcon = 'close',
  cta,
  onCta,
  ctaDisabled,
  progress,
  children,
  height = 594,
}: BottomSheetProps) {
  return (
    <div
      style={{
        width: 360,
        height,
        boxSizing: 'border-box',
        background: '#eff6ff',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: FONT,
        boxShadow: '0 -6px 24px rgba(15,23,42,0.12)',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '20px 20px 12px',
          gap: 8,
          minHeight: 32,
        }}
      >
        {leadingIcon === 'back' && (
          <button type="button" aria-label="back" style={btnStyle}>
            <BackIcon />
          </button>
        )}
        <div
          style={{
            flex: 1,
            fontSize: 13,
            fontWeight: 500,
            color: '#475569',
          }}
        >
          {title}
        </div>
        {leadingIcon === 'close' && (
          <button type="button" aria-label="close" style={btnStyle}>
            <CloseIcon />
          </button>
        )}
      </div>

      {/* Optional progress bar */}
      {typeof progress === 'number' && (
        <div style={{ padding: '0 20px 12px' }}>
          <div
            style={{
              height: 4,
              borderRadius: 9999,
              background: '#cbd5e1',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: `${Math.min(1, Math.max(0, progress)) * 100}%`,
                background: '#2563eb',
                borderRadius: 9999,
              }}
            />
          </div>
        </div>
      )}

      {/* Body */}
      <div style={{ flex: 1, minHeight: 0, padding: '4px 20px 16px', overflow: 'auto' }}>
        {children}
      </div>

      {/* CTA */}
      {cta && (
        <div style={{ padding: 16 }}>
          <button
            type="button"
            onClick={onCta}
            disabled={ctaDisabled}
            style={{
              width: '100%',
              height: 56,
              borderRadius: 9999,
              border: 0,
              background: ctaDisabled ? '#475569' : '#050914',
              color: '#fdfdfd',
              fontSize: 16,
              fontWeight: 600,
              cursor: ctaDisabled ? 'not-allowed' : 'pointer',
              fontFamily: FONT,
            }}
          >
            {cta}
          </button>
        </div>
      )}
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  width: 32,
  height: 32,
  border: 0,
  background: 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: 0,
};
