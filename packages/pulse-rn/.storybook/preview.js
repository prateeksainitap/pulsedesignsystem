import { Colors } from '@your-org/pulse-tokens';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'WeightEasy-Light',
      values: [
        { name: 'WeightEasy-Light', value: Colors.surface.default },
        { name: 'Inverse', value: Colors.surface.inverse },
        { name: 'White', value: '#ffffff' },
      ],
    },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    layout: 'centered',
  },
};

export default preview;
