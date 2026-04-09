import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Spacing, Radius, Shadows, Colors, Typography, Sizing, BorderWidth } from '../../theme';

/**
 * Pulse BottomNav/GLP — 5 tabs, center tab is a raised gradient bubble.
 * Props:
 *   tabs: [{ id, label, icon, center? }]  // icon is a react node (fn of {active})
 *   value, onChange
 */
export default function PulseBottomNav({ tabs, value, onChange }) {
  const [internal, setInternal] = useState(value || tabs[0]?.id);
  const active = value ?? internal;
  const setActive = (id) => {
    setInternal(id);
    onChange?.(id);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = active === tab.id;

        if (tab.center) {
          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.centerTab}
              onPress={() => setActive(tab.id)}
              activeOpacity={0.85}
            >
              <View style={styles.centerBubble}>
                {/* Figma WeightEasy icon-button INNER_SHADOW: r=15, offset(0,4), #5D6A85 */}
                <LinearGradient
                  pointerEvents="none"
                  colors={['rgba(93,106,133,0.55)', 'rgba(93,106,133,0)']}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 0.6 }}
                  style={[StyleSheet.absoluteFill, { borderRadius: Radius.full }]}
                />
                {tab.icon?.({ active: isActive, center: true })}
              </View>
              <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.tabItem}
            onPress={() => setActive(tab.id)}
            activeOpacity={0.7}
          >
            {tab.icon?.({ active: isActive })}
            <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.surface.container,
    borderTopWidth: BorderWidth.sm,
    borderTopColor: Colors.border.subtle,
    paddingTop: Spacing.s12,
    paddingBottom: Spacing.s24,
    paddingHorizontal: Spacing.s8,
    ...Shadows.elevation2,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing[3],
    paddingVertical: Spacing[4],
  },
  label: { ...Typography.label.sm, color: Colors.content.tertiary, marginTop: Spacing[2] },
  labelActive: { color: Colors.content.primary },
  centerTab: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  centerBubble: {
    width: Sizing.control['2xl'],
    height: Sizing.control['2xl'],
    borderRadius: Radius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -18,
    borderWidth: BorderWidth.xl,
    borderColor: Colors.surface.container,
    overflow: 'hidden',
    ...Shadows.glowPrimary,
  },
});
