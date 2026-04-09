import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  CurrentWeightCard,
  ProgressToGoalBar,
  WeightTrendCard,
  PhotosComparePair,
  AddPhotoButton,
  RecentLogsList,
  PhotoGalleryCarousel,
  LogWeightSheet,
  DeleteLogDialog,
  WeightLoggedSuccess,
} from './WeightComponents';

const meta: Meta = {
  title: 'WeightEasy/Weight',
  parameters: { layout: 'centered' },
};
export default meta;
type S = StoryObj;

const Bg: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 16, background: '#eff6ff' }}>{children}</div>
);

export const CurrentWeight: S = {
  render: () => (
    <Bg>
      <CurrentWeightCard />
    </Bg>
  ),
};

export const ProgressToGoal: S = {
  render: () => (
    <Bg>
      <ProgressToGoalBar />
    </Bg>
  ),
};

export const TrendChart: S = {
  render: () => (
    <Bg>
      <WeightTrendCard />
    </Bg>
  ),
};

export const PhotosPair: S = {
  render: () => (
    <Bg>
      <PhotosComparePair />
    </Bg>
  ),
};

export const PhotosOverdueEmpty: S = {
  render: () => (
    <Bg>
      <PhotosComparePair rightState="overdue-empty" showViewGallery={false} />
    </Bg>
  ),
};

export const AddPhotoBtn: S = {
  name: 'Add Photo Button',
  render: () => (
    <Bg>
      <AddPhotoButton />
    </Bg>
  ),
};

export const RecentLogs: S = {
  render: () => (
    <Bg>
      <RecentLogsList />
    </Bg>
  ),
};

export const GalleryCarousel: S = {
  render: () => <PhotoGalleryCarousel date="Today" index={0} total={5} />,
};

export const GalleryCarouselCoachmark: S = {
  render: () => <PhotoGalleryCarousel date="Today" index={0} total={5} showCoachmark />,
};

export const LogWeightEmpty: S = {
  render: () => <LogWeightSheet />,
};

export const LogWeightFilled: S = {
  render: () => <LogWeightSheet value="73" />,
};

export const Delete: S = {
  render: () => (
    <Bg>
      <DeleteLogDialog />
    </Bg>
  ),
};

export const Success: S = {
  render: () => <WeightLoggedSuccess />,
};
