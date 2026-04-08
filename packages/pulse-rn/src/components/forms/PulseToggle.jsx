import React from 'react';
import { Pressable, View, Animated } from 'react-native';
import { Colors, Radius } from '../../theme';

/** PulseToggle — TODO: animation timing, disabled state, sizes. */
export default function PulseToggle({ value, onValueChange, disabled }) {
  return (
    <Pressable
      onPress={() => !disabled && onValueChange?.(!value)}
      style={{
        width: 44, height: 24, borderRadius: Radius.full, padding: 2,
        backgroundColor: value ? Colors.primary.default : Colors.border.strong,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <View style={{
        width: 20, height: 20, borderRadius: Radius.full,
        backgroundColor: Colors.fixed.white,
        transform: [{ translateX: value ? 20 : 0 }],
      }}/>
    </Pressable>
  );
}
