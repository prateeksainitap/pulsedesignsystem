import React, { useState } from 'react';

/**
 * Pulse Switch — 1:1 mirror of Figma componentSet 2020:11076.
 *
 * Track: 52×32 pill.
 *   OFF  → fill surface/container, 2px border/interactive stroke.
 *          Thumb is a 22×22 circle, color content/tertiary, left-inset 4px,
 *          vertically centered (absolute top:5 in the 32-tall track).
 *   ON   → fill primary/default, no stroke.
 *          Thumb is a 22×22 circle, color surface/container, right-inset 4px,
 *          vertically centered (absolute top:5 in the 32-tall track).
 *   DISABLED → motion/opacity/disabled (0.4) on the whole frame.
 *
 * Token mapping (resolved from Figma variable IDs):
 *   track off bg     → --surface-container     (VariableID:12:617)
 *   track off stroke → --border-interactive    (VariableID:12:658) @ 2px
 *   track on bg      → --primary-default       (VariableID:12:623)
 *   thumb off        → --content-tertiary      (VariableID:12:643)
 *   thumb on         → --surface-container     (VariableID:12:617)
 */

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  'aria-label'?: string;
}

export function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled,
  ...rest
}: SwitchProps) {
  const [internal, setInternal] = useState(defaultChecked);
  const isOn = checked ?? internal;
  const toggle = () => {
    if (disabled) return;
    const next = !isOn;
    if (checked === undefined) setInternal(next);
    onChange?.(next);
  };

  // Both thumbs are 22×22 circles, vertically centered. Off sits at left-4,
  // on at right-4 (52 - 22 - 4 = 26).
  const knob = {
    size: 22,
    top: (32 - 22) / 2, // 5
    left: isOn ? 52 - 22 - 4 : 4, // 26 : 4
    color: isOn ? 'var(--surface-container)' : 'var(--content-tertiary)',
  };

  return (
    <button
      role="switch"
      aria-checked={isOn}
      aria-disabled={disabled || undefined}
      onClick={toggle}
      disabled={disabled}
      {...rest}
      style={{
        position: 'relative',
        width: 52,
        height: 32,
        padding: 0,
        borderRadius: 9999,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1, // motion/opacity/disabled
        background: isOn ? 'var(--primary-default)' : 'var(--surface-container)',
        border: 0,
        // Inset box-shadow gives the 2px stroke without shrinking the
        // positioning context, so the thumb coordinates (8,9) and (26,5)
        // remain accurate in the 52×32 outer box.
        boxShadow: isOn ? 'none' : 'inset 0 0 0 2px var(--border-interactive)',
        transition: 'background 200ms cubic-bezier(0.2, 0, 0, 1), box-shadow 200ms ease',
      }}
    >
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: knob.top,
          left: knob.left,
          width: knob.size,
          height: knob.size,
          borderRadius: 9999,
          background: knob.color,
          transition:
            'top 200ms cubic-bezier(0.2,0,0,1), left 200ms cubic-bezier(0.2,0,0,1), width 200ms cubic-bezier(0.2,0,0,1), height 200ms cubic-bezier(0.2,0,0,1), background 200ms ease',
        }}
      />
    </button>
  );
}
