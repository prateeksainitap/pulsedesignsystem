import React from 'react';

/**
 * Android Material-style date picker dialog — from WeightEasy node 8867:64770.
 * Light lavender #eae5f2 background, rounded 28. Header label "Select date" +
 * big "Mon, Aug 17" with edit pencil. Month row "August 2025 ▾" with prev/next
 * chevrons. 7-col grid of days. Selected day shown with purple filled circle
 * (#6750a4). Today circled outline. Footer "Clear" (left) / "Cancel" / "OK".
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

const PURPLE = '#6750a4';

const PencilIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 20h4l11-11-4-4L4 16v4z" stroke="#49454f" strokeWidth={1.6} strokeLinejoin="round" />
  </svg>
);

const Chevron = ({ dir = 'right' }: { dir?: 'left' | 'right' }) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d={dir === 'right' ? 'M9 6l6 6-6 6' : 'M15 6l-6 6 6 6'}
      stroke="#49454f"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface DatePickerSheetProps {
  selectedDay?: number;
  todayDay?: number;
  monthLabel?: string;
  headlineDate?: string;
}

export function DatePickerSheet({
  selectedDay = 17,
  todayDay = 5,
  monthLabel = 'August 2025',
  headlineDate = 'Mon, Aug 17',
}: DatePickerSheetProps) {
  // Days grid: 31 days, month starts on Friday (Aug 2025)
  const startCol = 5; // Sun=0..Sat=6; Aug 1 2025 is Friday
  const daysInMonth = 31;
  const cells: (number | null)[] = [];
  for (let i = 0; i < startCol; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div
      style={{
        width: 328,
        boxSizing: 'border-box',
        background: '#eae5f2',
        borderRadius: 28,
        padding: '24px 12px 12px',
        fontFamily: FONT,
        color: '#1d1b20',
      }}
    >
      {/* Header */}
      <div style={{ padding: '0 12px 12px' }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: '#49454f', marginBottom: 24 }}>
          Select date
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1, fontSize: 32, fontWeight: 400, color: '#1d1b20' }}>
            {headlineDate}
          </div>
          <PencilIcon />
        </div>
      </div>

      <div style={{ height: 1, background: 'rgba(29,27,32,0.12)', margin: '12px 0' }} />

      {/* Month row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '4px 12px',
          marginBottom: 4,
        }}
      >
        <div style={{ flex: 1, display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 500 }}>
          {monthLabel}
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="#49454f" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <button type="button" aria-label="prev" style={iconBtn}>
          <Chevron dir="left" />
        </button>
        <button type="button" aria-label="next" style={iconBtn}>
          <Chevron dir="right" />
        </button>
      </div>

      {/* Weekday header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          padding: '0 4px',
          marginBottom: 4,
        }}
      >
        {weekdays.map((w, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 500,
              color: '#49454f',
              padding: '6px 0',
            }}
          >
            {w}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '0 4px' }}>
        {cells.map((d, i) => {
          const isSel = d === selectedDay;
          const isToday = d === todayDay;
          return (
            <div
              key={i}
              style={{
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {d !== null && (
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9999,
                    background: isSel ? PURPLE : 'transparent',
                    color: isSel ? '#fff' : '#1d1b20',
                    border: !isSel && isToday ? `1px solid ${PURPLE}` : 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {d}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 8px 4px' }}>
        <button type="button" style={textBtn}>Clear</button>
        <div style={{ flex: 1 }} />
        <button type="button" style={textBtn}>Cancel</button>
        <button type="button" style={{ ...textBtn, marginLeft: 12 }}>OK</button>
      </div>
    </div>
  );
}

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
  fontFamily: "inherit",
};
