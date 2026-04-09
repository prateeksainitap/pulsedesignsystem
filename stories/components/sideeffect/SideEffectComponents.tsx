import React from 'react';

/**
 * Side Effect components (WeightEasy Track → Side Effects).
 * Figma section: 8708:44335. Built from rendered frames, not text specs.
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";
const NAVY = '#050914';
const INK = '#1f2937';
const MUTED = '#6b7280';
const BG = '#eff6ff';
const CARD = '#fdfdfd';
const BORDER = 'rgba(15,23,42,0.08)';
const BLUE = '#2563eb';

// ---------- Shared ----------
const XIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 6l12 12M18 6L6 18" stroke={NAVY} strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const SparkleIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 3l1.8 4.8L18.6 9 13.8 10.2 12 15l-1.8-4.8L5.4 9l4.8-1.2L12 3z" fill="#6366f1" />
    <path d="M19 14l.8 2 2 .8-2 .8L19 19.6 18.2 17.6 16.2 16.8l2-0.8L19 14z" fill="#6366f1" />
  </svg>
);

const ArrowRight = ({ color = '#fff' }: { color?: string }) => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M5 12h14M13 5l7 7-7 7" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = ({ size = 72, color = '#fff' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 72 72" fill="none" aria-hidden>
    <path d="M18 38l12 12 24-28" stroke={color} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ---------- FeelingTodayCard ----------
export interface FeelingTodayCardProps {
  title?: string;
  okayLabel?: string;
  badLabel?: string;
  okayEmoji?: string;
  badEmoji?: string;
  selected?: 'okay' | 'bad' | null;
}
export function FeelingTodayCard({
  title = 'How are you feeling today?',
  okayLabel = "I\u2019m okay",
  badLabel = 'Not feeling good',
  okayEmoji = '\uD83D\uDE03',
  badEmoji = '\uD83D\uDE2B',
  selected = null,
}: FeelingTodayCardProps) {
  return (
    <div
      style={{
        width: 328,
        boxSizing: 'border-box',
        padding: 20,
        borderRadius: 16,
        background: CARD,
        border: '1.5px solid transparent',
        backgroundImage: `linear-gradient(${CARD}, ${CARD}), linear-gradient(135deg, #7dd3fc 0%, #a78bfa 100%)`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        fontFamily: FONT,
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 16, lineHeight: '28px' }}>
        {title}
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <FeelingTile emoji={okayEmoji} label={okayLabel} selected={selected === 'okay'} />
        <FeelingTile emoji={badEmoji} label={badLabel} selected={selected === 'bad'} />
      </div>
    </div>
  );
}

function FeelingTile({ emoji, label, selected }: { emoji: string; label: string; selected?: boolean }) {
  return (
    <div
      style={{
        flex: 1,
        padding: '18px 12px',
        borderRadius: 14,
        background: CARD,
        border: `1px solid ${selected ? BLUE : BORDER}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        boxSizing: 'border-box',
      }}
    >
      <div style={{ fontSize: 32, lineHeight: 1 }}>{emoji}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: INK }}>{label}</div>
    </div>
  );
}

// ---------- CoachInsightCard ----------
export interface CoachInsightCardProps {
  label?: string;
  body?: React.ReactNode;
  cta?: string;
}
export function CoachInsightCard({
  label = 'Coach Insight',
  body = (
    <>
      Your <span style={{ color: BLUE }}>nausea typically peaks 12-24 hours</span> after injection.
      We noticed the intensity increased by 40% after your dosage escalation to 0.50 mg.
    </>
  ),
  cta = 'Ask Coach about this',
}: CoachInsightCardProps) {
  return (
    <div
      style={{
        width: 328,
        boxSizing: 'border-box',
        padding: 20,
        borderRadius: 16,
        background: CARD,
        border: '1.5px solid transparent',
        backgroundImage: `linear-gradient(${CARD}, ${CARD}), linear-gradient(135deg, #7dd3fc 0%, #a78bfa 100%)`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        fontFamily: FONT,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
        <SparkleIcon />
        <span style={{ fontSize: 14, fontWeight: 700, color: '#6366f1' }}>{label}</span>
      </div>
      <div style={{ fontSize: 19, lineHeight: '26px', fontWeight: 500, color: NAVY, marginBottom: 18 }}>{body}</div>
      <button
        type="button"
        style={{
          width: '100%',
          height: 52,
          border: 0,
          borderRadius: 9999,
          background: NAVY,
          color: '#fff',
          fontSize: 15,
          fontWeight: 600,
          fontFamily: FONT,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          cursor: 'pointer',
        }}
      >
        {cta} <ArrowRight />
      </button>
    </div>
  );
}

// ---------- SideEffectTile (grid item) ----------
export interface SideEffectTileProps {
  emoji: string;
  label: string;
  selected?: boolean;
  icon?: React.ReactNode; // e.g. a Plus for "Something else"
}
export function SideEffectTile({ emoji, label, selected, icon }: SideEffectTileProps) {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        padding: '18px 12px',
        borderRadius: 16,
        background: CARD,
        border: `1.5px solid ${selected ? BLUE : BORDER}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        fontFamily: FONT,
        minHeight: 108,
        justifyContent: 'center',
      }}
    >
      <div style={{ fontSize: 30, lineHeight: 1 }}>{icon ?? emoji}</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: INK, textAlign: 'center' }}>{label}</div>
    </div>
  );
}

const PlusGlyph = () => (
  <svg width={30} height={30} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 5v14M5 12h14" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
  </svg>
);

// ---------- SideEffectGrid Sheet ----------
export interface SideEffectGridSheetProps {
  title?: string;
  items?: { emoji: string; label: string; selected?: boolean; isOther?: boolean }[];
  ctaLabel?: string;
  ctaEnabled?: boolean;
}
const DEFAULT_ITEMS = [
  { emoji: '\uD83E\uDD22', label: 'Nausea' },
  { emoji: '\uD83E\uDD71', label: 'Fatigue' },
  { emoji: '\uD83D\uDD25', label: 'Heartburn' },
  { emoji: '\uD83D\uDE23', label: 'Constipation' },
  { emoji: '\uD83C\uDF88', label: 'Bloating' },
  { emoji: '\uD83D\uDC68\u200D\uD83E\uDDB2', label: 'Hair Loss' },
  { emoji: '\uD83D\uDCAA', label: 'Muscle Loss' },
  { emoji: '\uD83D\uDC89', label: 'Shot Anxiety' },
  { emoji: '\uD83E\uDEE0', label: 'Loose skin' },
  { emoji: '\uD83E\uDE79', label: 'Headache' },
];

export function SideEffectGridSheet({
  title = 'Are you experiencing any side effects?',
  items = DEFAULT_ITEMS,
  ctaLabel = 'Select severity',
  ctaEnabled = false,
}: SideEffectGridSheetProps) {
  return (
    <div
      style={{
        width: 360,
        boxSizing: 'border-box',
        background: BG,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        fontFamily: FONT,
        paddingBottom: 16,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 20px 4px 20px' }}>
        <div style={{ flex: 1, fontSize: 15, fontWeight: 500, color: INK }}>Log side effects</div>
        <button type="button" aria-label="close" style={{ border: 0, background: 'transparent', cursor: 'pointer' }}>
          <XIcon />
        </button>
      </div>
      {/* Title */}
      <div style={{ padding: '20px 20px 20px 20px', fontSize: 28, lineHeight: '34px', fontWeight: 800, color: NAVY }}>
        {title}
      </div>
      {/* Grid */}
      <div
        style={{
          padding: '0 16px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
        }}
      >
        {items.map((it, i) => (
          <SideEffectTile
            key={i}
            emoji={it.emoji}
            label={it.label}
            selected={it.selected}
            icon={it.isOther ? <PlusGlyph /> : undefined}
          />
        ))}
      </div>
      {/* CTA */}
      <div style={{ padding: 16 }}>
        <button
          type="button"
          disabled={!ctaEnabled}
          style={{
            width: '100%',
            height: 56,
            borderRadius: 9999,
            border: 0,
            background: ctaEnabled ? NAVY : 'rgba(15,23,42,0.18)',
            color: ctaEnabled ? '#fff' : 'rgba(15,23,42,0.55)',
            fontSize: 16,
            fontWeight: 700,
            fontFamily: FONT,
            cursor: ctaEnabled ? 'pointer' : 'default',
          }}
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

