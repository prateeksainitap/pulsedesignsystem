import React from 'react';
import { Button } from './Button';
import watermark from '../assets/dose-watermark.svg';

/**
 * Dose Card — 1:1 mirror of Figma componentSet 9070:116138 ("Dose Card").
 *
 * Four State variants (Figma):
 *   - DueToday (328 × 186) — surface/container, eyebrow + title + progress
 *     bar + "Log dose" button, syringe watermark.
 *   - Upcoming (328 × 118) — surface/container, eyebrow + "in N days" +
 *     date title + progress bar, syringe watermark.
 *   - Logged   (328 × 96)  — color/green/100 bg, green 48px icon button
 *     + "Dose logged" + timestamp (horizontal layout).
 *   - Missed   (328 × 158) — color/red/50 bg, "Dose missed" + "Due …"
 *     subtitle + "Log late dose" button (arrow-right icon).
 *
 * All spacing, radii, colours and type wired to CSS variable tokens.
 */

// ─── Icons (exact Figma SVG paths) ─────────────────────────────────────

function SyringeIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
      <g stroke="var(--content-inverse)" strokeWidth={1.5}
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 11L16 13" />
        <path d="M12 13L14 15" />
        <path d="M19 11L12.1213 17.8787C10.9497 19.0503 9.05025 19.0503 7.87868 17.8787L6.12132 16.1213C4.94975 14.9497 4.94974 13.0503 6.12132 11.8787L13 5" />
        <path d="M19 5L16 8" />
        <path d="M11 3L21 13" />
        <path d="M7 16.9707L4 19.9707" />
        <path d="M21 7L17 3" />
      </g>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
      <g stroke="var(--content-inverse)" strokeWidth={1.8}
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </g>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="var(--content-inverse)"
            strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
         stroke="var(--content-secondary)" strokeWidth={1.8}
         strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx={12} cy={12} r={9} />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function MoreVerticalIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx={12} cy={5}  r={1.8} fill="var(--content-primary)" />
      <circle cx={12} cy={12} r={1.8} fill="var(--content-primary)" />
      <circle cx={12} cy={19} r={1.8} fill="var(--content-primary)" />
    </svg>
  );
}

// ─── Shared sub-components ─────────────────────────────────────────────

const CARD_BASE: React.CSSProperties = {
  position: 'relative',
  width: 328,
  boxSizing: 'border-box',
  padding: 'var(--space-24)',
  borderRadius: 'var(--radius-3xl)',
  overflow: 'hidden',
  fontFamily: "var(--font-family, 'Noto Sans', -apple-system, system-ui, sans-serif)",
};

function Watermark() {
  return (
    <img
      src={watermark} alt="" aria-hidden
      style={{
        position: 'absolute',
        top: -25, left: 233,
        width: 101, height: 122,
        opacity: 0.05,
        pointerEvents: 'none',
      }}
    />
  );
}

