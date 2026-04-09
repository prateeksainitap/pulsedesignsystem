/** @type { import('@storybook/react-native-web-vite').StorybookConfig } */
export default {
  framework: '@storybook/react-native-web-vite',
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    // Pull stories straight out of @pulse/rn so there is never a drift
    // between "what Storybook shows" and "what the app ships".
    '../../pulse-rn/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
};
