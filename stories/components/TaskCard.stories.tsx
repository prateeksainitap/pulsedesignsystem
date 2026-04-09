import React from 'react';
import { TaskCard } from './TaskCard';
import { IconButton } from './IconButton';

export default {
  title: 'WeightEasy/TaskCard',
  component: TaskCard,
  parameters: { layout: 'centered' },
};

// Per-metric colour tokens matching the Home design.
const METRIC = {
  weight: '#0F5D4A', // teal
  food:   '#7C3AED', // purple
  water:  '#2563EB', // blue
  steps:  '#EA580C', // orange
  sleep:  '#15803D', // green
};

// Monotone-style Pulse icons, coloured per metric.
const WeightIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={METRIC.weight}
       strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 8c0-2 1.5-3 4-3h6c2.5 0 4 1 4 3l1 10c.2 1.7-1 3-2.7 3H6.7C5 21 3.8 19.7 4 18L5 8z" />
    <path d="M12 10.5a2 2 0 1 0 2 2" />
  </svg>
);
const FoodIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={METRIC.food}
       strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M8 3v6M11 3v6M9.5 9v12M8 3c0 3 3 3 3 0" />
    <path d="M16.5 3c-1.2 0-2 1.5-2 3.5s.8 3.5 2 3.5V21" />
  </svg>
);
const WaterIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={METRIC.water}
       strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3.5c0 0 6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z" />
  </svg>
);
const StepsIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={METRIC.steps}
       strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9.5 4c1.8 0 2.8 1.6 2.8 3.8 0 2.2-1 4.2-2.8 4.2S6.7 10 6.7 7.8C6.7 5.6 7.7 4 9.5 4z" />
    <path d="M6 13c1.2 0 2 1 2 2.3 0 1.3-.8 2.7-2 2.7s-2-1.4-2-2.7C4 14 4.8 13 6 13z" />
    <path d="M15.5 4c1.8 0 2.8 1.6 2.8 3.8 0 2.2-1 4.2-2.8 4.2s-2.8-2-2.8-4.2C12.7 5.6 13.7 4 15.5 4z" />
    <path d="M18 13c1.2 0 2 1 2 2.3 0 1.3-.8 2.7-2 2.7s-2-1.4-2-2.7C16 14 16.8 13 18 13z" />
  </svg>
);
const SleepIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
    <text x="3"  y="12" fontFamily="Noto Sans" fontSize="9"  fontWeight="700" fill={METRIC.sleep}>z</text>
    <text x="8"  y="16" fontFamily="Noto Sans" fontSize="11" fontWeight="700" fill={METRIC.sleep}>z</text>
    <text x="14" y="21" fontFamily="Noto Sans" fontSize="13" fontWeight="700" fill={METRIC.sleep}>z</text>
  </svg>
);

// Progress ring wrapper — renders a circular progress arc around the icon.
// The arc fills in on first render by animating strokeDashoffset from C → 0.
const PROGRESS_RING_CSS = `
@keyframes pr-fill { from { stroke-dashoffset: var(--pr-c); } to { stroke-dashoffset: var(--pr-target); } }
.pr-arc { animation: pr-fill 900ms cubic-bezier(0.22, 1, 0.36, 1) both; }
`;
const ProgressRing = ({
  progress,
  color,
  icon,
  delay = 0,
}: { progress: number; color: string; icon: React.ReactNode; delay?: number }) => {
  const R = 22;
  const C = 2 * Math.PI * R;
  const target = C * (1 - Math.max(0, Math.min(1, progress)));
  return (
    <div style={{ position: 'relative', width: 48, height: 48 }}>
      <style>{PROGRESS_RING_CSS}</style>
      <svg width={48} height={48} viewBox="0 0 48 48" style={{ position: 'absolute', inset: 0 }}>
        <circle cx={24} cy={24} r={R} stroke="var(--border-subtle)" strokeWidth={2} fill="none" />
        <circle
          className="pr-arc"
          cx={24} cy={24} r={R}
          stroke={color} strokeWidth={2} fill="none" strokeLinecap="round"
          strokeDasharray={`${C} ${C}`}
          strokeDashoffset={target}
          transform="rotate(-90 24 24)"
          style={{
            ['--pr-c' as any]: `${C}`,
            ['--pr-target' as any]: `${target}`,
            animationDelay: `${delay}ms`,
          }}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {icon}
      </div>
    </div>
  );
};

// Thick plus used in the Add IconButton (matches home mock).
const FatPlus = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

// Circular refresh arrow.
const RefreshIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 12a8 8 0 1 1-2.3-5.6" />
    <path d="M20 4v4h-4" />
  </svg>
);

export const Default = () => (
  <div style={{ width: 360 }}>
    <TaskCard
      tone="info"
      icon={<WeightIcon />}
      title="Weight"
      tag={{ label: 'Overdue', tone: 'warning' }}
      description="134 lb • 2 Apr"
    />
  </div>
);

export const Completed = () => (
  <div style={{ width: 360 }}>
    <TaskCard
      tone="success"
      icon={<WeightIcon />}
      title="Weight"
      description="134 lb • 2 Apr"
      isCompleted
    />
  </div>
);

export const HomeList = () => {
  const Divider = () => (
    <div style={{ height: 1, background: 'var(--border-subtle)', margin: '0 16px' }} />
  );
  return (
    <div
      style={{
        width: 360,
        padding: '8px 16px',
        background: 'var(--surface-container)',
        borderRadius: 24,
        border: '1px solid var(--border-subtle)',
      }}
    >
      <TaskCard
        embedded rawIcon
        icon={<ProgressRing progress={0} color={METRIC.weight} icon={<WeightIcon />} />}
        title="Weight"
        tag={{ label: 'Overdue', tone: 'warning' }}
        description="134 lb • 2 Apr"
        action={
          <IconButton theme="weightEasy" variant="primary" size="M" aria-label="Add log"
                      icon={<FatPlus />} />
        }
      />
      <Divider />
      <TaskCard
        embedded rawIcon
        icon={<ProgressRing progress={0.25} color={METRIC.food} icon={<FoodIcon />} />}
        title="Food"
        description="1 of 4 meals logged"
        action={
          <IconButton theme="weightEasy" variant="primary" size="M" aria-label="Add log"
                      icon={<FatPlus />} />
        }
      />
      <Divider />
      <TaskCard
        embedded rawIcon
        icon={<ProgressRing progress={0.6} color={METRIC.water} icon={<WaterIcon />} />}
        title="Water"
        description="1.2L of 2L"
        action={
          <IconButton theme="weightEasy" variant="primary" size="M" aria-label="Add log"
                      icon={<FatPlus />} />
        }
      />
      <Divider />
      <TaskCard
        embedded rawIcon
        icon={<ProgressRing progress={0.55} color={METRIC.steps} icon={<StepsIcon />} />}
        title="Steps"
        description="1.345 steps"
        action={
          <IconButton theme="weightEasy" variant="secondary" size="M" aria-label="Refresh"
                      icon={<RefreshIcon />} />
        }
      />
      <Divider />
      <TaskCard
        embedded rawIcon
        icon={<ProgressRing progress={0.8} color={METRIC.sleep} icon={<SleepIcon />} />}
        title="Sleep"
        description="8h 21m"
        action={
          <IconButton theme="weightEasy" variant="secondary" size="M" aria-label="Refresh"
                      icon={<RefreshIcon />} />
        }
      />
    </div>
  );
};
