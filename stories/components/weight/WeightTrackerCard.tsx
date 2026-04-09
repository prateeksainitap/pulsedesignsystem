import React, { useEffect, useRef, useState } from 'react';

/**
 * Weight Tracker Card — WeightEasy Figma "Stat Card" (node 9104:146138).
 * Accurate port: 16×16 scale icon + "Weight" 14/20/600, delta (30/38/700 + lbs),
 * Current Weight / BMI pill, WeightTrend chart, 1W/1M/6M/All-time tab bar.
 *
 * Interactions:
 *  - Card is clickable (onClick).
 *  - Tapping a range tab animates the curve to the new dataset and replays the
 *    left-to-right draw-in. The right endpoint (Aug) stays fixed — the line
 *    "descends" into the current weight point.
 */

const FONT = "var(--font-family, 'Google Sans', 'Noto Sans', -apple-system, sans-serif)";

type Range = '1W' | '1M' | '6M' | 'All-time';

export interface WeightTrackerCardProps {
  delta?: string;
  deltaUnit?: string;
  deltaDirection?: 'down' | 'up';
  currentWeight?: string;
  bmi?: string;
  activeRange?: Range;
  onClick?: () => void;
}

const RANGE_DATA: Record<Range, [number, number, number, number]> = {
  '1W':       [0.18, 0.26, 0.34, 0.44],
  '1M':       [0.10, 0.28, 0.50, 0.72],
  '6M':       [0.05, 0.22, 0.48, 0.78],
  'All-time': [0.02, 0.20, 0.46, 0.82],
};
const RANGE_LABELS: Record<Range, [string, string, string, string]> = {
  '1W':       ['Mon', 'Wed', 'Fri', 'Sun'],
  '1M':       ['May', 'Jun', 'Jul', 'Aug'],
  '6M':       ['Mar', 'May', 'Jul', 'Sep'],
  'All-time': ['2021', '2022', '2023', '2024'],
};

/* 16×16 scale icon — rounded square body + small dial indicator. */
const WeightIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden>
    <rect x={2} y={2} width={12} height={12} rx={4}
          stroke="var(--color-teal-600)" strokeWidth={1.5} />
    <path d="M5.5 6 L8 8.5 L10.5 6"
          stroke="var(--color-teal-600)" strokeWidth={1.5}
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Downward triangle (Figma Polygon 7 — 12×12 green-600 filled). */
const DeltaTriangle = ({ direction }: { direction: 'down' | 'up' }) => (
  <svg width={12} height={12} viewBox="0 0 12 12" fill="none"
       style={{ transform: direction === 'up' ? 'rotate(180deg)' : undefined }} aria-hidden>
    <path d="M1 2 L6 10 L11 2 Z" fill="var(--color-green-600)" />
  </svg>
);

const Header = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
    <WeightIcon />
    <span style={{
      fontFamily: FONT,
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600,
      letterSpacing: '0.1px',
      color: 'var(--content-secondary)',
    }}>
      Weight
    </span>
  </div>
);

