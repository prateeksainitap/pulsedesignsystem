import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  FitnessHeader, FitnessStatsRow, WorkoutDayCard, NauseaCard, FullBodyResistanceCard,
  FeelingTodayCard, DidSomethingElseCard, StreakRow, ExploreExercisesFilter, ExerciseCard,
  WorkoutDetailsHeader, WorkoutDetailsMeta, BeforeYouStart, DifficultySelector,
  ExerciseListGroup, StartWorkoutCTA, ExerciseStartingSoon,
  WorkoutCompleteHero, WorkoutStatsCard, IntensityPicker, LogActivityFooter, EditDurationSheet,
  Frame,
} from './FitnessComponents';

const meta: Meta = { title: 'WeightEasy/Fitness' };
export default meta;
type S = StoryObj;

export const Header: S = { render: () => <Frame bg="#0a4a4a"><FitnessHeader /></Frame> };
export const StatsRow: S = { render: () => <Frame><FitnessStatsRow /></Frame> };
export const WorkoutDay: S = { render: () => <Frame><WorkoutDayCard /></Frame> };
export const Nausea: S = { render: () => <Frame><NauseaCard /></Frame> };
export const FullBodyResistance: S = { render: () => <Frame><FullBodyResistanceCard /></Frame> };
export const FeelingToday: S = { render: () => <Frame><FeelingTodayCard /></Frame> };
export const DidSomethingElse: S = { render: () => <Frame><DidSomethingElseCard /></Frame> };
export const Streak: S = { render: () => <Frame><StreakRow /></Frame> };
export const ExploreFilter: S = { render: () => <Frame><ExploreExercisesFilter /></Frame> };
export const Exercise: S = { render: () => <Frame><ExerciseCard /></Frame> };

// Details screen
export const DetailsHeader: S = { render: () => <Frame><WorkoutDetailsHeader /></Frame> };
export const DetailsMeta: S = { render: () => <Frame><WorkoutDetailsMeta /></Frame> };
export const BeforeStart: S = { render: () => <Frame><BeforeYouStart /></Frame> };
export const Difficulty: S = { render: () => <Frame><DifficultySelector /></Frame> };
export const ExerciseList: S = { render: () => <Frame><ExerciseListGroup /></Frame> };
export const StartCTA: S = { render: () => <Frame><StartWorkoutCTA /></Frame> };

// Starting soon
export const StartingSoon: S = { render: () => <Frame><ExerciseStartingSoon /></Frame> };

// Log activity / workout complete
export const CompleteHero: S = { render: () => <Frame bg="#2a2a2e"><WorkoutCompleteHero /></Frame> };
export const StatsAfter: S = { render: () => <Frame><WorkoutStatsCard /></Frame> };
export const Intensity: S = { render: () => <Frame><IntensityPicker /></Frame> };
export const LogFooter: S = { render: () => <Frame><LogActivityFooter /></Frame> };
export const EditDuration: S = { render: () => <Frame><EditDurationSheet /></Frame> };
