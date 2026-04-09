import React from 'react';

/**
 * TextInput — rebuilt from Figma Pulse "TextInput" component set
 * (nodeId 3281:9398). Variants: Type × State × Size
 *   Type: Text | Dropdown | Phone | Search
 *   State: Default | Focused | Filled | Error | Disabled | Expanded
 *   Size: S | M | L
 *
 * All sizing/padding/radius/tokens sourced directly from Figma variable IDs:
 *   surface:      12:617  (#fdfdfd)
 *   content-pri:  12:641  (#181f3a)  — label + filled input
 *   content-sec:  12:642  (#3d4966)  — helper
 *   content-ter:  12:643  (#818ba0)  — placeholder
 *   border-def:   12:652  (#dce1e8)
 *   border-focus: 12:656  (#2563eb)
 *   border-error: 2403:19234 (#9a1b1b)
 *   content-neg:  12:667  (#dc2626)  — error helper
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, 'Segoe UI', sans-serif)";

const COLOR = {
  surface: 'var(--surface-default, #fdfdfd)',
  primary: 'var(--content-primary, #181f3a)',
  secondary: 'var(--content-secondary, #3d4966)',
  tertiary: 'var(--content-tertiary, #818ba0)',
  borderDefault: 'var(--border-default, #dce1e8)',
  borderFocus: 'var(--border-focus, #2563eb)',
  borderError: 'var(--border-error, #9a1b1b)',
  negative: 'var(--content-negative, #dc2626)',
};

export type InputType = 'Text' | 'Dropdown' | 'Phone' | 'Search';
export type InputState = 'Default' | 'Focused' | 'Filled' | 'Error' | 'Disabled';
export type InputSize = 'S' | 'M' | 'L';

export interface TextInputProps {
  type?: InputType;
  state?: InputState;
  size?: InputSize;
  label?: string;
  placeholder?: string;
  value?: string;
  helper?: string;
  errorText?: string;
  characterCount?: string;
  showLabel?: boolean;
  showHelper?: boolean;
  /** ISO country code shown for Type=Phone (e.g. "+1") */
  countryCode?: string;
}

const SIZE_SPEC: Record<InputSize, {
  fieldH: number;
  radius: number;
  padY: number;
  padX: number;
  inputFs: number;
  inputLh: number;
  labelFs: number;
  labelLh: number;
  iconSize: number;
}> = {
  S: { fieldH: 44, radius: 24, padY: 12, padX: 12, inputFs: 12, inputLh: 16, labelFs: 12, labelLh: 16, iconSize: 16 },
  M: { fieldH: 48, radius: 24, padY: 12, padX: 16, inputFs: 16, inputLh: 24, labelFs: 14, labelLh: 20, iconSize: 20 },
  L: { fieldH: 56, radius: 28, padY: 16, padX: 20, inputFs: 16, inputLh: 24, labelFs: 14, labelLh: 20, iconSize: 24 },
};

function borderFor(state: InputState) {
  if (state === 'Focused') return COLOR.borderFocus;
  if (state === 'Error') return COLOR.borderError;
  return COLOR.borderDefault;
}

// --- Tiny icon primitives (matching Figma defaults) ---
const CircleInfoIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={1.5} />
    <line x1="12" y1="11" x2="12" y2="16" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <circle cx="12" cy="8" r="0.75" fill={color} />
  </svg>
);

const SearchIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="10.5" cy="10.5" r="6.5" stroke={color} strokeWidth={1.5} />
    <line x1="15.5" y1="15.5" x2="20" y2="20" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

const ChevronDownIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 9l6 6 6-6" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function TextInput({
  type = 'Text',
  state = 'Default',
  size = 'M',
  label = 'Label',
  placeholder = 'Input field title',
  value,
  helper = 'Helper text',
  errorText,
  characterCount,
  showLabel = true,
  showHelper = false,
  countryCode = '+1',
}: TextInputProps) {
  const s = SIZE_SPEC[size];
  const isFilled = state === 'Filled' || (value != null && value.length > 0);
  const isDisabled = state === 'Disabled';

  // Input/placeholder color — filled uses primary, else tertiary
  const textColor = isFilled ? COLOR.primary : COLOR.tertiary;
  const iconColor = isDisabled ? COLOR.tertiary : COLOR.primary;

  const displayText = value ?? (isFilled ? 'Input value' : placeholder);

  // Bottom helper: Error state uses errorText + negative color
  const isError = state === 'Error';
  const helperVisible = showHelper || isError || !!characterCount;
  const helperContent = isError ? (errorText ?? 'Error message') : helper;
  const helperColor = isError ? COLOR.negative : COLOR.secondary;

  const rootOpacity = isDisabled ? 0.5 : 1;

  // Left content (Phone country code, Search left icon)
  let leftNode: React.ReactNode = null;
  if (type === 'Phone') {
    leftNode = (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          paddingRight: 8,
          borderRight: `1px solid ${COLOR.borderDefault}`,
          height: '100%',
          color: COLOR.primary,
          fontFamily: FONT,
          fontSize: s.inputFs,
          lineHeight: `${s.inputLh}px`,
        }}
      >
        <span style={{ fontSize: s.inputFs }}>🇺🇸</span>
        <span>{countryCode}</span>
      </div>
    );
  } else if (type === 'Search') {
    leftNode = <SearchIcon size={s.iconSize} color={COLOR.tertiary} />;
  }

  // Right icon (default info; Dropdown shows chevron)
  let rightNode: React.ReactNode = null;
  if (type === 'Dropdown') {
    rightNode = <ChevronDownIcon size={s.iconSize} color={iconColor} />;
  } else {
    rightNode = <CircleInfoIcon size={s.iconSize} color={iconColor} />;
  }

  return (
    <div
      style={{
        width: 328,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        fontFamily: FONT,
        opacity: rootOpacity,
      }}
      aria-disabled={isDisabled || undefined}
    >
      {/* Label */}
      {showLabel && type !== 'Search' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontSize: s.labelFs,
              lineHeight: `${s.labelLh}px`,
              fontWeight: 500,
              color: COLOR.primary,
            }}
          >
            {label}
          </span>
        </div>
      )}

      {/* Text Field */}
      <div
        style={{
          width: '100%',
          height: s.fieldH,
          borderRadius: s.radius,
          padding: `${s.padY}px ${s.padX}px`,
          background: COLOR.surface,
          border: `1px solid ${borderFor(state)}`,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          boxSizing: 'border-box',
        }}
      >
        {leftNode}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            fontSize: s.inputFs,
            lineHeight: `${s.inputLh}px`,
            color: textColor,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {displayText}
          {state === 'Focused' && (
            <span
              aria-hidden
              style={{
                display: 'inline-block',
                width: 1,
                height: s.inputLh,
                background: COLOR.borderFocus,
                marginLeft: 2,
                animation: 'pulse-caret 1s step-start infinite',
              }}
            />
          )}
        </div>
        {rightNode}
      </div>

      {/* Bottom section */}
      {helperVisible && (
        <div style={{ display: 'flex', gap: 8, height: 16 }}>
          <div style={{ flex: 1, padding: '0 16px' }}>
            <span
              style={{
                fontSize: 12,
                lineHeight: '16px',
                color: helperColor,
              }}
            >
              {helperContent}
            </span>
          </div>
          {characterCount && (
            <div style={{ padding: '0 16px' }}>
              <span style={{ fontSize: 12, lineHeight: '16px', color: COLOR.secondary }}>
                {characterCount}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Back-compat default name so existing imports still work
export const Input = TextInput;
export type InputProps = TextInputProps;
