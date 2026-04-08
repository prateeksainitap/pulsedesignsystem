import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius } from '../../theme';

/** PulseToast — TODO: auto-dismiss timer, slide-in animation, queue manager. */
const TONES = {
  success: { icon: 'check-circle', color: Colors.status.success,  bg: Colors.status.successContainer },
  warning: { icon: 'alert',        color: Colors.status.warning,  bg: Colors.status.warningContainer },
  error:   { icon: 'close-circle', color: Colors.status.error,    bg: Colors.status.errorContainer   },
  info:    { icon: 'information',  color: Colors.status.info,     bg: Colors.surface.container       },
};
export default function PulseToast({ tone = 'info', message }) {
  const t = TONES[tone] || TONES.info;
  return (
    <View style={{
      flexDirection: 'row', alignItems: 'center', gap: Spacing.s12,
      paddingHorizontal: Spacing.s16, paddingVertical: Spacing.s12,
      backgroundColor: t.bg, borderRadius: Radius.lg,
    }}>
      <MaterialCommunityIcons name={t.icon} size={20} color={t.color} />
      <Text style={[Typography.body.md, { color: Colors.content.primary, flex: 1 }]}>{message}</Text>
    </View>
  );
}
