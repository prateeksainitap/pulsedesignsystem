import React from 'react';
import { BottomSheet } from './BottomSheet';
import { StrengthStepper } from './LogDoseSheets';

/**
 * Dose preference bottom sheets (WeightEasy Dose Tracker flow).
 *   - DosePreferencesSheet  (9822:86727): root "Dose preference" — Medication
 *     row (Wegovy, 2.5 mg) + Dose Cycle row (4 days, Next dose: Mon 12 Dec),
 *     each with a pencil edit icon.
 *   - UpdateMedicationSheet (9822:86923): back arrow, "What medication do you
 *     take?" dropdown + "What strength do you take?" stepper. CTA: Update
 *     medication.
 *   - UpdateCycleDaysSheet  (9822:87118): step 1 — vertical number picker
 *     1..5 with the active value paired with "days" card. CTA: Select dose
 *     day. Progress bar half-filled.
 *   - UpdateCycleWhenSheet  (9822:87313): step 2 — "When will you take your
 *     next dose?" Today pill with calendar icon. CTA: Update cycle. Progress
 *     bar full.
 *   - CycleUpdatedSheet     (9822:87703): centered green check + "Dose cycle
 *     updated" label.
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

const PencilIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 20h4l11-11-4-4L4 16v4z" stroke="#18203a" strokeWidth={1.6} strokeLinejoin="round" />
  </svg>
);

const CalendarIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="#18203a" strokeWidth={1.6} />
    <path d="M3 9h18M8 3v4M16 3v4" stroke="#18203a" strokeWidth={1.6} strokeLinecap="round" />
  </svg>
);

function PrefRow({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: '16px 20px',
        borderRadius: 16,
        background: '#fdfdfd',
        border: '1px solid var(--border-default, #dce1e8)',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontFamily: FONT,
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 16, fontWeight: 500, color: '#18203a' }}>{title}</div>
        <div style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>{subtitle}</div>
      </div>
      <button
        type="button"
        aria-label="edit"
        style={{
          width: 36,
          height: 36,
          borderRadius: 9999,
          border: 0,
          background: 'transparent',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <PencilIcon />
      </button>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 18,
        fontWeight: 700,
        color: '#050914',
        margin: '8px 0 12px',
        fontFamily: FONT,
      }}
    >
      {children}
    </div>
  );
}

export function DosePreferencesSheet() {
  return (
    <BottomSheet title="Dose preference" height={594}>
      <Label>Medication</Label>
      <PrefRow title="Wegovy" subtitle="2.5 mg" />
      <div style={{ height: 20 }} />
      <Label>Dose Cycle</Label>
      <PrefRow title="4 days" subtitle="Next dose: Monday, 12 Dec" />
    </BottomSheet>
  );
}

export function UpdateMedicationSheet() {
  return (
    <BottomSheet
      title="Dose preference"
      leadingIcon="back"
      cta="Update medication"
      height={594}
    >
      <Label>What medication do you take?</Label>
      <div
        style={{
          height: 56,
          boxSizing: 'border-box',
          padding: '0 20px',
          borderRadius: 9999,
          background: '#fdfdfd',
          border: '1px solid var(--border-default, #dce1e8)',
          display: 'flex',
          alignItems: 'center',
          fontSize: 16,
          color: '#18203a',
          marginBottom: 20,
          fontFamily: FONT,
        }}
      >
        <span style={{ flex: 1 }}>Wegovy</span>
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 9l6 6 6-6" stroke="#18203a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <Label>What strength do you take?</Label>
      <StrengthStepper />
    </BottomSheet>
  );
}

export function UpdateCycleDaysSheet() {
  const values = [1, 2, 3, 4, 5];
  const selected = 3;
  return (
    <BottomSheet
      title="Dose preference"
      leadingIcon="back"
      cta="Select dose day"
      progress={0.5}
      height={594}
    >
      <Label>How often do you take your dose?</Label>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          padding: '20px 0',
        }}
      >
        {values.map((v) => {
          const isSel = v === selected;
          const distance = Math.abs(v - selected);
          if (isSel) {
            return (
              <div key={v} style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: '#fdfdfd',
                    border: '1px solid var(--border-default, #dce1e8)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 28,
                    fontWeight: 700,
                    color: '#050914',
                    fontFamily: FONT,
                  }}
                >
                  {v}
                </div>
                <div
                  style={{
                    minWidth: 72,
                    height: 64,
                    padding: '0 16px',
                    borderRadius: 16,
                    background: '#fdfdfd',
                    border: '1px solid var(--border-default, #dce1e8)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#050914',
                    fontFamily: FONT,
                  }}
                >
                  days
                </div>
              </div>
            );
          }
          return (
            <div
              key={v}
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: '#cbd5e1',
                opacity: distance === 1 ? 0.8 : 0.45,
                fontFamily: FONT,
              }}
            >
              {v}
            </div>
          );
        })}
      </div>
    </BottomSheet>
  );
}

export function UpdateCycleWhenSheet() {
  return (
    <BottomSheet
      title="Dose preference"
      leadingIcon="back"
      cta="Update cycle"
      progress={1}
      height={594}
    >
      <Label>When will you take your next dose?</Label>
      <div
        style={{
          height: 56,
          boxSizing: 'border-box',
          padding: '0 20px',
          borderRadius: 9999,
          background: '#fdfdfd',
          border: '1px solid var(--border-default, #dce1e8)',
          display: 'flex',
          alignItems: 'center',
          fontSize: 16,
          color: '#18203a',
          fontFamily: FONT,
        }}
      >
        <span style={{ flex: 1 }}>Today</span>
        <CalendarIcon />
      </div>
    </BottomSheet>
  );
}

export function CycleUpdatedSheet() {
  return (
    <BottomSheet title="Dose preference" height={594}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          minHeight: 360,
        }}
      >
        <svg width={64} height={64} viewBox="0 0 72 72" fill="none" aria-hidden>
          <path d="M18 38 L32 52 L56 24" stroke="#159a4a" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{ fontSize: 18, fontWeight: 600, color: '#159a4a', fontFamily: FONT }}>
          Dose cycle updated
        </div>
      </div>
    </BottomSheet>
  );
}
