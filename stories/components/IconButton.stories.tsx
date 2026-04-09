import React from 'react';
import { IconButton } from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: { layout: 'centered' },
  argTypes: {
    theme: { control: 'radio', options: ['tapHealth', 'weightEasy'] },
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    size: { control: 'select', options: ['L', 'M', 'S'] },
    state: { control: 'select', options: ['default', 'pressed', 'disabled'] },
  },
  args: { theme: 'tapHealth', variant: 'primary', size: 'M', state: 'default', 'aria-label': 'Next' },
};

export const Playground = (args: any) => <IconButton {...args} />;

const TYPES = ['primary', 'secondary', 'tertiary'] as const;
const SIZES = ['L', 'M', 'S'] as const;
const STATES = ['default', 'pressed', 'disabled'] as const;

function Matrix({ theme }: { theme: 'tapHealth' | 'weightEasy' }) {
  return (
    <div style={{ display: 'grid', gap: 24, fontFamily: 'system-ui' }}>
      <h3 style={{ margin: 0, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#5d6a85' }}>
        Theme / {theme}
      </h3>
      {STATES.map((state) => (
        <section key={state}>
          <div style={{ fontSize: 11, color: '#5d6a85', marginBottom: 8 }}>state: {state}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: 16, alignItems: 'center' }}>
            {TYPES.map((variant) =>
              SIZES.map((size) => (
                <IconButton
                  key={`${variant}-${size}-${state}`}
                  theme={theme}
                  variant={variant}
                  size={size}
                  state={state}
                  aria-label={`${variant} ${size} ${state}`}
                />
              ))
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export const TapHealth = () => <Matrix theme="tapHealth" />;
export const WeightEasy = () => <Matrix theme="weightEasy" />;
export const AllThemes = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
    <Matrix theme="tapHealth" />
    <Matrix theme="weightEasy" />
  </div>
);
