import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, {
  Defs,
  LinearGradient as SvgLinearGradient,
  RadialGradient as SvgRadialGradient,
  Stop,
  Rect,
} from 'react-native-svg';
import { Spacing, Radius, Colors, Typography } from '../../theme';
import { PulseCard, PulseAvatar, PulseButton } from '../primitives';

/**
 * Header — owns its own gradient and applies the safe-area inset internally so
 * the greeting always sits clear of the status bar / notch.
 */
export default function HeaderSection() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + Spacing.s16 }]}>
      {/* Background: solid base + 3 layered radial halos (mint TL, cyan center-right, soft teal wash) */}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: '#050914' }]} />
      <Svg style={StyleSheet.absoluteFill} preserveAspectRatio="xMidYMid slice">
        <Defs>
          {/* Mint halo, top-left */}
          <SvgRadialGradient id="hMint" cx="16%" cy="20%" rx="66%" ry="66%" fx="16%" fy="20%">
            <Stop offset="0"    stopColor="#1AD98E" stopOpacity="0.88" />
            <Stop offset="0.18" stopColor="#12B574" stopOpacity="0.62" />
            <Stop offset="0.42" stopColor="#0A8456" stopOpacity="0.33" />
            <Stop offset="0.72" stopColor="#054D34" stopOpacity="0.10" />
            <Stop offset="1"    stopColor="#081525" stopOpacity="0" />
          </SvgRadialGradient>
          {/* Cyan halo, center-right */}
          <SvgRadialGradient id="hCyan" cx="44%" cy="40%" rx="76%" ry="76%" fx="44%" fy="40%">
            <Stop offset="0"    stopColor="#08B5D0" stopOpacity="0.62" />
            <Stop offset="0.25" stopColor="#0990AD" stopOpacity="0.38" />
            <Stop offset="0.55" stopColor="#0A6878" stopOpacity="0.16" />
            <Stop offset="0.85" stopColor="#073C4A" stopOpacity="0.04" />
            <Stop offset="1"    stopColor="#081525" stopOpacity="0" />
          </SvgRadialGradient>
          {/* Soft teal wash, full */}
          <SvgRadialGradient id="hWash" cx="25%" cy="25%" rx="100%" ry="100%" fx="25%" fy="25%">
            <Stop offset="0"   stopColor="#0D9488" stopOpacity="0.15" />
            <Stop offset="0.5" stopColor="#0A5C55" stopOpacity="0.08" />
            <Stop offset="1"   stopColor="#081525" stopOpacity="0" />
          </SvgRadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#hMint)" />
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#hCyan)" />
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#hWash)" />
      </Svg>
      <View style={styles.topRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.greetingSmall}>Good Morning Manit!</Text>
          <Text style={styles.dayText}>Day 1 of Cycle</Text>
        </View>
        <PulseAvatar
          size="LG"
          initials="MK"
          backgroundColor={Colors.interaction.selected}
          textColor={Colors.primary.default}
        />
      </View>

      <Text style={styles.subtitle}>
        Your appetite suppression is stable, and energy will be returning.
      </Text>

      <PulseCard style={styles.doseCard} padding={Spacing.s24}>
        {/* Faint syringe watermark, top-right */}
        <View pointerEvents="none" style={styles.doseWatermark}>
          <MaterialCommunityIcons name="needle" size={109} color={Colors.content.primary} />
        </View>
        <View style={styles.doseLabelRow}>
          <MaterialCommunityIcons name="pill" size={16} color={Colors.content.secondary} />
          <Text style={styles.doseLabel}>Next Dose - Ozempic • 0.5mg</Text>
        </View>
        <Text style={styles.doseBig}>Due today</Text>

        <View style={styles.progressTrack}>
          <Svg width="100%" height="6">
            <Defs>
              <SvgLinearGradient id="doseGrad" x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0" stopColor={Colors.accent.mint} />
                <Stop offset="0.5" stopColor={Colors.accent.blue} />
                <Stop offset="1" stopColor={Colors.accent.purple} />
              </SvgLinearGradient>
            </Defs>
            <Rect x="0" y="0" width="35%" height="6" rx="3" fill="url(#doseGrad)" />
          </Svg>
        </View>

        <PulseButton
          label="Log dose"
          size="M"
          type="primary"
          leftIcon={<MaterialCommunityIcons name="needle" size={20} color={Colors.content.inverse} />}
          onPress={() => {}}
          style={{ marginTop: Spacing.s8 }}
        />
      </PulseCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: Spacing.s16,
    paddingBottom: Spacing.s28,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.s12,
  },
  greetingSmall: { ...Typography.custom.subtitleSm, color: Colors.content.inverse, opacity: 0.92 },
  dayText: { ...Typography.heading.lg, color: Colors.content.inverse, marginTop: 2 },
  subtitle: {
    ...Typography.custom.subtitleMd,
    color: Colors.content.inverse,
    opacity: 0.9,
    marginTop: Spacing.s16,
  },
  doseCard: {
    marginTop: Spacing.s24,
    overflow: 'hidden',
  },
  doseWatermark: {
    position: 'absolute',
    top: -8,
    right: -8,
    opacity: 0.06,
    transform: [{ rotate: '-18deg' }],
  },
  doseLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  doseLabel: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    color: Colors.content.secondary,
  },
  doseBig: {
    ...Typography.display.sm,
    color: Colors.content.onSurface,
    marginTop: Spacing.s4,
    marginBottom: Spacing.s12,
  },
  progressTrack: {
    height: 6,
    backgroundColor: Colors.surface.default,
    borderRadius: Radius.full,
    overflow: 'hidden',
    marginBottom: Spacing.s16,
  },
});
