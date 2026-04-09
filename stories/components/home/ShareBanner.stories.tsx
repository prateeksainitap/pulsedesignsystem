import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ShareBanner } from './ShareBanner';

const meta: Meta<typeof ShareBanner> = {
  title: 'WeightEasy/ShareBanner',
  component: ShareBanner,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof ShareBanner>;

export const Default: Story = {
  render: () => <ShareBanner />,
};
