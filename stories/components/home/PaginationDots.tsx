import React from 'react';

/**
 * Pagination Dots — from WeightEasy Figma "Pagination Dots" (8441:51266).
 * Variants: Count (3|4|5) × Active (1..Count). Dots are 8×8 circles with gap 8,
 * padding 4/8. Active blue (#2563eb), inactive gray (#dce1e8).
 */
export interface PaginationDotsProps {
  count?: 3 | 4 | 5;
  active?: number;
}

export function PaginationDots({ count = 3, active = 1 }: PaginationDotsProps) {
  return (
    <div
      role="tablist"
      aria-label="pagination"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '4px 8px',
        boxSizing: 'border-box',
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          aria-current={i + 1 === active || undefined}
          style={{
            width: 8,
            height: 8,
            borderRadius: 9999,
            background: i + 1 === active ? 'var(--border-focus, #2563eb)' : 'var(--border-default, #dce1e8)',
          }}
        />
      ))}
    </div>
  );
}