const DOSE_BAR_CSS = `
@keyframes dose-bar-fill { from { width: 0%; } to { width: var(--dose-bar-target); } }
.dose-bar-fill { animation: dose-bar-fill 1000ms cubic-bezier(0.22, 1, 0.36, 1) 200ms both; }
`;
function ProgressBar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(1, value));
  return (
    <div
      style={{
        width: '100%', height: 6,
        borderRadius: 'var(--radius-full)',
        background: 'var(--color-neutral-100)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <style>{DOSE_BAR_CSS}</style>
      <div
        className="dose-bar-fill"
        style={{
          width: `${pct * 100}%`, height: '100%',
          borderRadius: 'var(--radius-full)',
          background:
            'radial-gradient(ellipse 120% 220% at 0% 50%, #5eead4 0%, #3b82f6 50%, #a78bfa 100%)',
          ['--dose-bar-target' as any]: `${pct * 100}%`,
        }}
      />
    </div>
  );
}

function SectionHeader({
  eyebrow, trailing,
}: { eyebrow: string; trailing?: React.ReactNode }) {
  return (
    <div
      style={{
        height: 'var(--space-20)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        <ClockIcon />
        <span
          style={{
            fontSize: 'var(--typo-title-sm-size)',
            lineHeight: 'var(--typo-title-sm-line-height)',
            letterSpacing: 'var(--typo-title-sm-letter-spacing)',
            fontWeight: 600,
            color: 'var(--content-secondary)',
          }}
        >
          {eyebrow}
        </span>
      </div>
      {trailing}
    </div>
  );
}

// ─── Public API ────────────────────────────────────────────────────────

export type DoseCardState = 'DueToday' | 'Upcoming' | 'Logged' | 'Missed';

export interface DoseCardProps {
  state?: DoseCardState;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  progress?: number;
  ctaLabel?: string;
  onCta?: () => void;
  onMore?: () => void;
  style?: React.CSSProperties;
}

export function DoseCard(props: DoseCardProps) {
  const { state = 'DueToday' } = props;
  if (state === 'DueToday')  return <DueTodayCard {...props} />;
  if (state === 'Upcoming')  return <UpcomingCard {...props} />;
  if (state === 'Logged')    return <LoggedCard {...props} />;
  /* Missed */               return <MissedCard {...props} />;
}

// ─── State=DueToday (328 × 186) ───────────────────────────────────────

function DueTodayCard({
  eyebrow = 'Next Dose - Ozempic \u2022 0.5mg',
  title = 'Due today',
  progress = 93.33 / 280,
  ctaLabel = 'Log dose',
  onCta, onMore, style,
}: DoseCardProps) {
  return (
    <div
      style={{
        ...CARD_BASE,
        background: 'var(--surface-container)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-16)',
        ...style,
      }}
    >
      <Watermark />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <SectionHeader eyebrow={eyebrow} />
        <div
          style={{
            fontSize: 'var(--typo-display-sm-size)',
            lineHeight: 'var(--typo-display-sm-line-height)',
            letterSpacing: 'var(--typo-display-sm-letter-spacing)',
            fontWeight: 700,
            color: 'var(--content-primary)',
          }}
        >
          {title}
        </div>
      </div>
      <ProgressBar value={progress} />
      <Button
        theme="weightEasy" variant="primary" size="M"
        onClick={onCta}
        leftIcon={<SyringeIcon />}
        label={ctaLabel}
        style={{ width: '100%', position: 'relative' }}
      />
    </div>
  );
}

// ─── State=Upcoming (328 × 118) ───────────────────────────────────────

function UpcomingCard({
  eyebrow = 'Next Dose',
  subtitle = 'in 5 days',
  title = 'Saturday, Mar 22',
  progress = 210 / 280,
  style,
}: DoseCardProps) {
  return (
    <div
      style={{
        ...CARD_BASE,
        background: 'var(--surface-container)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-16)',
        ...style,
      }}
    >
      <Watermark />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <SectionHeader
          eyebrow={eyebrow}
          trailing={
            <span
              style={{
                fontSize: 12, lineHeight: '16px', fontWeight: 500,
                color: 'var(--content-secondary)',
              }}
            >
              {subtitle}
            </span>
          }
        />
        <div
          style={{
            fontSize: 20, lineHeight: '28px', fontWeight: 700,
            color: 'var(--content-primary)',
          }}
        >
          {title}
        </div>
      </div>
      <ProgressBar value={progress} />
    </div>
  );
}

// ─── State=Logged (328 × 96) ──────────────────────────────────────────

function LoggedCard({
  title = 'Dose logged',
  subtitle = 'Today at 9:00 AM',
  style,
}: DoseCardProps) {
  return (
    <div
      style={{
        ...CARD_BASE,
        background: 'var(--color-green-100)',
        display: 'flex', flexDirection: 'row',
        alignItems: 'center', gap: 'var(--space-12)',
        ...style,
      }}
    >
      <div
        style={{
          width: 48, height: 48, flexShrink: 0,
          borderRadius: 'var(--radius-full)',
          background: 'var(--color-green-600)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <CheckIcon />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 16, lineHeight: '24px', fontWeight: 500,
            color: 'var(--color-green-800)',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 'var(--typo-title-sm-size)',
            lineHeight: 'var(--typo-title-sm-line-height)',
            fontWeight: 400,
            color: 'var(--content-tertiary)',
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}

// ─── State=Missed (328 × 158) ─────────────────────────────────────────

function MissedCard({
  title = 'Dose missed',
  subtitle = 'Due yesterday',
  ctaLabel = 'Log late dose',
  onCta, style,
}: DoseCardProps) {
  return (
    <div
      style={{
        ...CARD_BASE,
        background: 'var(--color-red-50)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-16)',
        ...style,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 22, lineHeight: '26px', fontWeight: 700,
            color: 'var(--color-red-900)',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 'var(--typo-title-sm-size)',
            lineHeight: 'var(--typo-title-sm-line-height)',
            fontWeight: 400,
            color: 'var(--content-tertiary)',
          }}
        >
          {subtitle}
        </div>
      </div>
      <Button
        theme="weightEasy" variant="primary" size="M"
        onClick={onCta}
        leftIcon={<ArrowRightIcon />}
        label={ctaLabel}
        style={{ width: '100%' }}
      />
    </div>
  );
}
