import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Radius, Shadows, Spacing, Colors, Typography } from '../../theme';

/**
 * Pulse SegmentedTabs — pill container with per-tab white active pill.
 * Used for 1W/1M/6M/All-time on Progress card.
 */
export default function PulseSegmentedTabs({ tabs, value, onChange }) {
  return (
    <View style={styles.tabs}>
      {tabs.map((t) => {
        const isActive = t === value;
        return (
          <TouchableOpacity
            key={t}
            style={[styles.tab, isActive && styles.tabActive]}
            onPress={() => onChange?.(t)}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{t}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    backgroundColor: Colors.surface.default,
    borderRadius: Radius.full,
    padding: Spacing[4],
  },
  tab: {
    flex: 1,
    paddingVertical: Spacing.s8,
    borderRadius: Radius.full,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: Colors.surface.container,
    ...Shadows.elevation1,
  },
  tabText: { ...Typography.custom.segmentTab, color: Colors.content.tertiary },
  tabTextActive: { color: Colors.content.primary, fontWeight: '700' },
});
