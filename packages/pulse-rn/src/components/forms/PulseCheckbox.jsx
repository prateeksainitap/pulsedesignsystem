import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Typography, Radius, Spacing, BorderWidth } from '../../theme';

/** PulseCheckbox — TODO: indeterminate, sizes, error state. */
export default function PulseCheckbox({ checked, onChange, label, disabled }) {
  return (
    <Pressable
      onPress={() => !disabled && onChange?.(!checked)}
      style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.s8, opacity: disabled ? 0.5 : 1 }}
    >
      <View style={{
        width: 20, height: 20, borderRadius: Radius.xs,
        borderWidth: BorderWidth.lg,
        borderColor: checked ? Colors.primary.default : Colors.border.strong,
        backgroundColor: checked ? Colors.primary.default : 'transparent',
        alignItems: 'center', justifyContent: 'center',
      }}>
        {checked ? <MaterialCommunityIcons name="check" size={14} color={Colors.content.inverse} /> : null}
      </View>
      {label ? <Text style={[Typography.body.md, { color: Colors.content.primary }]}>{label}</Text> : null}
    </Pressable>
  );
}
