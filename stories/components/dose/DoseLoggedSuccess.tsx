import React from 'react';

/**
 * Dose logged success screen — WeightEasy node 9551:100155.
 * Full-screen 360×800 solid green #159a4a with status bar, centered white
 * check icon + "Shot logged" label.
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

export interface DoseLoggedSuccessProps {
  label?: string;
  color?: string;
  height?: number;
}

export function DoseLoggedSuccess({
  label = 'Shot logged',
  color = '#159a4a',
  height = 800,
}: DoseLoggedSuccessProps) {
  return (
    <div
      style={{
        width: 360,
        height,
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 20,
        color: '#fdfdfd',
        fontFamily: FONT,
      }}
    >
      <svg width={72} height={72} viewBox="0 0 72 72" fill="none" aria-hidden>
        <path
          d="M18 38 L32 52 L56 24"
          stroke="#fff"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div style={{ fontSize: 22, fontWeight: 600 }}>{label}</div>
    </div>
  );
}
