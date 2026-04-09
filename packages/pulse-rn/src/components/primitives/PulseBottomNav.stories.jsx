import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PulseBottomNav from './PulseBottomNav';
import { Colors } from '../../theme';

export default { title: 'Primitives/PulseBottomNav', component: PulseBottomNav };

const tab = (id, label, icon, center) => ({
  id, label, center,
  icon: ({ active }) => <MaterialCommunityIcons name={icon} size={center ? 28 : 24} color={active ? Colors.primary.default : Colors.content.tertiary} />,
});

export const Default = () => (
  <PulseBottomNav
    tabs={[
      tab('home',     'Home',     'home'),
      tab('meals',    'Meals',    'silverware-fork-knife'),
      tab('add',      'Add',      'plus', true),
      tab('progress', 'Progress', 'chart-line'),
      tab('coach',    'Coach',    'robot-happy'),
    ]}
  />
);
