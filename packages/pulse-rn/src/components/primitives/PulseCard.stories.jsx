import React from 'react';
import { Text } from 'react-native';
import PulseCard from './PulseCard';
import { Colors, Typography } from '../../theme';

export default { title: 'Primitives/PulseCard', component: PulseCard };

export const Default = () => (
  <PulseCard style={{ width: 320 }}>
    <Text style={[Typography.heading.sm, { color: Colors.content.primary }]}>Card title</Text>
    <Text style={[Typography.body.md, { color: Colors.content.secondary }]}>
      Body content sits inside the Pulse card surface.
    </Text>
  </PulseCard>
);
