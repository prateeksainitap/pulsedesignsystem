import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Radius, Colors, Spacing, Typography } from '../../theme';

/**
 * Pulse Badge — Dot | Count-SM | Count-LG | Text.
 * Variants: default (neutral), warning, success, error, info.
 */
const TONES = {
  default: { bg: Colors.surface.default,        fg: Colors.content.primary },
  warning: { bg: Colors.status.warningContainer, fg: Colors.status.warningOnContainer },
  success: { bg: Colors.status.successContainer, fg: Colors.status.successOnContainer },
  error:   { bg: Colors.status.errorContainer,   fg: Colors.status.errorOnContainer },
  info:    { bg: Colors.interaction.selected,    fg: Colors.status.info },
};

export default function PulseBadge({ label, tone = 'default', style }) {
  const t = TONES[tone] || TONES.default;
  return (
    <View style={[styles.pill, { backgroundColor: t.bg }, style]}>
      <Text style={[styles.text, { color: t.fg }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: Spacing.s8,
    paddingVertical: Spacing[3],
    borderRadius: Radius.full,
    alignSelf: 'flex-start',
  },
  text: { ...Typography.custom.badgeText },
});
