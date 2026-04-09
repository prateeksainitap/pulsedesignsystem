import React, { useState } from 'react';
import { Pressable, Text, View, Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Typography, Radius, Spacing, BorderWidth } from '../../theme';

/** PulseSelect — TODO: search, multi-select, leading icon, error state. */
export default function PulseSelect({ value, onChange, options = [], placeholder = 'Select…', disabled }) {
  const [open, setOpen] = useState(false);
  const current = options.find((o) => o.value === value);
  return (
    <>
      <Pressable
        onPress={() => !disabled && setOpen(true)}
        style={{
          flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
          minHeight: 48, paddingHorizontal: Spacing.s16,
          borderWidth: BorderWidth.sm, borderColor: Colors.border.default,
          borderRadius: Radius.md, backgroundColor: Colors.surface.container,
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <Text style={[Typography.body.md, { color: current ? Colors.content.primary : Colors.content.tertiary }]}>
          {current?.label ?? placeholder}
        </Text>
        <MaterialCommunityIcons name="chevron-down" size={20} color={Colors.content.secondary} />
      </Pressable>
      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable onPress={() => setOpen(false)} style={{ flex: 1, backgroundColor: '#0008', justifyContent: 'center', padding: Spacing.s24 }}>
          <View style={{ backgroundColor: Colors.surface.container, borderRadius: Radius.lg, padding: Spacing.s8 }}>
            <FlatList
              data={options}
              keyExtractor={(o) => String(o.value)}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => { onChange?.(item.value); setOpen(false); }}
                  style={{ paddingVertical: Spacing.s12, paddingHorizontal: Spacing.s16 }}
                >
                  <Text style={[Typography.body.md, { color: Colors.content.primary }]}>{item.label}</Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}
