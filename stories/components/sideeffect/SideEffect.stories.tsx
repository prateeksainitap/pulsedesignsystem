import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  FeelingTodayCard,
  CoachInsightCard,
  SideEffectGridSheet,
  AddOtherDialog,
  SeveritySheet,
  SideEffectsLoggedSuccess,
  FeelingBetterCard,
  RemedySheet,
  FeelingOkayCard,
  RemedyTile,
  RemediesRow,
} from './SideEffectComponents';

const meta: Meta = {
  title: 'WeightEasy/SideEffect',
  parameters: { layout: 'centered' },
};
export default meta;
type S = StoryObj;

const Bg: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 16, background: '#eff6ff' }}>{children}</div>
);

export const FeelingToday: S = {
  render: () => (
    <Bg>
      <FeelingTodayCard />
    </Bg>
  ),
};

export const CoachInsight: S = {
  render: () => (
    <Bg>
      <CoachInsightCard />
    </Bg>
  ),
};

export const LogSideEffectSheet: S = {
  render: () => (
    <SideEffectGridSheet
      items={[
        { emoji: '\uD83E\uDD22', label: 'Nausea' },
        { emoji: '\uD83E\uDD71', label: 'Fatigue' },
        { emoji: '\uD83D\uDD25', label: 'Heartburn' },
        { emoji: '\uD83D\uDE23', label: 'Constipation' },
        { emoji: '\uD83C\uDF88', label: 'Bloating' },
        { emoji: '\uD83D\uDC68\u200D\uD83E\uDDB2', label: 'Hair Loss' },
        { emoji: '\uD83D\uDCAA', label: 'Muscle Loss' },
        { emoji: '\uD83D\uDC89', label: 'Shot Anxiety' },
        { emoji: '\uD83E\uDEE0', label: 'Loose skin' },
        { emoji: '\uD83E\uDE79', label: 'Headache' },
      ]}
    />
  ),
};

export const LogSideEffectSheetSelected: S = {
  render: () => (
    <SideEffectGridSheet
      ctaEnabled
      items={[
        { emoji: '\uD83E\uDD22', label: 'Nausea', selected: true },
        { emoji: '\uD83E\uDD71', label: 'Fatigue' },
        { emoji: '\uD83D\uDD25', label: 'Heartburn' },
        { emoji: '\uD83D\uDE23', label: 'Constipation', selected: true },
        { emoji: '\uD83C\uDF88', label: 'Bloating' },
        { emoji: '\uD83D\uDC68\u200D\uD83E\uDDB2', label: 'Hair Loss' },
        { emoji: '\uD83D\uDCAA', label: 'Muscle Loss' },
        { emoji: '\uD83D\uDC89', label: 'Shot Anxiety' },
        { emoji: '\uD83E\uDEE0', label: 'Loose skin' },
        { emoji: '\uD83E\uDE79', label: 'Headache' },
        { emoji: '', label: 'Something else', isOther: true },
      ]}
    />
  ),
};

export const AddOther: S = {
  render: () => (
    <Bg>
      <AddOtherDialog />
    </Bg>
  ),
};

export const Severity: S = {
  render: () => (
    <SeveritySheet />
  ),
};

export const SeverityFilled: S = {
  render: () => (
    <SeveritySheet
      items={[
        { emoji: '\uD83E\uDD22', name: 'Nausea', value: 50 },
        { emoji: '\uD83D\uDE23', name: 'Constipation', value: 80 },
      ]}
      ctaLabel="Log 2 side effects"
    />
  ),
};

export const Success: S = {
  render: () => <SideEffectsLoggedSuccess />,
};

export const FeelingBetter: S = {
  render: () => (
    <Bg>
      <FeelingBetterCard />
    </Bg>
  ),
};

export const Remedy: S = {
  render: () => <RemedySheet />,
};

export const RemedyTileStory: S = {
  name: 'Remedy Tile',
  render: () => (
    <Bg>
      <div style={{ width: 180 }}>
        <RemedyTile title="Ginger Tea" description="Sip slowly to calm stomach lining." />
      </div>
    </Bg>
  ),
};

export const Remedies: S = {
  render: () => (
    <div style={{ background: '#eff6ff', padding: '16px 0' }}>
      <RemediesRow />
    </div>
  ),
};

export const FeelingOkay: S = {
  render: () => (
    <Bg>
      <FeelingOkayCard />
    </Bg>
  ),
};
