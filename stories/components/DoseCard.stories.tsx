import React from 'react';
import { DoseCard } from './DoseCard';

export default {
  title: 'WeightEasy/DoseCard',
  component: DoseCard,
  parameters: { layout: 'centered' },
};

const Wrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 24, background: '#eff2f4' }}>{children}</div>
);

export const DueToday = () => (
  <Wrap><DoseCard state="DueToday" /></Wrap>
);

export const Upcoming = () => (
  <Wrap><DoseCard state="Upcoming" /></Wrap>
);

export const Logged = () => (
  <Wrap><DoseCard state="Logged" /></Wrap>
);

export const Missed = () => (
  <Wrap><DoseCard state="Missed" /></Wrap>
);

export const AllStates = () => (
  <Wrap>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <DoseCard state="Upcoming" />
      <DoseCard state="DueToday" />
      <DoseCard state="Logged" />
      <DoseCard state="Missed" />
    </div>
  </Wrap>
);
