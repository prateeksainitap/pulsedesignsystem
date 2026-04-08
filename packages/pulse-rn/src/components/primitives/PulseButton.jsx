import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Radius, Colors, Typography, Shadows } from '../../theme';

/**
 * Pulse Button — mirrors Figma spec:
 *   Theme=WeightEasy, Type=Primary|Secondary|Tertiary, Size=L|M|S, State=Default|Pressed|Disabled
 *
 * Size L:  height 56, padding 16, label 16/700, gap 8
 * Size M:  height 48, padding 14, label 15/700
 * Size S:  height 40, padding 12, label 14/700
 * Primary Default: fill #050814, label #FDFDFD, inner-shadow 0/8/20 #5D6A85
 * Secondary: fill #FDFDFD, border #DCE1E8, label #050814
 * Tertiary: transparent, label #050814
 */
const SIZES = {
  L: { height: 56, pad: 16, type: Typography.custom.buttonL },
  M: { height: 48, pad: 14, type: Typography.custom.buttonM },
  S: { height: 40, pad: 12, type: Typography.custom.buttonS },
};

export default function PulseButton({
  label,
  onPress,
  type = 'primary',
  size = 'L',
  leftIcon,
  rightIcon,
  disabled,
  fullWidth = true,
  style,
}) {
  const S = SIZES[size] || SIZES.L;

  const isPrimary = type === 'primary';
  const isSecondary = type === 'secondary';

  const bg = disabled
    ? Colors.border.default
    : isPrimary
    ? Colors.surface.inverse
    : isSecondary
    ? Colors.surface.container
    : 'transparent';
  const fg = disabled
    ? Colors.content.tertiary
    : isPrimary
    ? Colors.content.inverse
    : Colors.content.primary;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        {
          height: S.height,
          paddingHorizontal: S.pad,
          backgroundColor: bg,
          borderWidth: isSecondary ? 1 : 0,
          borderColor: Colors.border.default,
          alignSelf: fullWidth ? 'stretch' : 'flex-start',
          opacity: pressed && !disabled ? 0.92 : 1,
        },
        style,
      ]}
    >
      {/* Figma WeightEasy inner-shadow: 0/8/20 #5D6A85 — RN-faked via top-edge gradient */}
      {isPrimary && !disabled && (
        <LinearGradient
          pointerEvents="none"
          colors={['rgba(93,106,133,0.55)', 'rgba(93,106,133,0)']}
          locations={[0, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.55 }}
          style={StyleSheet.absoluteFill}
        />
      )}
      {leftIcon ? <View style={{ marginRight: 8 }}>{leftIcon}</View> : null}
      <Text
        style={{ ...S.type, color: fg }}
      >
        {label}
      </Text>
      {rightIcon ? <View style={{ marginLeft: 8 }}>{rightIcon}</View> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  // Approximation of Figma inner-shadow 0/8/20 #5D6A85 via platform shadow.
  primaryInnerShadow: { ...Shadows.innerPrimary },
});
