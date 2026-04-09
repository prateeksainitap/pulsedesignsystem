import React from 'react';
import { BottomSheet } from './BottomSheet';

/**
 * Dose logging bottom sheets (WeightEasy Dose Tracker flow).
 * - LogDoseEmpty (8867:64336): "When did you take it?" — Today + 9:30 PM pills.
 *   CTA: "Select strength".
 * - LogDoseFilled (8867:65704): adds "What strength did you take?" medication
 *   dropdown + stepper (2.5 mg / Last Dose pill). CTA: "Log shot".
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

const CalendarIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="#18203a" strokeWidth={1.6} />
    <path d="M3 9h18M8 3v4M16 3v4M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" stroke="#18203a" strokeWidth={1.6} strokeLinecap="round" />
  </svg>
);

const ClockIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="#18203a" strokeWidth={1.6} />
    <path d="M12 7v5l3 2" stroke="#18203a" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDown = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 9l6 6 6-6" stroke="#18203a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function PillField({
  icon,
  label,
  width = '100%',
}: {
  icon: React.ReactNode;
  label: string;
  width?: number | string;
}) {
  return (
    <div
      style={{
        width,
        height: 52,
        boxSizing: 'border-box',
        padding: '0 20px',
        borderRadius: 9999,
        background: '#fdfdfd',
        border: '1px solid var(--border-default, #dce1e8)',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontSize: 16,
        color: '#18203a',
        fontFamily: FONT,
      }}
    >
      <span style={{ flex: 1 }}>{label}</span>
      {icon}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#050914',
        margin: '8px 0 14px',
        fontFamily: FONT,
      }}
    >
      {children}
    </div>
  );
}

export function LogDoseEmpty() {
  return (
    <BottomSheet title="Log dose" cta="Select strength" height={594}>
      <SectionLabel>When did you take it?</SectionLabel>
      <div style={{ display: 'flex', gap: 12 }}>
        <PillField icon={<CalendarIcon />} label="Today" />
        <PillField icon={<ClockIcon />} label="9:30 PM" />
      </div>
    </BottomSheet>
  );
}

const MinusIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 12h12" stroke="#2563eb" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 6v12M6 12h12" stroke="#2563eb" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

export interface StrengthStepperProps {
  med?: string;
  dose?: string;
  lastDose?: boolean;
}

export function StrengthStepper({
  med = 'Wegovy',
  dose = '2.5 mg',
  lastDose = true,
}: StrengthStepperProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Medication dropdown */}
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
          gap: 12,
          fontSize: 16,
          color: '#18203a',
          fontFamily: FONT,
        }}
      >
        <span style={{ flex: 1 }}>{med}</span>
        <ChevronDown />
      </div>

      {/* Stepper row */}
      <div
        style={{
          height: 72,
          boxSizing: 'border-box',
          padding: '0 12px',
          borderRadius: 9999,
          background: '#fdfdfd',
          border: '1px solid var(--border-default, #dce1e8)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: FONT,
        }}
      >
        <button type="button" aria-label="decrease" style={stepperBtn}>
          <MinusIcon />
        </button>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: '#050914' }}>{dose}</div>
          {lastDose && (
            <span
              style={{
                padding: '2px 10px',
                borderRadius: 9999,
                background: '#2563eb',
                color: '#fff',
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              Last Dose
            </span>
          )}
        </div>
        <button type="button" aria-label="increase" style={stepperBtn}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}

const stepperBtn: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: 9999,
  border: '1px solid #cbd5e1',
  background: '#fdfdfd',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: 0,
};

export function LogDoseFilled() {
  return (
    <BottomSheet title="Log dose" cta="Log shot" height={594}>
      <SectionLabel>When did you take it?</SectionLabel>
      <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
        <PillField icon={<CalendarIcon />} label="Today" />
        <PillField icon={<ClockIcon />} label="9:30 PM" />
      </div>
      <SectionLabel>What strength did you take?</SectionLabel>
      <StrengthStepper />
    </BottomSheet>
  );
}
