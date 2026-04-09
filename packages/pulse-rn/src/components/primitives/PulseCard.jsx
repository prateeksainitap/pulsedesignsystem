import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Radius, Shadows, Spacing, Colors } from '../../theme';

/**
 * Pulse Card — base white surface container.
 *  variant="elevated" → card shadow
 *  variant="flat"     → no shadow
 *  radius: "lg" | "xl" | "2xl" | "3xl" (default 3xl per WeightEasy content cards)
 */
export default function PulseCard({
  children,
  variant = 'elevated',
  radius = '3xl',
  padding = Spacing.s20,
  style,
}) {
  return (
    <View
      style={[
        {
          backgroundColor: Colors.surface.container,
          borderRadius: Radius[radius],
          padding,
        },
        variant === 'elevated' && Shadows.card,
        style,
      ]}
    >
      {children}
    </View>
  );
}
