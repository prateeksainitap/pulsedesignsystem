import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DoseGraphHeader } from './DoseGraphHeader';
import { RecentLogs, RecentLogItem, MissedLogPill } from './RecentLogs';
import { LogDoseEmpty, LogDoseFilled } from './LogDoseSheets';
import { DatePickerSheet } from './DatePickerSheet';
import { TimePickerSheet } from './TimePickerSheet';
import { DoseLoggedSuccess } from './DoseLoggedSuccess';
import {
  DosePreferencesSheet,
  UpdateMedicationSheet,
  UpdateCycleDaysSheet,
  UpdateCycleWhenSheet,
  CycleUpdatedSheet,
} from './PreferenceSheets';

const meta: Meta = { title: 'WeightEasy/DoseTracker' };
export default meta;
type Story = StoryObj;

export const HeaderRest: Story = { render: () => <DoseGraphHeader state="Rest" /> };
export const HeaderDue: Story = { render: () => <DoseGraphHeader state="Due" /> };
export const HeaderAfterShot: Story = { render: () => <DoseGraphHeader state="AfterShot" /> };
export const HeaderOverdue: Story = { render: () => <DoseGraphHeader state="Overdue" /> };

export const Logs: Story = {
  render: () => (
    <RecentLogs>
      <RecentLogItem date="21 Mar" dose="5mg" med="Mounjaro" trend="up" />
      <MissedLogPill date="12 Dec" />
      <RecentLogItem date="7 Mar" dose="2.5mg" med="Zepbound" />
      <RecentLogItem date="1 Mar" dose="2.5mg" med="Mounjaro" />
    </RecentLogs>
  ),
};

export const LogDoseEmptySheet: Story = { render: () => <LogDoseEmpty /> };
export const LogDoseFilledSheet: Story = { render: () => <LogDoseFilled /> };
export const DatePicker: Story = { render: () => <DatePickerSheet /> };
export const TimePicker: Story = { render: () => <TimePickerSheet /> };
export const Success: Story = { render: () => <DoseLoggedSuccess /> };

export const Preferences: Story = { render: () => <DosePreferencesSheet /> };
export const UpdateMedication: Story = { render: () => <UpdateMedicationSheet /> };
export const UpdateCycleDays: Story = { render: () => <UpdateCycleDaysSheet /> };
export const UpdateCycleWhen: Story = { render: () => <UpdateCycleWhenSheet /> };
export const CycleUpdated: Story = { render: () => <CycleUpdatedSheet /> };
