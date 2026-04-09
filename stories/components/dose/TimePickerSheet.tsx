import React from 'react';

/**
 * Android Material-style time picker — from WeightEasy node 8867:65192.
 * Light lavender #eae5f2 bg, rounded 28. "Select time" label. Two big hour/
 * minute boxes (lavender for selected) + vertical AM/PM toggle. Analog clock
 * face 12-numbers with a purple selection dial and line from center. Footer:
 * keyboard icon + Cancel / OK.
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";
const PURPLE = '#6750a4';
const LAV = '#e8def8';

export interface TimePickerSheetProps {
  hour?: number;
  minute?: number;
  period?: 'AM' | 'PM';
}

export function TimePickerSheet({ hour = 7, minute = 0, period = 'AM' }: TimePickerSheetProps) {
  // Position of selected number on clock face
  const angle = ((hour % 12) / 12) * 2 * Math.PI - Math.PI / 2;
  const cx = 128;
  const cy = 128;
  const r = 96;
  const sx = cx + r * Math.cos(angle);
  const sy = cy + r * Math.sin(angle);

  return (
    <div
      style={{
        width: 328,
        boxSizing: 'border-box',
        background: '#eae5f2',
        borderRadius: 28,
        padding: '24px 24px 12px',
        fontFamily: FONT,
        color: '#1d1b20',
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 500, color: '#49454f', marginBottom: 16 }}>
        Select time
      </div>

      {/* Hour / Minute / AM-PM */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
        <div style={{ ...bigBox, background: LAV, color: PURPLE }}>{String(hour).padStart(2, '0')}</div>
        <div style={{ fontSize: 48, fontWeight: 400, color: '#1d1b20', padding: '0 4px' }}>:</div>
        <div style={{ ...bigBox, background: '#d5d2dd', color: '#1d1b20' }}>
          {String(minute).padStart(2, '0')}
        </div>
        <div
          style={{
            marginLeft: 8,
            width: 52,
            borderRadius: 8,
            border: '1px solid rgba(29,27,32,0.2)',
            overflow: 'hidden',
            background: '#fef7ff',
          }}
        >
          <div
            style={{
              padding: '8px 0',
              textAlign: 'center',
              fontSize: 14,
              color: period === 'AM' ? PURPLE : '#1d1b20',
              background: period === 'AM' ? '#ffd8e4' : 'transparent',
              borderBottom: '1px solid rgba(29,27,32,0.2)',
            }}
          >
            AM
          </div>
          <div
            style={{
              padding: '8px 0',
              textAlign: 'center',
              fontSize: 14,
              color: period === 'PM' ? PURPLE : '#1d1b20',
              background: period === 'PM' ? '#ffd8e4' : 'transparent',
            }}
          >
            PM
          </div>
        </div>
      </div>

      {/* Clock face */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
        <svg width={256} height={256} viewBox="0 0 256 256">
          <circle cx={cx} cy={cy} r={120} fill="#d5d2dd" />
          {/* Numbers */}
          {Array.from({ length: 12 }, (_, i) => {
            const n = i + 1;
            const a = (n / 12) * 2 * Math.PI - Math.PI / 2;
            const x = cx + r * Math.cos(a);
            const y = cy + r * Math.sin(a);
            const isSel = n === hour;
            return (
              <g key={n}>
                <text
                  x={x}
                  y={y + 6}
                  fontSize="16"
                  fontWeight="500"
                  textAnchor="middle"
                  fill={isSel ? '#fff' : '#1d1b20'}
                >
                  {n}
                </text>
              </g>
            );
          })}
          {/* Dial line */}
          <line x1={cx} y1={cy} x2={sx} y2={sy} stroke={PURPLE} strokeWidth={2} />
          <circle cx={cx} cy={cy} r={4} fill={PURPLE} />
          <circle cx={sx} cy={sy} r={18} fill={PURPLE} />
          <text x={sx} y={sy + 6} fontSize="16" fontWeight="500" textAnchor="middle" fill="#fff">
            {hour}
          </text>
        </svg>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', paddingTop: 4 }}>
        <button type="button" aria-label="keyboard input" style={iconBtn}>
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="6" width="18" height="12" rx="2" stroke="#49454f" strokeWidth={1.6} />
            <path d="M7 10h.01M11 10h.01M15 10h.01M7 14h10" stroke="#49454f" strokeWidth={1.6} strokeLinecap="round" />
          </svg>
        </button>
        <div style={{ flex: 1 }} />
        <button type="button" style={textBtn}>Cancel</button>
        <button type="button" style={{ ...textBtn, marginLeft: 12 }}>OK</button>
      </div>
    </div>
  );
}

const bigBox: React.CSSProperties = {
  width: 96,
  height: 80,
  borderRadius: 8,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 48,
  fontWeight: 400,
};

const iconBtn: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: 9999,
  border: 0,
  background: 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const textBtn: React.CSSProperties = {
  padding: '10px 12px',
  border: 0,
  background: 'transparent',
  color: PURPLE,
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
};
