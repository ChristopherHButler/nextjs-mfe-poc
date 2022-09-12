const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');




const devConfig = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'reactified',
      filename: 'remoteEntry.js',
      exposes: {
        './ReactifiedIndex': './src/bootstrap'
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
