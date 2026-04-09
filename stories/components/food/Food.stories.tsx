import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  LogMealHeader, LogMethodCards, FavoritesCollapsedList, FavoritesExpandedList,
  RecommendedMealCard, TypeInputCard, PhotoDescribedCard, ItemLoggedFooter,
  FoodOnboardingIntro, FoodOnboardingPhoto,
  TodaysMealsCarousel, MyDietPlanCard, DiaryCaloriesCard,
  LoggedMealSection, EmptyMealSection, EmptySnackRow,
  MealScoreCircle, CoachSaysCard, NutritionMacrosTable,
  MealBreakdownItem, MealBreakdownItemBad, InsightsHelpfulFooter, Frame,
} from './FoodComponents';

const meta: Meta = { title: 'WeightEasy/Food' };
export default meta;
type S = StoryObj;

// Log/Search
export const LogHeader: S = { render: () => <Frame bg="#0b1220"><LogMealHeader /></Frame> };
export const LogMethods: S = { render: () => <Frame bg="#0b1220"><LogMealHeader /><LogMethodCards /><div style={{ background: '#eff6ff' }}><FavoritesCollapsedList /><RecommendedMealCard /></div></Frame> };
export const FavoritesExpanded: S = { render: () => <Frame><FavoritesExpandedList /></Frame> };
export const Recommended: S = { render: () => <Frame><RecommendedMealCard /></Frame> };
export const TypeInput: S = { render: () => <Frame bg="#0b1220"><TypeInputCard /></Frame> };
export const PhotoDescribed: S = { render: () => <Frame bg="#0b1220"><PhotoDescribedCard /></Frame> };
export const ItemLogged: S = { render: () => <Frame><ItemLoggedFooter /></Frame> };

// Onboarding
export const OnboardingIntro: S = { render: () => <Frame><FoodOnboardingIntro /></Frame> };
export const OnboardingPhoto: S = { render: () => <Frame><FoodOnboardingPhoto /></Frame> };

// Plate / Daily log
export const TodaysMeals: S = { render: () => <Frame><div style={{ paddingTop: 12 }}><TodaysMealsCarousel /></div></Frame> };
export const DietPlan: S = { render: () => <Frame><MyDietPlanCard /></Frame> };
export const DiaryCalories: S = { render: () => <Frame><DiaryCaloriesCard /></Frame> };
export const LoggedMeal: S = { render: () => <Frame><LoggedMealSection /></Frame> };
export const EmptyMeal: S = { render: () => <Frame><EmptyMealSection /></Frame> };
export const EmptySnack: S = { render: () => <Frame><EmptySnackRow /></Frame> };

// Insights
export const Score: S = { render: () => <Frame><MealScoreCircle /></Frame> };
export const CoachSays: S = { render: () => <Frame><CoachSaysCard /></Frame> };
export const Nutrition: S = { render: () => <Frame><NutritionMacrosTable /></Frame> };
export const BreakdownGood: S = { render: () => <Frame><MealBreakdownItem /></Frame> };
export const BreakdownBad: S = { render: () => <Frame><MealBreakdownItemBad /></Frame> };
export const InsightsFooter: S = { render: () => <Frame><InsightsHelpfulFooter /></Frame> };
