import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PulseButton from './PulseButton';
import { Colors, Spacing } from '../../theme';

export default {
  title: 'Primitives/PulseButton',
  component: PulseButton,
  argTypes: {
    type: { control: 'inline-radio', options: ['primary', 'secondary', 'tertiary'] },
    size: { control: 'inline-radio', options: ['L', 'M', 'S'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { type: 'primary', size: 'L', disabled: false, fullWidth: false, label: 'Log dose' },
};

export const Primary = (args) => <PulseButton {...args} />;

export const WithLeftIcon = (args) => (
  <PulseButton
    {...args}
    leftIcon={<MaterialCommunityIcons name="needle" size={20} color={Colors.content.inverse} />}
  />
);
WithLeftIcon.args = { label: 'Log dose' };

export const AllSizes = () => (
  <View style={{ gap: Spacing.s12, width: 280 }}>
    <PulseButton label="Large"  size="L" />
    <PulseButton label="Medium" size="M" />
    <PulseButton label="Small"  size="S" />
  </View>
);

export const AllVariants = () => (
  <View style={{ gap: Spacing.s12, width: 280 }}>
    <PulseButton label="Primary"   type="primary" />
    <PulseButton label="Secondary" type="secondary" />
    <PulseButton label="Tertiary"  type="tertiary" />
    <PulseButton label="Disabled"  disabled />
  </View>
);
