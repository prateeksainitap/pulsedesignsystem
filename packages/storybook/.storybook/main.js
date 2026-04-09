/** @type { import('@storybook/react-native-web-vite').StorybookConfig } */
export default {
  framework: '@storybook/react-native-web-vite',
  // Explicit list of verified-story files only. As each component is
  // rebuilt against Figma in Phase 2, add its story path here. Legacy
  // seed stories (PulseButton.stories.jsx etc.) are intentionally NOT
  // picked up by this glob until they are rebuilt or deleted.
  stories: [
    '../../pulse-rn/src/components/primitives/Button.stories.jsx',
  ],
  addons: ['@storybook/addon-essentials'],
};
