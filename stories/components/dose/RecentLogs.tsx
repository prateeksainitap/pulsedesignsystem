import React from 'react';

/**
 * Recent logs list — from WeightEasy Dose Tracker (node 8708:40955 etc).
 * "Recent logs" section header + vertical stack of log entries separated by a
 * dotted vertical connector. Two row types:
 *   - RecentLogItem: white card "21 Mar • 5mg ↑" / "Mounjaro" + more-vertical icon.
 *   - MissedLogPill: full-width gray pill "Dose missed • 12 Dec".
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

const MoreVerticalIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="5" r="2" fill="#252e49" />
    <circle cx="12" cy="12" r="2" fill="#252e49" />
    <circle cx="12" cy="19" r="2" fill="#252e49" />
  </svg>
);

const UpArrow = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 19V6M6 12l6-6 6 6" stroke="#2563eb" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const DownArrow = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 5v13M6 12l6 6 6-6" stroke="#9a1b1b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export interface RecentLogItemProps {
  date: string;
  dose: string;
  med: string;
  trend?: 'up' | 'down' | 'none';
}

export function RecentLogItem({ date, dose, med, trend = 'none' }: RecentLogItemProps) {
  return (
    <div
      style={{
        width: 328,
        boxSizing: 'border-box',
        padding: '14px 16px',
        borderRadius: 12,
        background: '#fdfdfd',
        border: '1px solid var(--border-default, #dce1e8)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: FONT,
      }}
    >
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 15,
            fontWeight: 600,
            color: '#18203a',
          }}
        >
          <span>{date}</span>
          <span style={{ color: '#94a3b8' }}>•</span>
          <span>{dose}</span>
          {trend === 'up' && <UpArrow />}
          {trend === 'down' && <DownArrow />}
        </div>
        <div style={{ fontSize: 13, color: '#64748b' }}>{med}</div>
      </div>
      <MoreVerticalIcon />
    </div>
  );
}

export function MissedLogPill({ date = '12 Dec' }: { date?: string }) {
  return (
    <div
      style={{
        width: 328,
        height: 44,
        boxSizing: 'border-box',
        borderRadius: 9999,
        background: '#e2e8f0',
        color: '#475569',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT,
        fontSize: 13,
        fontWeight: 500,
      }}
    >
      Dose missed • {date}
    </div>
  );
}

export interface RecentLogsProps {
  children?: React.ReactNode;
  title?: string;
}

export function RecentLogs({ children, title = 'Recent logs' }: RecentLogsProps) {
  // Interleave children with a dotted vertical connector.
  const arr = React.Children.toArray(children);
  return (
    <div
      style={{
        width: 360,
        boxSizing: 'border-box',
        padding: 16,
        background: '#eff6ff',
        borderRadius: 24,
        fontFamily: FONT,
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 700, color: '#18203a', marginBottom: 12 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {arr.map((child, i) => (
          <React.Fragment key={i}>
            {child}
            {i < arr.length - 1 && (
              <div
                style={{
                  width: 1,
                  height: 16,
                  borderLeft: '1px dotted #94a3b8',
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
