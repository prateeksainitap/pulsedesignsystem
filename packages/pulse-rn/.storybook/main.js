/** @type { import('@storybook/react-vite').StorybookConfig } */
export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: async (config) => {
    // Alias react-native → react-native-web so RN components render in the browser.
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js', '.web.jsx', '.web.ts', '.web.tsx',
      '.js', '.jsx', '.ts', '.tsx',
      ...(config.resolve.extensions || []),
    ];
    return config;
  },
};
