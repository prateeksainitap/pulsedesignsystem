import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius, BorderWidth } from '../../theme';

/** PulseBanner — TODO: dismiss button, action slot, tonal vs filled variants. */
const TONES = {
  info:    { icon: 'information',  color: Colors.status.info,    bg: Colors.surface.container       },
  success: { icon: 'check-circle', color: Colors.status.success, bg: Colors.status.successContainer },
  warning: { icon: 'alert',        color: Colors.status.warning, bg: Colors.status.warningContainer },
  error:   { icon: 'close-circle', color: Colors.status.error,   bg: Colors.status.errorContainer   },
};
export default function PulseBanner({ tone = 'info', title, message }) {
  const t = TONES[tone] || TONES.info;
  return (
    <View style={{
      flexDirection: 'row', gap: Spacing.s12,
      padding: Spacing.s16, borderRadius: Radius.lg,
      borderWidth: BorderWidth.sm, borderColor: t.color, backgroundColor: t.bg,
    }}>
      <MaterialCommunityIcons name={t.icon} size={20} color={t.color} />
      <View style={{ flex: 1, gap: Spacing.s4 }}>
        {title ? <Text style={[Typography.title.sm, { color: Colors.content.primary }]}>{title}</Text> : null}
        {message ? <Text style={[Typography.body.sm, { color: Colors.content.secondary }]}>{message}</Text> : null}
      </View>
    </View>
  );
}
