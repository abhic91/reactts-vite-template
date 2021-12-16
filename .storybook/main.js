const react = require('@vitejs/plugin-react').react;

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  async viteFinal(config, { configType }) {
    config.plugins = [...config.plugins, react()];
    return config;
  },
};
