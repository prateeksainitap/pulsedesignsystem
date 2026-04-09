import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './Input';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: { layout: 'centered' },
  argTypes: {
    type: { control: 'select', options: ['Text', 'Dropdown', 'Phone', 'Search'] },
    state: { control: 'select', options: ['Default', 'Focused', 'Filled', 'Error', 'Disabled'] },
    size: { control: 'select', options: ['S', 'M', 'L'] },
  },
  args: {
    type: 'Text',
    state: 'Default',
    size: 'M',
    label: 'Label',
    placeholder: 'Input field title',
    helper: 'Helper text',
    showLabel: true,
    showHelper: true,
  },
};
export default meta;
type Story = StoryObj<typeof TextInput>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <TextInput size="S" label="Small" />
      <TextInput size="M" label="Medium" />
      <TextInput size="L" label="Large" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <TextInput state="Default" label="Default" />
      <TextInput state="Focused" label="Focused" />
      <TextInput state="Filled" label="Filled" value="Hello world" />
      <TextInput state="Error" label="Error" showHelper errorText="This field is required" />
      <TextInput state="Disabled" label="Disabled" />
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <TextInput type="Text" label="Text" />
      <TextInput type="Dropdown" label="Dropdown" />
      <TextInput type="Phone" label="Phone" />
      <TextInput type="Search" placeholder="Search" />
    </div>
  ),
};

export const Matrix: Story = {
  render: () => {
    const states: Array<'Default' | 'Focused' | 'Filled' | 'Error' | 'Disabled'> = [
      'Default', 'Focused', 'Filled', 'Error', 'Disabled',
    ];
    const sizes: Array<'S' | 'M' | 'L'> = ['S', 'M', 'L'];
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 24 }}>
        {sizes.flatMap((sz) =>
          states.map((st) => (
            <TextInput
              key={`${sz}-${st}`}
              size={sz}
              state={st}
              label={`${st} · ${sz}`}
              value={st === 'Filled' ? 'Example value' : undefined}
              showHelper={st === 'Error'}
              errorText="Error message"
            />
          ))
        )}
      </div>
    );
  },
};