const DeltaRow: React.FC<Pick<WeightTrackerCardProps, 'delta' | 'deltaUnit' | 'deltaDirection' | 'currentWeight' | 'bmi'>> = ({
  delta = '1.2', deltaUnit = 'lbs', deltaDirection = 'down', currentWeight = '187.2 lbs', bmi = '21.7',
}) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)' }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
      <DeltaTriangle direction={deltaDirection} />
      <span style={{
        fontFamily: FONT,
        fontSize: 30,
        lineHeight: '38px',
        fontWeight: 700,
        letterSpacing: '-1px',
        color: 'var(--color-green-600)',
      }}>
        {delta}
      </span>
      <span style={{
        fontFamily: FONT,
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 600,
        color: 'var(--color-green-600)',
      }}>
        {deltaUnit}
      </span>
    </div>

    <div style={{
      display: 'flex',
      alignItems: 'stretch',
      gap: 'var(--space-8)',
      padding: '4px var(--space-8)',
      borderRadius: 12,
      background: 'var(--surface-muted, #f2f5f9)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
        <span style={{ fontFamily: FONT, fontSize: 12, lineHeight: '16px', fontWeight: 500, color: 'var(--content-tertiary)' }}>
          Current Weight
        </span>
        <span style={{ fontFamily: FONT, fontSize: 14, lineHeight: '20px', fontWeight: 600, letterSpacing: '0.1px', color: 'var(--content-primary)' }}>
          {currentWeight}
        </span>
      </div>
      <div style={{ width: 1, background: 'var(--border-default, #dce1e8)', alignSelf: 'stretch' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
        <span style={{ fontFamily: FONT, fontSize: 12, lineHeight: '16px', fontWeight: 500, color: 'var(--content-tertiary)' }}>
          BMI
        </span>
        <span style={{ fontFamily: FONT, fontSize: 14, lineHeight: '20px', fontWeight: 600, letterSpacing: '0.1px', color: 'var(--color-orange-500, #d97706)' }}>
          {bmi}
        </span>
      </div>
    </div>
  </div>
);

/* ─── Chart ────────────────────────────────────────────────────────────── */

const W = 280;
const H = 148;
const padL = 24;
const padR = 12;
const padT = 4;
const padB = 24;
const innerW = W - padL - padR;
const innerH = H - padT - padB;
const xAt = (i: number) => padL + (innerW / 3) * i;
const yAt = (r: number) => padT + innerH * r;
const baseline = padT + innerH;
const rows = [
  { label: '90', y: padT + innerH * 0.08 },
  { label: '75', y: padT + innerH * 0.33 },
  { label: '70', y: padT + innerH * 0.60 },
  { label: '65', y: padT + innerH * 0.90 },
];

function buildPaths(ratios: number[]) {
  const pts = ratios.map((r, i) => ({ x: xAt(i), y: yAt(r) }));
  const [may, jun, jul, aug] = pts;
  const solid = `M ${may.x} ${may.y} C ${may.x + 36} ${may.y + 4}, ${jun.x - 40} ${jun.y - 12}, ${jun.x} ${jun.y}`;
  const area = `${solid} L ${jun.x} ${baseline} L ${may.x} ${baseline} Z`;
  return { solid, area, may, jun, jul, aug };
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const Chart: React.FC<{ range: Range }> = ({ range }) => {
  const [ratios, setRatios] = useState<number[]>(RANGE_DATA[range]);
  const [drawT, setDrawT] = useState(0);
  const prev = useRef<number[]>(RANGE_DATA[range]);
  const raf = useRef<number | null>(null);
  const solidRef = useRef<SVGPathElement | null>(null);
  const [solidLen, setSolidLen] = useState(200);

  useEffect(() => {
    if (solidRef.current) {
      try { setSolidLen(solidRef.current.getTotalLength()); } catch { /* noop */ }
    }
  }, [ratios]);

  useEffect(() => {
    const from = prev.current;
    const to = RANGE_DATA[range];
    const duration = 900;
    const transitionDur = 500;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const tt = Math.min(1, elapsed / transitionDur);
      const td = Math.min(1, elapsed / duration);
      setRatios(from.map((f, i) => f + (to[i] - f) * easeOutCubic(tt)));
      setDrawT(easeOutCubic(td));
      if (elapsed < duration) {
        raf.current = requestAnimationFrame(step);
      } else {
        prev.current = to;
      }
    };
    setDrawT(0);
    raf.current = requestAnimationFrame(step);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [range]);

  const { solid, area, jun, jul, aug } = buildPaths(ratios);
  const labels = RANGE_LABELS[range];

  // Progress mappings: solid line 0→0.55, dotted fade 0.45→1, end dot 0.9→1.
  const solidP = Math.min(1, drawT / 0.55);
  const dottedOpacity = Math.max(0, Math.min(1, (drawT - 0.45) / 0.55));
  const junDotOpacity = Math.max(0, Math.min(1, (drawT - 0.45) / 0.15));
  const endRingOpacity = Math.max(0, Math.min(1, (drawT - 0.9) / 0.1));

  const gridStroke = 'var(--border-default, #dce1e8)';
  const strongStroke = 'var(--border-strong, #bec5d2)';
  const axisText = 'var(--content-tertiary)';
  const blue = 'var(--primary-default, #2563eb)';

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden style={{ display: 'block', margin: '0 auto' }}>
      <defs>
        <linearGradient id="weightAreaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={blue} stopOpacity="0.20" />
          <stop offset="100%" stopColor={blue} stopOpacity="0" />
        </linearGradient>
      </defs>

      {rows.map((r) => (
        <g key={r.label}>
          <text x={padL - 6} y={r.y + 4} textAnchor="end"
                fontFamily="Google Sans, Noto Sans, sans-serif"
                fontSize={11} fontWeight={500}
                fill={axisText}>
            {r.label}
          </text>
          <line x1={padL} y1={r.y} x2={W - padR} y2={r.y}
                stroke={gridStroke} strokeWidth={1}
                strokeDasharray="3 5" strokeLinecap="round" />
        </g>
      ))}

      {/* Area — fades in with the solid curve. */}
      <path d={area} fill="url(#weightAreaFill)" opacity={solidP} />

      {/* Solid May→Jun curve — draws left to right via strokeDashoffset. */}
      <path
        ref={solidRef}
        d={solid}
        stroke={blue}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={`${solidLen} ${solidLen}`}
        strokeDashoffset={solidLen * (1 - solidP)}
      />

      {/* Dotted Jun→Jul→Aug trail — fades in after the solid. */}
      <path
        d={`M ${jun.x} ${jun.y} L ${jul.x} ${jul.y} L ${aug.x} ${aug.y}`}
        stroke={strongStroke}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeDasharray="1 5"
        opacity={dottedOpacity}
      />

      {/* Jun endpoint (end of solid). */}
      <circle cx={jun.x} cy={jun.y} r={4} fill={blue} opacity={junDotOpacity} />

      {/* Aug endpoint — FIXED right dot, always visible. */}
      <circle cx={aug.x} cy={aug.y} r={4} fill={strongStroke} />
      <circle cx={aug.x} cy={aug.y} r={6} stroke={strongStroke} strokeWidth={1.5} fill="none" opacity={endRingOpacity} />

      {labels.map((m, i) => (
        <text key={m + i} x={xAt(i)} y={H - 6} textAnchor="middle"
              fontFamily="Google Sans, Noto Sans, sans-serif"
              fontSize={12} fontWeight={500} fill={axisText}>
          {m}
        </text>
      ))}
    </svg>
  );
};

const RangeTabs: React.FC<{ active: Range; onChange: (r: Range) => void }> = ({ active, onChange }) => {
  const ranges: Range[] = ['1W', '1M', '6M', 'All-time'];
  return (
    <div style={{
      display: 'flex',
      padding: 4,
      borderRadius: 12,
      background: 'var(--surface-muted, #f2f5f9)',
    }}>
      {ranges.map((r) => {
        const isActive = r === active;
        return (
          <button
            key={r}
            type="button"
            onClick={(e) => { e.stopPropagation(); onChange(r); }}
            style={{
              flex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 16px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              background: isActive ? 'var(--surface-container)' : 'transparent',
              boxShadow: isActive
                ? '0 1px 2px rgba(0,0,0,0.05), 0 2px 6px 2px rgba(0,0,0,0.08)'
                : undefined,
              fontFamily: FONT,
              fontSize: 12,
              lineHeight: '16px',
              fontWeight: 500,
              color: isActive ? 'var(--content-primary)' : 'var(--content-tertiary)',
              transition: 'background 180ms ease, color 180ms ease, box-shadow 180ms ease',
            }}
          >
            {r}
          </button>
        );
      })}
    </div>
  );
};

export const WeightTrackerCard: React.FC<WeightTrackerCardProps> = ({
  delta = '1.2',
  deltaUnit = 'lbs',
  deltaDirection = 'down',
  currentWeight = '187.2 lbs',
  bmi = '21.7',
  activeRange = '1M',
  onClick,
}) => {
  const [range, setRange] = useState<Range>(activeRange);
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{
        width: 328,
        boxSizing: 'border-box',
        padding: 'var(--space-24)',
        borderRadius: 'var(--radius-3xl, 24px)',
        background: 'var(--surface-container)',
        border: '1px solid var(--border-default, #dce1e8)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-12)',
        fontFamily: FONT,
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <Header />
      <DeltaRow
        delta={delta}
        deltaUnit={deltaUnit}
        deltaDirection={deltaDirection}
        currentWeight={currentWeight}
        bmi={bmi}
      />
      <Chart range={range} />
      <RangeTabs active={range} onChange={setRange} />
    </div>
  );
};

export default WeightTrackerCard;
