import React from 'react';

/**
 * DoseGraphHeader — top portion of the Dose Tracker screen (WeightEasy).
 * Nodes: 8708:40955 (Rest), 8867:62889 (Due), 8708:40979 (AfterShot/Take today),
 * 8708:41003 (Overdue).
 *
 * 360 wide, dark navy gradient background (#0d1f2d → #18203a) with a subtle
 * green radial glow on the right. Contains:
 *   - Top app bar ("Dose" + settings icon)
 *   - Large title ("Next dose in 12d 13h" | "Take your dose today" | "Dose overdue by 2 days")
 *   - Sub text ("on Monday, 12 Dec, 6:30 pm")
 *   - Body-state callout chip ("GLP1 is receding ..." / "GLP-1 is low ...")
 *   - Concentration curve (SVG)
 *   - Date chips row: LAST DOSE | TODAY/DOSE DAY/MISSED DOSE | NEXT DOSE
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

export type DoseState = 'Rest' | 'Due' | 'Overdue' | 'AfterShot';

export interface DoseGraphHeaderProps {
  state?: DoseState;
  title?: string;
  subtitle?: string;
  calloutTitle?: string;
  calloutBody?: string;
  lastDate?: string;
  midDate?: string;
  nextDate?: string;
}

const SettingsIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="7" cy="7" r="2.2" stroke="#fff" strokeWidth={1.6} />
    <circle cx="16" cy="16" r="2.2" stroke="#fff" strokeWidth={1.6} />
    <path d="M4 7h1M9 7h11M4 16h10M18 16h2" stroke="#fff" strokeWidth={1.6} strokeLinecap="round" />
  </svg>
);

const SyringeGlyph = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M14 4l6 6M16 6l-9 9-3 4 4-3 9-9" stroke="#181f3a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// State → colors and curve
const STATE_MAP: Record<DoseState, {
  curveColor: string;
  chipMidBg: string;
  chipMidLabel: string;
  chipMidLabelColor: string;
  peakStopColor: string;
  showSyringe?: boolean;
}> = {
  Rest: {
    curveColor: '#6ee7f0',
    chipMidBg: '#2563eb',
    chipMidLabel: 'TODAY',
    chipMidLabelColor: '#fff',
    peakStopColor: '#6ee7f0',
  },
  Due: {
    curveColor: '#6ee7f0',
    chipMidBg: '#2563eb',
    chipMidLabel: 'TODAY',
    chipMidLabelColor: '#fff',
    peakStopColor: '#6ee7f0',
  },
  AfterShot: {
    curveColor: '#6ee7f0',
    chipMidBg: '#2563eb',
    chipMidLabel: 'DOSE DAY',
    chipMidLabelColor: '#fff',
    peakStopColor: '#6ee7f0',
    showSyringe: true,
  },
  Overdue: {
    curveColor: '#f59e0b',
    chipMidBg: '#f59e0b',
    chipMidLabel: 'MISSED DOSE',
    chipMidLabelColor: '#fff',
    peakStopColor: '#f59e0b',
    showSyringe: true,
  },
};

export function DoseGraphHeader({
  state = 'Rest',
  title,
  subtitle = 'on Monday, 12 Dec, 6:30 pm',
  calloutTitle,
  calloutBody,
  lastDate = '2 Dec',
  midDate = '4 Dec',
  nextDate = '12 Dec',
}: DoseGraphHeaderProps) {
  const defaults = {
    Rest: {
      title: 'Next dose in\n12d 13h',
      calloutTitle: 'GLP1 is receding in your body',
      calloutBody: 'Your side effect will slowly reduce in the next 2 days until it\u2019s time for your next shot.',
    },
    Due: {
      title: 'Next dose in\n14 days',
      calloutTitle: 'GLP-1 is low in your body',
      calloutBody: 'You can take a dose somethign',
    },
    AfterShot: {
      title: 'Take your dose\ntoday',
      calloutTitle: 'Your body is out of GLP1',
      calloutBody: 'Your side effect will slowly reduce in the next 2 days until it\u2019s time for your next shot.',
    },
    Overdue: {
      title: 'Dose overdue by\n2 days',
      calloutTitle: 'GLP-1 is low in your body',
      calloutBody: 'You\u2019ve missed your scheduled dose. Take it as soon as possible.',
    },
  }[state];

  const t = title ?? defaults.title;
  const ct = calloutTitle ?? defaults.calloutTitle;
  const cb = calloutBody ?? defaults.calloutBody;
  const s = STATE_MAP[state];

  return (
    <div
      style={{
        width: 360,
        boxSizing: 'border-box',
        padding: '48px 16px 24px 16px',
        background:
          'radial-gradient(120% 90% at 90% 55%, rgba(16,185,129,0.45) 0%, rgba(13,70,70,0.15) 45%, rgba(6,24,34,0) 75%),' +
          'linear-gradient(165deg, #062028 0%, #0a3a3e 55%, #0f4a3a 100%)',
        color: '#fdfdfd',
        fontFamily: FONT,
      }}
    >
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <div style={{ flex: 1, fontSize: 16, fontWeight: 500 }}>Dose</div>
        <button
          type="button"
          aria-label="preferences"
          style={{
            width: 40,
            height: 40,
            borderRadius: 9999,
            border: 0,
            background: '#0b1a24',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 34,
          lineHeight: '42px',
          fontWeight: 700,
          whiteSpace: 'pre-line',
          marginBottom: 6,
        }}
      >
        {t}
      </div>
      <div style={{ fontSize: 14, color: '#cbd5e1', marginBottom: 20 }}>{subtitle}</div>

      {/* Callout chip */}
      <div
        style={{
          padding: 16,
          borderRadius: 12,
          background: 'rgba(5,11,22,0.55)',
          border: '1px solid rgba(255,255,255,0.06)',
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{ct}</div>
        <div style={{ fontSize: 13, color: '#cbd5e1', lineHeight: '18px' }}>{cb}</div>
      </div>

      {/* Curve */}
      <div style={{ position: 'relative', height: 160, marginBottom: 4 }}>
        <svg width="100%" height="160" viewBox="0 0 328 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`gr-${state}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={s.peakStopColor} />
              <stop offset="55%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id={`fill-${state}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.peakStopColor} stopOpacity={0.35} />
              <stop offset="60%" stopColor="#6366f1" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* Vertical guide line from callout to today dot */}
          <line x1={164} y1={0} x2={164} y2={118} stroke="rgba(255,255,255,0.4)" strokeWidth={1} />
          {/* Filled area under the curve */}
          <path
            d="M22 118 C 36 118, 50 18, 78 18 C 104 18, 124 108, 164 118 L 164 118 L 22 118 Z"
            fill={`url(#fill-${state})`}
            stroke="none"
          />
          {/* Solid portion: rise + fall + gradual decay to TODAY marker */}
          <path
            d="M22 118 C 36 118, 50 18, 78 18 C 104 18, 124 108, 164 118"
            fill="none"
            stroke={`url(#gr-${state})`}
            strokeWidth={4}
            strokeLinecap="round"
          />
          {/* Dashed continuation past TODAY — starts exactly at the dot */}
          <path
            d="M164 118 C 180 122, 230 124, 292 126"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeDasharray="3 4"
          />
          {/* Current position dot */}
          <circle cx={164} cy={118} r={7} fill="#eff6ff" stroke="#2563eb" strokeWidth={2} />
          {/* Y-axis labels aligned with curve values: 5 at peak, 0 at dot baseline */}
          <text x="300" y="22" fontSize="10" fill="#cbd5e1" textAnchor="start">5</text>
          <text x="300" y="72" fontSize="10" fill="#cbd5e1" textAnchor="start">2.5</text>
          <text x="300" y="122" fontSize="10" fill="#cbd5e1" textAnchor="start">0</text>
        </svg>
        <div
          style={{
            position: 'absolute',
            right: -2,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            writingMode: 'vertical-rl' as const,
            transform: 'rotate(180deg)',
            fontSize: 10,
            color: '#cbd5e1',
          }}
        >
          GLP-1 Concentration (mg)
        </div>
      </div>

      {/* Date chips row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
        <DateChip label={lastDate} caption={state === 'AfterShot' ? 'LAST SHOT' : 'LAST DOSE'} variant="muted" />
        <div
          style={{
            flex: 1,
            height: 1,
            background: 'rgba(255,255,255,0.15)',
            margin: '0 4px',
          }}
        />
        <DateChip
          label={midDate}
          caption={s.chipMidLabel}
          variant={state === 'Overdue' ? 'warning' : 'active'}
          accent={s.showSyringe ? <SyringeGlyph /> : undefined}
        />
        {state !== 'AfterShot' && (
          <>
            <div
              style={{
                flex: 1,
                height: 1,
                background: 'rgba(255,255,255,0.15)',
                margin: '0 4px',
              }}
            />
            <DateChip label={nextDate} caption={state === 'Overdue' ? 'TODAY' : 'NEXT DOSE'} variant="muted" />
          </>
        )}
      </div>
    </div>
  );
}

function DateChip({
  label,
  caption,
  variant,
  accent,
}: {
  label: string;
  caption: string;
  variant: 'active' | 'warning' | 'muted';
  accent?: React.ReactNode;
}) {
  const active = variant !== 'muted';
  const bg =
    variant === 'active' ? '#2563eb' : variant === 'warning' ? '#f59e0b' : 'rgba(255,255,255,0.10)';
  const border = variant === 'muted' ? '1px solid rgba(255,255,255,0.18)' : 'none';
  const color = '#fff';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 68 }}>
      <div
        style={{
          width: active ? 74 : 66,
          height: active ? 58 : 50,
          borderRadius: 12,
          background: bg,
          border,
          color,
          fontSize: 15,
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          boxSizing: 'border-box',
        }}
      >
        {label}
        {accent}
      </div>
      <div style={{ fontSize: 10, fontWeight: 700, color: '#cbd5e1', letterSpacing: '0.08em' }}>
        {caption}
      </div>
    </div>
  );
}
