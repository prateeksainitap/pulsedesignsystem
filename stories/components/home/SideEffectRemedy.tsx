import React from 'react';

/**
 * Side Effect Remedy — from WeightEasy Figma "Side effect remedy / Horizontal" (8441:44384).
 * 328×268, padding 16, gap 16, radius 24, surface fill.
 * Section header (health-plus icon + UPPERCASE title + timestamp + more-vertical)
 * + description paragraph
 * + row of 3 remedy tiles (132×144, radius 16, bg #f2f5f9, padding 16, gap 8).
 * Each tile: 20px icon + title (14 SemiBold) + 14 regular description.
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

export interface Remedy {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export interface SideEffectRemedyProps {
  title?: string;
  timestamp?: string;
  description?: string;
  remedies?: Remedy[];
}

const HealthPlusIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M6 2h4v4h4v4h-4v4H6v-4H2V6h4V2Z" stroke="#3d4966" strokeWidth={1.5} strokeLinejoin="round" />
  </svg>
);

const MoreVerticalIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="5" r="2" fill="#252e49" />
    <circle cx="12" cy="12" r="2" fill="#252e49" />
    <circle cx="12" cy="19" r="2" fill="#252e49" />
  </svg>
);

const CoffeeIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 10h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z" stroke="#15803d" strokeWidth={1.5} strokeLinejoin="round" />
    <path d="M16 12h2a2 2 0 0 1 0 4h-2" stroke="#15803d" strokeWidth={1.5} strokeLinejoin="round" />
    <path d="M7 3c0 1 1 1 1 2s-1 1-1 2M11 3c0 1 1 1 1 2s-1 1-1 2" stroke="#15803d" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

const CrackerIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#15803d" strokeWidth={1.5} />
    <circle cx="8" cy="8" r="1" fill="#15803d" />
    <circle cx="16" cy="8" r="1" fill="#15803d" />
    <circle cx="8" cy="16" r="1" fill="#15803d" />
    <circle cx="16" cy="16" r="1" fill="#15803d" />
    <circle cx="12" cy="12" r="1" fill="#15803d" />
  </svg>
);

const defaults: Remedy[] = [
  { icon: <CoffeeIcon />, title: 'Ginger Tea', description: 'Sip slowly to calm stomach lining.' },
  { icon: <CrackerIcon />, title: 'Saltine Crackers', description: 'Dry carbs to absorb acidity.' },
  { icon: <CrackerIcon />, title: 'Saltine Crackers', description: 'Dry carbs to absorb acidity.' },
];

export function SideEffectRemedy({
  title = 'NAUSEA RELIEF',
  timestamp = 'Just now',
  description = "It's common to feel a little uneasy right after your dose. Let's settle your stomach.",
  remedies = defaults,
}: SideEffectRemedyProps) {
  return (
    <div
      style={{
        width: 328,
        boxSizing: 'border-box',
        padding: 16,
        borderRadius: 24,
        background: '#fdfdfd',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        fontFamily: FONT,
      }}
    >
      {/* Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', height: 20 }}>
        <div style={{ flex: 1, display: 'inline-flex', alignItems: 'center', gap: 2 }}>
          <HealthPlusIcon />
          <span
            style={{
              fontSize: 14,
              lineHeight: '20px',
              fontWeight: 600,
              color: 'var(--content-secondary, #3d4966)',
              letterSpacing: '0.04em',
            }}
          >
            {title}
          </span>
        </div>
        <span
          style={{
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 500,
            color: 'var(--content-secondary, #3d4966)',
            marginRight: 8,
          }}
        >
          {timestamp}
        </span>
        <MoreVerticalIcon />
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: 14,
          lineHeight: '20px',
          fontWeight: 400,
          color: 'var(--content-secondary, #3d4966)',
        }}
      >
        {description}
      </div>

      {/* Remedies row */}
      <div style={{ display: 'flex', gap: 4 }}>
        {remedies.slice(0, 3).map((r, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              boxSizing: 'border-box',
              padding: 16,
              borderRadius: 16,
              background: 'var(--surface-muted, #f2f5f9)',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              minHeight: 144,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {r.icon ?? <CoffeeIcon />}
              <div
                style={{
                  fontSize: 14,
                  lineHeight: '20px',
                  fontWeight: 600,
                  color: 'var(--content-primary, #18203a)',
                }}
              >
                {r.title}
              </div>
            </div>
            <div
              style={{
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 400,
                color: 'var(--content-secondary, #3d4966)',
              }}
            >
              {r.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
