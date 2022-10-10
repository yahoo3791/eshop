const { defineConfig } = require('@vue/cli-service');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave: false,
  publicPath: '/eshop/',
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin({
        excludeAliases: ['console']
      })
    ]
  }
  })
