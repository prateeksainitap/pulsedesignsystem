import React from 'react';

/**
 * Task Progress Bar — from WeightEasy Figma "Task Progress Bar" (8778:92438).
 * Horizontal track 328×20 with 4 segments (bars) and 3 checkpoints between them.
 * Bar segment: 93×6. Checkpoint: 20×20 when reached (green w/ check), 10×10 otherwise.
 * Progress: Empty | Quarter | Half | ThreeQuarter
 *
 * Colors: complete green #159a4a (0.086, 0.639, 0.290), incomplete #dce1e8.
 */

export type TaskProgress = 'Empty' | 'Quarter' | 'Half' | 'ThreeQuarter';

export interface TaskProgressBarProps {
  progress?: TaskProgress;
}

// How many of the 4 bar segments are complete, based on Figma variants
const COMPLETED: Record<TaskProgress, number> = {
  Empty: 0,
  Quarter: 1,
  Half: 2,
  ThreeQuarter: 3,
};

const GREEN = 'var(--status-success, #159a4a)';
const GRAY = 'var(--border-default, #dce1e8)';

function CheckIcon({ color = '#fff' }: { color?: string }) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M6.4 11.2 2.8 7.6l1.2-1.2L6.4 8.8l5.6-5.6 1.2 1.2-6.8 6.8Z"
        fill={color}
      />
    </svg>
  );
}

export function TaskProgressBar({ progress = 'Empty' }: TaskProgressBarProps) {
  const done = COMPLETED[progress];
  const BARS = 4;
  const CHECKPOINTS = 3;
  const segments: React.ReactNode[] = [];

  for (let i = 0; i < BARS; i++) {
    const barDone = i < done;
    segments.push(
      <div
        key={`bar-${i}`}
        style={{
          flex: 1,
          height: 6,
          background: barDone ? GREEN : GRAY,
          borderRadius: 2,
        }}
      />,
    );
    if (i < CHECKPOINTS) {
      const reached = i < done;
      segments.push(
        <div
          key={`cp-${i}`}
          style={{
            width: reached ? 20 : 10,
            height: reached ? 20 : 10,
            borderRadius: 9999,
            background: reached ? GREEN : GRAY,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {reached && <CheckIcon />}
        </div>,
      );
    }
  }

  return (
    <div
      style={{
        width: 328,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
      aria-label={`progress ${progress.toLowerCase()}`}
    >
      {segments}
    </div>
  );
}
