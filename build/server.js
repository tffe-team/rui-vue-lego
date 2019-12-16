'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.server.js');

const compiler = Webpack(webpackConfig);

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  open: true,
  stats: {
    colors: true,
  },
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(9000, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:9000');
});