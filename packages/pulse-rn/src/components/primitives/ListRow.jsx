import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Spacing, Radius, Colors, Typography } from '../../theme';

/**
 * Pulse ListRow — used for tracker rows, settings rows, etc.
 * Props: leading (icon/avatar node), title, subtitle, trailing (node), onPress.
 */
export default function PulseListRow({
  leading,
  title,
  subtitle,
  trailing,
  onPress,
  style,
}) {
  const Container = onPress ? TouchableOpacity : View;
  return (
    <Container
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.row, style]}
    >
      {leading ? <View style={styles.leading}>{leading}</View> : null}
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text> : null}
      </View>
      {trailing ? <View style={styles.trailing}>{trailing}</View> : null}
    </Container>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.s12,
  },
  leading: { marginRight: Spacing.s12 },
  body: { flex: 1 },
  title: { ...Typography.title.md, color: Colors.content.primary },
  subtitle: { ...Typography.body.sm, color: Colors.content.tertiary, marginTop: Spacing[2] },
  trailing: { marginLeft: Spacing.s12 },
});
