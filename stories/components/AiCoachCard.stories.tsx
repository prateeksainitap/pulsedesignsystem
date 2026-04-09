import React from 'react';
import { AiCoachCard } from './AiCoachCard';

export default {
  title: 'WeightEasy/AiCoachCard',
  component: AiCoachCard,
  parameters: { layout: 'centered' },
};

export const Default = () => (
  <div style={{ padding: 24, background: '#eff2f4' }}>
    <AiCoachCard />
  </div>
);
