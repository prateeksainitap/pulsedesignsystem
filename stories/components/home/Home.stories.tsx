import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PaginationDots } from './PaginationDots';
import { TaskProgressBar } from './TaskProgressBar';
import { SectionHeader } from './SectionHeader';
import { AiCoachCard } from './AiCoachCard';
import { TaskCard } from './TaskCard';
import { RecoMeal } from './RecoMeal';
import { StatCard } from './StatCard';
import { BottomNavGLP } from './BottomNavGLP';
import { PageHeader } from './PageHeader';
import { SideEffectRemedy } from './SideEffectRemedy';
import { DoseCard } from '../DoseCard';
import { WeightTrackerCard } from '../weight/WeightTrackerCard';
import { ShareBanner } from './ShareBanner';
import { HomeList as TaskHomeList } from '../TaskCard.stories';

const meta: Meta = { title: 'WeightEasy/Home' };
export default meta;
type Story = StoryObj;

export const Pagination: Story = { render: () => <PaginationDots count={4} active={1} /> };
export const TaskProgress: Story = { render: () => <TaskProgressBar progress="Half" /> };
export const Section: Story = { render: () => <SectionHeader title="Today" /> };
export const Stat: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <StatCard size="L">
        <div style={{ fontSize: 32, fontWeight: 700 }}>78.2 kg</div>
      </StatCard>
      <StatCard size="M">
        <div style={{ fontSize: 24, fontWeight: 700 }}>1,840</div>
      </StatCard>
    </div>
  ),
};
export const BottomNav: Story = { render: () => <BottomNavGLP active="Home" /> };
export const Header: Story = {
  render: () => (
    <PageHeader>
      <div
        style={{
          width: 328,
          height: 186,
          background: '#fdfdfd',
          borderRadius: 24,
          padding: 24,
          boxSizing: 'border-box',
        }}
      >
        Dose card slot
      </div>
    </PageHeader>
  ),
};
export const Remedy: Story = { render: () => <SideEffectRemedy /> };

export const Page: Story = {
  render: () => (
    <div
      style={{
        width: 360,
        background: 'var(--surface-default)',
        minHeight: 2111,
        position: 'relative',
        fontFamily: "var(--font-family, 'Google Sans', sans-serif)",
      }}
    >
      {/* Header with Dose Card inside */}
      <PageHeader>
        <DoseCard />
      </PageHeader>

      {/* Body */}
      <div
        style={{
          padding: 'var(--space-16)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-24)',
          paddingBottom: 'calc(var(--space-24) + 82px)',
        }}
      >
        {/* Today's tasks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          <SectionHeader title="Today's tasks" />
          <TaskHomeList />
        </div>

        {/* Meals */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          <SectionHeader title="Recommended meals" />
          <div style={{ display: 'flex', gap: 'var(--space-12)', overflowX: 'auto' }}>
            <RecoMeal isSelected />
            <RecoMeal />
          </div>
        </div>

        {/* AI Coach */}
        <AiCoachCard />

        {/* Progress — Weight Tracker */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          <SectionHeader title="Progress" />
          <WeightTrackerCard />
        </div>

        {/* Share banner */}
        <ShareBanner />
      </div>

      {/* Bottom nav pinned */}
      <div style={{ position: 'sticky', bottom: 0, left: 0, right: 0 }}>
        <BottomNavGLP active="Home" />
      </div>
    </div>
  ),
};