// ---------- AddOtherDialog ----------
export function AddOtherDialog({
  value = '',
  placeholder = 'Enter your side effect',
}: {
  value?: string;
  placeholder?: string;
}) {
  const enabled = value.trim().length > 0;
  return (
    <div
      style={{
        width: 328,
        boxSizing: 'border-box',
        background: CARD,
        borderRadius: 16,
        padding: 20,
        fontFamily: FONT,
        boxShadow: '0 12px 40px rgba(5,9,20,0.25)',
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 700, color: INK, marginBottom: 12 }}>Side effect</div>
      <div
        style={{
          height: 48,
          borderRadius: 9999,
          background: '#fafafa',
          border: `1px solid ${BORDER}`,
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          color: value ? INK : '#9ca3af',
          fontSize: 15,
        }}
      >
        {value || placeholder}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
        <button
          type="button"
          style={{
            border: 0,
            background: 'transparent',
            color: INK,
            fontSize: 15,
            fontWeight: 700,
            padding: '10px 18px',
            cursor: 'pointer',
            fontFamily: FONT,
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          disabled={!enabled}
          style={{
            border: 0,
            borderRadius: 9999,
            background: enabled ? BLUE : '#eef2f7',
            color: enabled ? '#fff' : '#9ca3af',
            fontSize: 15,
            fontWeight: 700,
            padding: '12px 36px',
            cursor: enabled ? 'pointer' : 'default',
            fontFamily: FONT,
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

// ---------- SeveritySlider + SeveritySheet ----------
export interface SeveritySliderProps {
  emoji?: string;
  name?: string;
  value?: number; // 0..100
}
export function SeveritySliderCard({ emoji = '\uD83E\uDD22', name = 'Nausea', value = 0 }: SeveritySliderProps) {
  const label = value < 34 ? 'Mild' : value < 67 ? 'Moderate' : 'Severe';
  return (
    <div
      style={{
        width: 328,
        boxSizing: 'border-box',
        background: CARD,
        borderRadius: 16,
        border: `1px solid ${BORDER}`,
        padding: 18,
        fontFamily: FONT,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 22 }}>{emoji}</span>
        <span style={{ fontSize: 18, fontWeight: 800, color: NAVY }}>{name}</span>
      </div>
      {/* Track */}
      <div style={{ position: 'relative', height: 24, marginBottom: 8 }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 10,
            height: 4,
            borderRadius: 4,
            background: '#e5e7eb',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            width: `calc(${value}% + 12px)`,
            top: 10,
            height: 4,
            borderRadius: 4,
            background: BLUE,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: `calc(${value}% )`,
            top: 0,
            width: 24,
            height: 24,
            borderRadius: 9999,
            background: CARD,
            border: `2px solid ${BLUE}`,
            transform: 'translateX(0)',
            boxSizing: 'border-box',
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600 }}>
        <span style={{ color: label === 'Mild' ? BLUE : MUTED }}>Mild</span>
        <span style={{ color: label === 'Moderate' ? BLUE : MUTED }}>Moderate</span>
        <span style={{ color: label === 'Severe' ? BLUE : MUTED }}>Severe</span>
      </div>
    </div>
  );
}

export interface SeveritySheetProps {
  title?: string;
  items?: SeveritySliderProps[];
  ctaLabel?: string;
}
export function SeveritySheet({
  title = 'How severe are your side effects?',
  items = [{ emoji: '\uD83E\uDD22', name: 'Nausea', value: 0 }],
  ctaLabel = 'Log 1 side effect',
}: SeveritySheetProps) {
  return (
    <div
      style={{
        width: 360,
        boxSizing: 'border-box',
        background: BG,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        fontFamily: FONT,
        paddingBottom: 16,
        minHeight: 560,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 20px 4px 20px' }}>
        <div style={{ flex: 1, fontSize: 15, fontWeight: 500, color: INK }}>Log side effects</div>
        <button type="button" aria-label="close" style={{ border: 0, background: 'transparent', cursor: 'pointer' }}>
          <XIcon />
        </button>
      </div>
      <div style={{ padding: '20px 20px 24px 20px', fontSize: 28, lineHeight: '34px', fontWeight: 800, color: NAVY }}>
        {title}
      </div>
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((it, i) => (
          <SeveritySliderCard key={i} {...it} />
        ))}
        <button
          type="button"
          style={{
            width: '100%',
            height: 56,
            borderRadius: 9999,
            background: 'transparent',
            border: `1px solid ${BORDER}`,
            color: INK,
            fontSize: 15,
            fontWeight: 700,
            fontFamily: FONT,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: 18 }}>+</span> Add more side effects
        </button>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ padding: 16 }}>
        <button
          type="button"
          style={{
            width: '100%',
            height: 56,
            borderRadius: 9999,
            border: 0,
            background: NAVY,
            color: '#fff',
            fontSize: 16,
            fontWeight: 700,
            fontFamily: FONT,
            cursor: 'pointer',
          }}
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

// ---------- SideEffectsLoggedSuccess ----------
export function SideEffectsLoggedSuccess({
  label = 'Side effects logged',
}: {
  label?: string;
}) {
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
      <CheckIcon />
      <div style={{ fontSize: 22, fontWeight: 700 }}>{label}</div>
    </div>
  );
}

// ---------- FeelingBetterCard (follow-up) ----------
export function FeelingBetterCard({
  title = 'Are you feeling better now?',
  okayLabel = 'I feel better',
  badLabel = 'Not yet',
}: {
  title?: string;
  okayLabel?: string;
  badLabel?: string;
}) {
  return (
    <FeelingTodayCard
      title={title}
      okayLabel={okayLabel}
      badLabel={badLabel}
      okayEmoji={'\uD83D\uDE03'}
      badEmoji={'\uD83D\uDE2B'}
    />
  );
}

// ---------- RemedyCard ----------
const TeaIcon = () => (
  <svg width={40} height={40} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 8h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z" stroke="#15803d" strokeWidth={1.8} />
    <path d="M16 10h2a2 2 0 1 1 0 4h-2" stroke="#15803d" strokeWidth={1.8} />
    <path d="M6 5c0 1 1 1.5 1 2.5S6 9 6 10" stroke="#15803d" strokeWidth={1.8} strokeLinecap="round" />
    <path d="M10 5c0 1 1 1.5 1 2.5S10 9 10 10" stroke="#15803d" strokeWidth={1.8} strokeLinecap="round" />
  </svg>
);

export interface RemedySheetProps {
  title?: string;
  description?: string;
  prep?: string;
  serves?: string;
  ingredients?: { name: string; qty: string }[];
  steps?: string[];
  ctaLabel?: string;
}

export function RemedySheet({
  title = 'Ginger Tea',
  description = "Ginger helps calm the nausea and slow gastric emptying that GLP-1 medications can amplify. Skip the honey if you\u2019re watching blood sugar closely.",
  prep = '5 min',
  serves = '1 cup',
  ingredients = [
    { name: 'Grated Ginger', qty: '2 tsp' },
    { name: 'Hot water', qty: '8 oz' },
    { name: 'Juiced lemon', qty: '1' },
    { name: 'Raw Honey', qty: '1 tsp' },
    { name: 'Cinnamon stick', qty: '1 small' },
  ],
  steps = [
    'Soak a bowl of chana for atleast 8 hours before cooking',
    'Boil the water and add grated ginger. Simmer for 3 minutes.',
    'Add lemon juice, honey and the cinnamon stick. Steep 2 minutes.',
  ],
  ctaLabel = 'Okay',
}: RemedySheetProps) {
  return (
    <div
      style={{
        width: 360,
        boxSizing: 'border-box',
        background: BG,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        fontFamily: FONT,
        paddingBottom: 16,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 20px 4px 20px' }}>
        <div style={{ flex: 1, fontSize: 15, fontWeight: 500, color: INK }}>Remedy</div>
        <button type="button" aria-label="close" style={{ border: 0, background: 'transparent', cursor: 'pointer' }}>
          <XIcon />
        </button>
      </div>
      <div style={{ padding: '12px 20px 8px 20px' }}>
        <TeaIcon />
      </div>
      <div style={{ padding: '4px 20px 10px 20px', fontSize: 30, fontWeight: 800, color: NAVY, lineHeight: '36px' }}>
        {title}
      </div>
      <div style={{ padding: '0 20px 18px 20px', fontSize: 14, lineHeight: '20px', color: MUTED }}>
        {description}
      </div>
      {/* Prep / Serves row */}
      <div style={{ padding: '0 16px' }}>
        <div
          style={{
            display: 'flex',
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
            overflow: 'hidden',
          }}
        >
          <div style={{ flex: 1, padding: 16, textAlign: 'center', borderRight: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: MUTED, marginBottom: 4 }}>Prep</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: NAVY }}>{prep}</div>
          </div>
          <div style={{ flex: 1, padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: MUTED, marginBottom: 4 }}>Serves</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: NAVY }}>{serves}</div>
          </div>
        </div>
      </div>
      {/* Ingredients */}
      <div style={{ padding: '24px 20px 0 20px', fontSize: 20, fontWeight: 800, color: NAVY }}>Ingredients</div>
      <div style={{ padding: '12px 20px 0 20px' }}>
        {ingredients.map((ing, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: i === ingredients.length - 1 ? 'none' : `1px solid ${BORDER}`,
              fontSize: 14,
              color: INK,
            }}
          >
            <span>{ing.name}</span>
            <span style={{ color: MUTED }}>{ing.qty}</span>
          </div>
        ))}
      </div>
      {/* Method */}
      <div style={{ padding: '20px 20px 0 20px', fontSize: 20, fontWeight: 800, color: NAVY }}>Method</div>
      <div style={{ padding: '12px 16px 16px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {steps.map((s, i) => (
          <div
            key={i}
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, color: MUTED, marginBottom: 4 }}>{`Step ${i + 1}`}</div>
            <div style={{ fontSize: 14, color: INK, lineHeight: '20px' }}>{s}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: 16 }}>
        <button
          type="button"
          style={{
            width: '100%',
            height: 56,
            borderRadius: 9999,
            border: 0,
            background: NAVY,
            color: '#fff',
            fontSize: 16,
            fontWeight: 700,
            fontFamily: FONT,
            cursor: 'pointer',
          }}
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

// ---------- RemedyTile + RemediesRow ----------
const CupGlyph = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 8h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z" stroke="#15803d" strokeWidth={1.8} />
    <path d="M16 10h2a2 2 0 1 1 0 4h-2" stroke="#15803d" strokeWidth={1.8} />
    <path d="M7 4c0 1 1 1.5 1 2.5S7 8 7 9" stroke="#15803d" strokeWidth={1.8} strokeLinecap="round" />
    <path d="M11 4c0 1 1 1.5 1 2.5S11 8 11 9" stroke="#15803d" strokeWidth={1.8} strokeLinecap="round" />
  </svg>
);
const CrackerGlyph = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="4" y="5" width="16" height="3.5" rx="1" stroke="#15803d" strokeWidth={1.6} />
    <rect x="4" y="10" width="16" height="3.5" rx="1" stroke="#15803d" strokeWidth={1.6} />
    <rect x="4" y="15" width="16" height="3.5" rx="1" stroke="#15803d" strokeWidth={1.6} />
  </svg>
);

