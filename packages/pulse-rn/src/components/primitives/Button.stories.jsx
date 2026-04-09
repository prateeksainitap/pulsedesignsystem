/**
 * Button stories — covers every Type × Size × State combination in the
 * Figma Pulse Button component set (2020:11226).
 *
 * Theme property is app-level, not a Storybook arg. Switch themes by
 * importing a different @pulse/tokens output at the app root.
 */
import React from 'react';
import { View } from 'react-native';
import { Button } from './Button';

export default {
  title: 'Primitives/Button',
  component: Button,
  args: {
    label: 'Button',
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['Primary', 'Secondary', 'Tertiary'],
    },
    size: {
      control: { type: 'radio' },
      options: ['L', 'M', 'S'],
    },
    disabled: { control: 'boolean' },
  },
};

export const Default = { args: { type: 'Primary', size: 'L' } };

export const PrimaryAllSizes = {
  render: (args) => (
    <View style={{ gap: 12 }}>
      <Button {...args} type="Primary" size="L" />
      <Button {...args} type="Primary" size="M" />
      <Button {...args} type="Primary" size="S" />
    </View>
  ),
};

export const SecondaryAllSizes = {
  render: (args) => (
    <View style={{ gap: 12 }}>
      <Button {...args} type="Secondary" size="L" />
      <Button {...args} type="Secondary" size="M" />
      <Button {...args} type="Secondary" size="S" />
    </View>
  ),
};

export const TertiaryAllSizes = {
  render: (args) => (
    <View style={{ gap: 12 }}>
      <Button {...args} type="Tertiary" size="L" />
      <Button {...args} type="Tertiary" size="M" />
      <Button {...args} type="Tertiary" size="S" />
    </View>
  ),
};

export const DisabledMatrix = {
  render: (args) => (
    <View style={{ gap: 12 }}>
      <Button {...args} type="Primary"   size="L" disabled />
      <Button {...args} type="Secondary" size="L" disabled />
      <Button {...args} type="Tertiary"  size="L" disabled />
    </View>
  ),
};

export const FullMatrix = {
  render: (args) => (
    <View style={{ gap: 16 }}>
      {['Primary', 'Secondary', 'Tertiary'].map((type) => (
        <View key={type} style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Button {...args} type={type} size="L" label={`${type} L`} />
          <Button {...args} type={type} size="M" label={`${type} M`} />
          <Button {...args} type={type} size="S" label={`${type} S`} />
          <Button {...args} type={type} size="L" label={`${type} Dis`} disabled />
        </View>
      ))}
    </View>
  ),
};
