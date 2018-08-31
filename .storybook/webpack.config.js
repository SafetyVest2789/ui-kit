const path = require('path');
const createWebpackConfigForDevelopment = require('@commercetools-frontend/mc-scripts/config/create-webpack-config-for-development');
const createWebpackConfigForProduction = require('@commercetools-frontend/mc-scripts/config/create-webpack-config-for-production');

const sourceFolders = [
  path.resolve(__dirname),
  path.resolve(__dirname, '../examples'),
  path.resolve(__dirname, '../src'),
];

const mcWebpackConfigDev = createWebpackConfigForDevelopment({
  distPath: '', // not important
  entryPoint: '', // not important
  sourceFolders,
  toggleFlags: {
    // Disable generation of index.html
    generateIndexHtml: false,
  },
});
const mcWebpackConfigProd = createWebpackConfigForProduction({
  distPath: '', // not important
  entryPoint: '', // not important
  sourceFolders,
  toggleFlags: {
    // Disable extract CSS, as building the production bundles for Storybook
    // fails with that.
    enableExtractCss: false,
    // Disable generation of index.html
    generateIndexHtml: false,
  },
});
const uikitWebpackConfig = {
  devtool: 'source-map',
  module: {
    rules: [
      // Storybook uses a plugin to load and render markdown files.
      {
        test: /\.md$/,
        use: [
          { loader: require.resolve('html-loader') },
          { loader: require.resolve('markdown-loader') },
        ],
      },
    ],
  },
};

const getRulesConfig = configType => {
  const config =
    configType === 'PRODUCTION' ? mcWebpackConfigProd : mcWebpackConfigDev;
  return config.module.rules;
};

module.exports = (storybookBaseConfig, configType) => {
  // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  storybookBaseConfig.devtool = uikitWebpackConfig.devtool;
  storybookBaseConfig.module.rules = getRulesConfig(configType).concat(
    uikitWebpackConfig.module.rules
  );

  return storybookBaseConfig;
};
