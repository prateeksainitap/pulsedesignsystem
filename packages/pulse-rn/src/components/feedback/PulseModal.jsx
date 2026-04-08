import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { Colors, Typography, Spacing, Radius } from '../../theme';

/** PulseModal — TODO: title icon, primary/secondary action layout, dismissible variant. */
export default function PulseModal({ visible, onClose, title, children, actions }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable onPress={onClose} style={{ flex: 1, backgroundColor: '#0008', justifyContent: 'center', padding: Spacing.s24 }}>
        <Pressable style={{ backgroundColor: Colors.surface.container, borderRadius: Radius['2xl'], padding: Spacing.s24, gap: Spacing.s16 }}>
          {title ? <Text style={[Typography.heading.md, { color: Colors.content.primary }]}>{title}</Text> : null}
          {children}
          {actions ? <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: Spacing.s8 }}>{actions}</View> : null}
        </Pressable>
      </Pressable>
    </Modal>
  );
}
