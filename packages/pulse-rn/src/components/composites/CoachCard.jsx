import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Spacing, Radius, Colors, Typography, Sizing, BorderWidth, Shadows } from '../../theme';
import { CoachMascot } from '../primitives';

/**
 * CoachCard — mint-tinted surface with a soft teal glow border, the blue
 * Coach mascot on the left, and a 44px outlined arrow button on the right.
 */
export default function CoachCard() {
  return (
    <View style={styles.outer}>
      <LinearGradient
        colors={[Colors.secondary.container, Colors.surface.container]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.mascotWrap}>
          <CoachMascot size={48} />
        </View>
        <View style={styles.body}>
          <Text style={styles.subtitle}>Don't like your meals?</Text>
          <Text style={styles.title}>Talk to your Coach</Text>
        </View>
        <TouchableOpacity style={styles.arrowBtn} activeOpacity={0.8}>
          <Ionicons name="arrow-forward" size={20} color={Colors.content.primary} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    marginHorizontal: Spacing.s16,
    marginTop: Spacing.s20,
    borderRadius: Radius['3xl'],
    borderWidth: BorderWidth.md,
    borderColor: Colors.accent.mint,
    ...Shadows.glowAccent,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.s20,
    borderRadius: Radius['3xl'] - 1.5,
    paddingHorizontal: Spacing.s24,
    paddingVertical: Spacing.s16,
    minHeight: 76,
  },
  mascotWrap: { width: 48, height: 48 },
  body: { flex: 1 },
  subtitle: { ...Typography.custom.subtitleSm, color: Colors.content.secondary },
  title: { ...Typography.heading.sm, color: Colors.content.primary, marginTop: 2 },
  arrowBtn: {
    width: Sizing.control.lg,
    height: Sizing.control.lg,
    borderRadius: Radius.full,
    borderWidth: BorderWidth.md,
    borderColor: Colors.border.default,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.surface.container,
  },
});
