import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, Radius, BorderWidth } from '../../theme';

/**
 * PulseInput — TODO: bind variants (default/error/disabled), leading/trailing icons, helper text.
 */
export default function PulseInput({ label, value, onChangeText, placeholder, error, disabled, ...rest }) {
  return (
    <View style={{ gap: Spacing.s4 }}>
      {label ? <Text style={[Typography.label.lg, { color: Colors.content.secondary }]}>{label}</Text> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.content.tertiary}
        editable={!disabled}
        style={[
          styles.input,
          { borderColor: error ? Colors.border.error : Colors.border.default,
            backgroundColor: disabled ? Colors.surface.default : Colors.surface.container,
            color: Colors.content.primary,
            ...Typography.body.md },
        ]}
        {...rest}
      />
      {error ? <Text style={[Typography.label.md, { color: Colors.status.error }]}>{error}</Text> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: BorderWidth.sm,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.s16,
    paddingVertical: Spacing.s12,
    minHeight: 48,
  },
});
