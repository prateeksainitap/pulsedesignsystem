import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../theme';

/**
 * Pulse Avatar — sizes from Figma: XS 24, SM 32, MD 40, LG 48, XL 56, 2XL 72.
 * Supports `initials`, `emoji`, or custom `children`, plus optional `gradient`.
 */
const SIZES = { XS: 24, SM: 32, MD: 40, LG: 48, XL: 56, '2XL': 72 };

export default function PulseAvatar({
  size = 'MD',
  initials,
  emoji,
  gradient,
  backgroundColor = Colors.interaction.selected,
  textColor = Colors.content.primary,
  children,
  style,
}) {
  const d = SIZES[size] || 40;
  const content = children ?? (emoji ? (
    <Text style={{ fontSize: d * 0.55 }}>{emoji}</Text>
  ) : initials ? (
    <Text style={{ fontSize: d * 0.4, fontWeight: '700', color: textColor }}>{initials}</Text>
  ) : null);

  const inner = (
    <View style={[styles.center, { width: d, height: d, borderRadius: d / 2 }]}>
      {content}
    </View>
  );

  if (gradient) {
    return (
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[{ width: d, height: d, borderRadius: d / 2 }, styles.center, style]}
      >
        {content}
      </LinearGradient>
    );
  }

  return (
    <View style={[{ width: d, height: d, borderRadius: d / 2, backgroundColor }, styles.center, style]}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { justifyContent: 'center', alignItems: 'center' },
});
