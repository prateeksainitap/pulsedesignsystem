import React from 'react';

/**
 * Weight Tracker components (WeightEasy Track → Weight).
 * Figma section: 8708:41366. Built from rendered frames.
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";
const NAVY = '#050914';
const INK = '#1f2937';
const MUTED = '#6b7280';
const BG = '#eff6ff';
const CARD = '#fdfdfd';
const BORDER = 'rgba(15,23,42,0.08)';
const BLUE = '#2563eb';
const GREEN = '#15803d';
const GREEN_SOFT = '#dcfce7';

const KebabIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="5" r="1.6" fill={INK} />
    <circle cx="12" cy="12" r="1.6" fill={INK} />
    <circle cx="12" cy="19" r="1.6" fill={INK} />
  </svg>
);
const ArrowRight = ({ color = INK, size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M5 12h14M13 5l7 7-7 7" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowLeft = ({ color = '#fff' }: { color?: string }) => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M19 12H5M11 19l-7-7 7-7" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const XIcon = ({ color = NAVY }: { color?: string }) => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 6l12 12M18 6L6 18" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </svg>
);
const CameraPlusIcon = ({ color = INK }: { color?: string }) => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 8h3l1.5-2h5L15 8h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z" stroke={color} strokeWidth={1.6} />
    <circle cx="12" cy="13" r="3" stroke={color} strokeWidth={1.6} />
    <circle cx="18" cy="7" r="3.5" fill={color === '#fff' ? BLUE : '#fff'} stroke={color} strokeWidth={1.6} />
    <path d="M18 5.5v3M16.5 7h3" stroke={color === '#fff' ? '#fff' : color} strokeWidth={1.4} strokeLinecap="round" />
  </svg>
);
const PencilIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.42l-2.33-2.33a1 1 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill={INK} />
  </svg>
);
const ScaleIcon = ({ color = GREEN }: { color?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M7 9l-1.2 8.7A2 2 0 0 0 7.8 20h8.4a2 2 0 0 0 2-2.3L17 9H7z" stroke={color} strokeWidth={1.6} />
    <path d="M9 12l3-3 3 3" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const GridIcon = ({ color = '#fff' }: { color?: string }) => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="4" y="4" width="7" height="7" rx="1.5" stroke={color} strokeWidth={1.8} />
    <rect x="13" y="4" width="7" height="7" rx="1.5" stroke={color} strokeWidth={1.8} />
    <rect x="4" y="13" width="7" height="7" rx="1.5" stroke={color} strokeWidth={1.8} />
    <rect x="13" y="13" width="7" height="7" rx="1.5" stroke={color} strokeWidth={1.8} />
  </svg>
);
const ViewIcon = ({ color = NAVY }: { color?: string }) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </svg>
);

// ---------- CurrentWeightCard ----------
export interface CurrentWeightCardProps {
  weight?: string;
  unit?: string;
  delta?: string; // e.g. "-0.7 kg since last week"
}
export function CurrentWeightCard({
  weight = '73',
  unit = 'kg',
  delta = '-0.7 kg since last week',
}: CurrentWeightCardProps) {
  return (
    <div style={{ width: 328, fontFamily: FONT, textAlign: 'center' }}>
      <div style={{ fontSize: 15, color: MUTED, marginBottom: 6 }}>Current Weight</div>
      <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6, color: NAVY }}>
        <span style={{ fontSize: 72, fontWeight: 800, lineHeight: 1 }}>{weight}</span>
        <span style={{ fontSize: 18, fontWeight: 600, color: MUTED }}>{unit}</span>
      </div>
      <div style={{ marginTop: 16 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: GREEN_SOFT,
            color: GREEN,
            fontSize: 13,
            fontWeight: 600,
            padding: '8px 14px',
            borderRadius: 9999,
          }}
        >
          <ScaleIcon /> {delta}
        </span>
      </div>
    </div>
  );
}

// ---------- ProgressToGoalBar ----------
export interface ProgressToGoalProps {
  percent?: number;
  start?: string;
  goal?: string;
}
export function ProgressToGoalBar({ percent = 25, start = '75 KG', goal = '64 KG' }: ProgressToGoalProps) {
  return (
    <div style={{ width: 328, fontFamily: FONT }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontSize: 20, fontWeight: 800, color: NAVY }}>Progress to Goal</span>
        <span style={{ fontSize: 18, fontWeight: 800, color: NAVY }}>{percent.toFixed(1)}%</span>
      </div>
      <div style={{ height: 6, borderRadius: 6, background: '#e5e7eb', position: 'relative', marginBottom: 10 }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: `${Math.max(0, Math.min(100, percent))}%`,
            borderRadius: 6,
            background: BLUE,
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, color: MUTED }}>
        <span>START: {start}</span>
        <span>GOAL: {goal}</span>
      </div>
    </div>
  );
}

// ---------- WeightTrendCard ----------
export interface WeightTrendCardProps {
  start?: string;
  current?: string;
  goal?: string;
  /** solid line through x = currentIndex in 0..1, then dashed to the end */
  currentProgress?: number; // 0..1
}
export function WeightTrendCard({
  start = '75kg',
  current = '73kg',
  goal = '64kg',
  currentProgress = 0.4,
}: WeightTrendCardProps) {
  // Coordinates in a 300x140 box
  const W = 300;
  const H = 140;
  const peakY = 20;
  const currentY = peakY + (H - 60) * currentProgress;
  const curX = 30 + (W - 60) * currentProgress;
  const goalY = H - 30;
  return (
    <div
      style={{
        width: 328,
        fontFamily: FONT,
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 16,
        padding: 16,
      }}
    >
      <div style={{ fontSize: 20, fontWeight: 800, color: NAVY, marginBottom: 10 }}>Trend</div>
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`}>
        <defs>
          <linearGradient id="weight-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BLUE} stopOpacity={0.18} />
            <stop offset="100%" stopColor={BLUE} stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* grid lines */}
        {[20, 60, 100].map((y) => (
          <line key={y} x1={26} x2={W - 6} y1={y} y2={y} stroke="#e5e7eb" strokeDasharray="2 4" />
        ))}
        {/* y axis labels */}
        <text x={6} y={24} fontSize={10} fill={MUTED}>90</text>
        <text x={6} y={64} fontSize={10} fill={MUTED}>75</text>
        <text x={6} y={104} fontSize={10} fill={MUTED}>70</text>
        <text x={6} y={H - 6} fontSize={10} fill={MUTED}>65</text>
        {/* filled area under solid segment */}
        <path
          d={`M30 ${peakY} L ${curX} ${currentY} L ${curX} ${H - 26} L 30 ${H - 26} Z`}
          fill="url(#weight-area)"
        />
        {/* solid segment (start → current) */}
        <path d={`M30 ${peakY} L ${curX} ${currentY}`} stroke={BLUE} strokeWidth={3} fill="none" strokeLinecap="round" />
        {/* dashed projection (current → goal) */}
        <path
          d={`M${curX} ${currentY} L ${W - 20} ${goalY}`}
          stroke="#cbd5e1"
          strokeWidth={2}
          strokeDasharray="4 5"
          fill="none"
          strokeLinecap="round"
        />
        {/* current dot */}
        <circle cx={curX} cy={currentY} r={6} fill="#fff" stroke={BLUE} strokeWidth={2.5} />
        {/* goal diamond */}
        <rect x={W - 25} y={goalY - 5} width={10} height={10} fill="#cbd5e1" transform={`rotate(45 ${W - 20} ${goalY})`} />
        {/* x axis labels */}
        <text x={26} y={H - 6} fontSize={10} fill={MUTED}>May</text>
        <text x={W * 0.35} y={H - 6} fontSize={10} fill={MUTED}>Jun</text>
        <text x={W * 0.62} y={H - 6} fontSize={10} fill={MUTED}>Jul</text>
        <text x={W - 30} y={H - 6} fontSize={10} fill={MUTED}>Aug</text>
      </svg>
      <div
        style={{
          marginTop: 8,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          borderTop: `1px solid ${BORDER}`,
          paddingTop: 12,
        }}
      >
        <TrendStat label="Start" value={start} color={MUTED} align="left" />
        <TrendStat label="Current" value={current} color={NAVY} align="center" />
        <TrendStat label="Goal" value={goal} color={BLUE} align="right" />
      </div>
    </div>
  );
}
function TrendStat({
  label,
  value,
  color,
  align,
}: {
  label: string;
  value: string;
  color: string;
  align: 'left' | 'center' | 'right';
}) {
  return (
    <div style={{ textAlign: align, fontFamily: FONT }}>
      <div style={{ fontSize: 12, color: MUTED, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 800, color }}>{value}</div>
    </div>
  );
}

// ---------- Photos ----------
export interface PhotosComparePairProps {
  leftSrc?: string | null;
  leftDate?: string;
  rightSrc?: string | null;
  rightDate?: string;
  rightState?: 'photo' | 'empty' | 'overdue-empty';
  showViewGallery?: boolean;
}
export function PhotosComparePair({
  leftSrc,
  leftDate = '12 May 2025',
  rightSrc,
  rightDate = 'Today',
  rightState = 'photo',
  showViewGallery = true,
}: PhotosComparePairProps) {
  return (
    <div style={{ width: 328, fontFamily: FONT }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontSize: 20, fontWeight: 800, color: NAVY }}>Photos</span>
        {rightState === 'overdue-empty' ? (
          <span
            style={{
              background: '#fef3c7',
              color: '#b45309',
              fontSize: 12,
              fontWeight: 600,
              padding: '4px 10px',
              borderRadius: 9999,
            }}
          >
            Overdue
          </span>
        ) : showViewGallery ? (
          <span style={{ fontSize: 14, fontWeight: 700, color: NAVY, textDecoration: 'underline' }}>View Gallery</span>
        ) : null}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <PhotoSlot src={leftSrc} date={leftDate} />
        <ArrowRight />
        {rightState === 'photo' ? (
          <PhotoSlot src={rightSrc} date={rightDate} />
        ) : rightState === 'overdue-empty' ? (
          <AddPhotoSlot variant="overdue" />
        ) : (
          <AddPhotoSlot variant="dashed" />
        )}
      </div>
    </div>
  );
}

function PhotoSlot({ src, date }: { src?: string | null; date: string }) {
  return (
    <div
      style={{
        flex: 1,
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 14,
        overflow: 'hidden',
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          aspectRatio: '1 / 1',
          background: src ? `center/cover url(${src})` : '#e5e7eb',
        }}
      />
      <div style={{ padding: '10px 12px', fontSize: 13, fontWeight: 600, color: INK, textAlign: 'center' }}>
        {date}
      </div>
    </div>
  );
}

function AddPhotoSlot({ variant }: { variant: 'dashed' | 'overdue' }) {
  return (
    <div
      style={{
        flex: 1,
        background: variant === 'overdue' ? CARD : 'transparent',
        border: `1.5px dashed rgba(15,23,42,0.25)`,
        borderRadius: 14,
        overflow: 'hidden',
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          aspectRatio: '1 / 1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 9999,
            background: BLUE,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CameraPlusIcon color="#fff" />
        </div>
      </div>
      <div style={{ padding: '10px 12px', fontSize: 13, fontWeight: 600, color: INK, textAlign: 'center' }}>
        Add photo
      </div>
    </div>
  );
}

// ---------- AddPhotoButton ----------
export function AddPhotoButton({ label = 'Add photo' }: { label?: string }) {
  return (
    <button
      type="button"
      style={{
        width: 328,
        height: 52,
        borderRadius: 9999,
        border: `1px solid ${BORDER}`,
        background: CARD,
        color: INK,
        fontFamily: FONT,
        fontSize: 15,
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        cursor: 'pointer',
      }}
    >
      <CameraPlusIcon /> {label}
    </button>
  );
}

// ---------- RecentLogsList ----------
export interface RecentLog {
  weight: string; // "74.8 kg"
  time: string; // "8:26 AM, 7 Mar"
}
export function RecentLogsList({
  title = 'Recent logs',
  items = [
    { weight: '74.8 kg', time: '8:26 AM, 7 Mar' },
    { weight: '75.4 kg', time: '7:58 AM, 3 Mar' },
  ],
}: {
  title?: string;
  items?: RecentLog[];
}) {
  return (
    <div style={{ width: 328, fontFamily: FONT }}>
      <div style={{ fontSize: 20, fontWeight: 800, color: NAVY, marginBottom: 10 }}>{title}</div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16 }}>
        {items.map((it, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '14px 16px',
              borderBottom: i === items.length - 1 ? 'none' : `1px solid ${BORDER}`,
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: NAVY }}>{it.weight}</div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>{it.time}</div>
            </div>
            <button type="button" style={{ border: 0, background: 'transparent', padding: 6, cursor: 'pointer' }}>
              <KebabIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- PhotoGalleryCarousel (full screen) ----------
export interface PhotoGalleryCarouselProps {
  src?: string;
  date?: string;
  index?: number; // 0..total-1
  total?: number;
  showCoachmark?: boolean;
}
export function PhotoGalleryCarousel({
  src,
  date = 'Today',
  index = 0,
  total = 5,
  showCoachmark = false,
}: PhotoGalleryCarouselProps) {
  return (
    <div
      style={{
        width: 360,
        height: 800,
        background: '#050914',
        color: '#fff',
        fontFamily: FONT,
        position: 'relative',
        boxSizing: 'border-box',
        padding: '48px 0 0 0',
      }}
    >
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', marginBottom: 16 }}>
        <button
          type="button"
          aria-label="back"
          style={{ border: 0, background: 'transparent', padding: 8, cursor: 'pointer' }}
        >
          <ArrowLeft />
        </button>
        <div style={{ fontSize: 20, fontWeight: 700, marginLeft: 4 }}>Photos</div>
        <div style={{ flex: 1 }} />
        <ViewToggle mode="carousel" />
      </div>
      {/* Photo card */}
      <div style={{ padding: '60px 16px 0 16px', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: 280,
            aspectRatio: '3 / 4',
            borderRadius: 18,
            background: src ? `center/cover url(${src})` : '#1f2937',
          }}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: 18, fontSize: 15 }}>{date}</div>
      {/* Dots */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 20 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: 9999,
              background: i === index ? '#fff' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>
      {showCoachmark && <CoachmarkTooltip />}
    </div>
  );
}

function ViewToggle({ mode }: { mode: 'tile' | 'carousel' }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 9999,
        background: 'rgba(255,255,255,0.12)',
        padding: 4,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 9999,
          background: mode === 'tile' ? '#fff' : 'transparent',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <GridIcon color={mode === 'tile' ? NAVY : '#fff'} />
      </div>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 9999,
          background: mode === 'carousel' ? '#fff' : 'transparent',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ViewIcon color={mode === 'carousel' ? NAVY : '#fff'} />
      </div>
    </div>
  );
}

function CoachmarkTooltip() {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 120,
        transform: 'translateX(-50%)',
        background: '#1f2937',
        color: '#fff',
        borderRadius: 9999,
        padding: '10px 16px',
        fontSize: 13,
        fontFamily: FONT,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      Hold and drag the dots to scroll
      <XIcon color="#fff" />
    </div>
  );
}

// ---------- LogWeightSheet ----------
export function LogWeightSheet({
  value = '',
  dateLabel = 'Today, 7:30 AM',
}: {
  value?: string;
  dateLabel?: string;
}) {
  const enabled = value.trim().length > 0;
  return (
    <div
      style={{
        width: 360,
        boxSizing: 'border-box',
        background: BG,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        fontFamily: FONT,
        paddingBottom: 20,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 20px 4px 20px' }}>
        <div style={{ flex: 1, fontSize: 15, fontWeight: 500, color: INK }}>Log weight</div>
        <button type="button" aria-label="close" style={{ border: 0, background: 'transparent', cursor: 'pointer' }}>
          <XIcon />
        </button>
      </div>
      {/* Inner white card */}
      <div
        style={{
          margin: '20px 28px 0 28px',
          background: CARD,
          borderRadius: 22,
          padding: 18,
          boxShadow: '0 6px 18px rgba(15,23,42,0.06)',
        }}
      >
        {/* Numeric display */}
        <div
          style={{
            background: BG,
            borderRadius: 14,
            padding: '28px 16px',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            gap: 6,
            marginBottom: 12,
          }}
        >
          <span style={{ fontSize: 54, fontWeight: 700, color: enabled ? NAVY : 'rgba(15,23,42,0.35)' }}>
            {value || '000'}
          </span>
          <span style={{ fontSize: 16, fontWeight: 700, color: 'rgba(15,23,42,0.5)' }}>kg</span>
        </div>
        {/* Date pill */}
        <div
          style={{
            background: BG,
            borderRadius: 12,
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ flex: 1, fontSize: 15, color: INK }}>{dateLabel}</span>
          <PencilIcon />
        </div>
      </div>
      {/* CTA */}
      <div style={{ padding: '24px 16px 0 16px' }}>
        <button
          type="button"
          disabled={!enabled}
          style={{
            width: '100%',
            height: 56,
            border: 0,
            borderRadius: 9999,
            background: enabled ? NAVY : 'rgba(15,23,42,0.18)',
            color: enabled ? '#fff' : 'rgba(15,23,42,0.55)',
            fontSize: 16,
            fontWeight: 700,
            fontFamily: FONT,
            cursor: enabled ? 'pointer' : 'default',
          }}
        >
          Log weight
        </button>
      </div>
    </div>
  );
}

// ---------- DeleteLogDialog ----------
export function DeleteLogDialog({
  title = 'Do you want to delete this log?',
}: {
  title?: string;
}) {
  return (
    <div
      style={{
        width: 328,
        boxSizing: 'border-box',
        background: CARD,
        borderRadius: 18,
        padding: 24,
        fontFamily: FONT,
        boxShadow: '0 12px 40px rgba(5,9,20,0.25)',
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 800, color: NAVY, lineHeight: '28px', marginBottom: 24 }}>{title}</div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
        <button
          type="button"
          style={{
            border: `1px solid ${BORDER}`,
            background: CARD,
            color: BLUE,
            fontSize: 15,
            fontWeight: 700,
            padding: '12px 24px',
            borderRadius: 9999,
            cursor: 'pointer',
            fontFamily: FONT,
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          style={{
            border: 0,
            background: '#ef4444',
            color: '#fff',
            fontSize: 15,
            fontWeight: 700,
            padding: '12px 28px',
            borderRadius: 9999,
            cursor: 'pointer',
            fontFamily: FONT,
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// ---------- WeightLoggedSuccess ----------
export function WeightLoggedSuccess({ label = 'Weight logged' }: { label?: string }) {
  return (
    <div
      style={{
        width: 360,
        height: 800,
        background: '#159a4a',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        fontFamily: FONT,
      }}
    >
      <svg width={72} height={72} viewBox="0 0 72 72" fill="none" aria-hidden>
        <path d="M18 38l12 12 24-28" stroke="#fff" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ fontSize: 22, fontWeight: 700 }}>{label}</div>
    </div>
  );
}
