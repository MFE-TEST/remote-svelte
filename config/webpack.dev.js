const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8084,
    historyApiFallback: {
      index: '/'
    },
  },
  output: {
    publicPath: "http://localhost:8084/",
  },
};

module.exports = merge(commonConfig, devConfig);