export interface RemedyTileProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}
export function RemedyTile({ icon = <CupGlyph />, title, description }: RemedyTileProps) {
  return (
    <div
      style={{
        flex: '0 0 156px',
        minWidth: 156,
        boxSizing: 'border-box',
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 14,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        fontFamily: FONT,
      }}
    >
      {icon}
      <div style={{ fontSize: 17, fontWeight: 800, color: NAVY, lineHeight: '22px' }}>{title}</div>
      <div style={{ fontSize: 13, lineHeight: '18px', color: MUTED }}>{description}</div>
    </div>
  );
}

export interface RemediesRowProps {
  title?: string;
  intro?: string;
  items?: RemedyTileProps[];
}
export function RemediesRow({
  title = 'Remedies to feel better',
  intro = "It\u2019s common to feel a little uneasy right after your dose. Let\u2019s settle your stomach.",
  items = [
    { icon: <CupGlyph />, title: 'Ginger Tea', description: 'Sip slowly to calm stomach lining.' },
    { icon: <CrackerGlyph />, title: 'Saltine Crackers', description: 'Dry carbs to absorb acidity.' },
    { icon: <CrackerGlyph />, title: 'Saltine Crackers', description: 'Dry carbs to absorb acidity.' },
  ],
}: RemediesRowProps) {
  return (
    <div style={{ width: 360, boxSizing: 'border-box', padding: '0 16px', fontFamily: FONT }}>
      <div style={{ fontSize: 20, fontWeight: 800, color: NAVY, marginBottom: 10 }}>{title}</div>
      <div
        style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          padding: 16,
        }}
      >
        <div style={{ fontSize: 14, lineHeight: '20px', color: MUTED, marginBottom: 14 }}>{intro}</div>
        <div
          style={{
            display: 'flex',
            gap: 10,
            overflowX: 'auto',
            paddingBottom: 4,
          }}
        >
          {items.map((it, i) => (
            <RemedyTile key={i} {...it} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- FeelingOkayCard (empty state) ----------
export function FeelingOkayCard({
  emoji = '\uD83D\uDE04',
  greeting = 'Thanks for checking in, Fahim',
  body = "Glad you\u2019re feeling okay!",
}: {
  emoji?: string;
  greeting?: string;
  body?: string;
}) {
  return (
    <div
      style={{
        width: 328,
        boxSizing: 'border-box',
        padding: '28px 20px',
        borderRadius: 16,
        background: CARD,
        border: '1.5px solid transparent',
        backgroundImage: `linear-gradient(${CARD}, ${CARD}), linear-gradient(180deg, #86efac 0%, #16a34a 100%)`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        fontFamily: FONT,
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 48, marginBottom: 12, lineHeight: 1 }}>{emoji}</div>
      <div style={{ fontSize: 14, color: MUTED, marginBottom: 6 }}>{greeting}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: NAVY }}>{body}</div>
    </div>
  );
}
