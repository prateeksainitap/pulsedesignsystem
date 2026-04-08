import React from 'react';
import { View, Text } from 'react-native';
import { Colors, Typography, Spacing } from '../../theme';

/** PulseSlider — TODO: replace with @react-native-community/slider or custom gesture impl. */
export default function PulseSlider({ value = 0, min = 0, max = 100, onChange, label }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <View style={{ gap: Spacing.s8 }}>
      {label ? <Text style={[Typography.label.lg, { color: Colors.content.secondary }]}>{label}</Text> : null}
      <View style={{ height: 6, backgroundColor: Colors.border.default, borderRadius: 9999 }}>
        <View style={{ width: `${pct}%`, height: '100%', backgroundColor: Colors.primary.default, borderRadius: 9999 }} />
      </View>
    </View>
  );
}
