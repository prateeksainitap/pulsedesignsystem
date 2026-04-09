import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { WeightTrackerCard } from './WeightTrackerCard';

const meta: Meta<typeof WeightTrackerCard> = {
  title: 'WeightEasy/WeightTrackerCard',
  component: WeightTrackerCard,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof WeightTrackerCard>;

const Wrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 24, background: '#eff2f4' }}>{children}</div>
);

export const Default: Story = {
  render: () => (
    <Wrap>
      <WeightTrackerCard />
    </Wrap>
  ),
};

export const OneMonth: Story = {
  render: () => (
    <Wrap>
      <WeightTrackerCard activeRange="1M" />
    </Wrap>
  ),
};
