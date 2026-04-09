import React from 'react';
import { AnimatedCoachMascot } from './AnimatedCoachMascot';

export default {
  title: 'WeightEasy/AnimatedCoachMascot',
  component: AnimatedCoachMascot,
  parameters: { layout: 'centered' },
};

export const Default = () => <AnimatedCoachMascot size={96} />;

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
    <AnimatedCoachMascot size={24} />
    <AnimatedCoachMascot size={32} />
    <AnimatedCoachMascot size={48} />
    <AnimatedCoachMascot size={96} />
    <AnimatedCoachMascot size={160} />
  </div>
);

export const InAiCoachCard = () => (
  <div
    style={{
      width: 328,
      height: 76,
      borderRadius: 24,
      background: '#FDFDFD',
      border: '1px solid #E6E8EE',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '14px 22px',
      fontFamily: "'Noto Sans', -apple-system, system-ui, sans-serif",
    }}
  >
    <AnimatedCoachMascot size={32} />
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 14, lineHeight: '20px', color: '#3D4966' }}>
        Don’t like your meals?
      </div>
      <div style={{ fontSize: 16, lineHeight: '24px', fontWeight: 700, color: '#050914' }}>
        Talk to your Coach
      </div>
    </div>
  </div>
);
