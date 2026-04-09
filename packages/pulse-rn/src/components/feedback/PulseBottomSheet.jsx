import React from 'react';
import { Modal, View, Pressable } from 'react-native';
import { Colors, Spacing, Radius } from '../../theme';

/** PulseBottomSheet — TODO: snap points, drag gesture, backdrop. Replace with @gorhom/bottom-sheet for production. */
export default function PulseBottomSheet({ visible, onClose, children }) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable onPress={onClose} style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: '#0008' }}>
        <Pressable style={{
          backgroundColor: Colors.surface.container,
          borderTopLeftRadius: Radius['3xl'],
          borderTopRightRadius: Radius['3xl'],
          padding: Spacing.s24,
          gap: Spacing.s16,
        }}>
          <View style={{ alignSelf: 'center', width: 36, height: 4, borderRadius: 9999, backgroundColor: Colors.border.strong }} />
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
}
