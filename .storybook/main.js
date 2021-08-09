const path = require('path');

module.exports = {
  stories: [
    '../src/docs/getting-started.stories.mdx',
    '../src/docs/contributing.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-jest',
    '@storybook/addon-viewport'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });

    return config;
  }
};
