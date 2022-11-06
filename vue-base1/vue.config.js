const { defineConfig } = require('@vue/cli-service');
const { name } = require('./package');
module.exports =defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    port:3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      uniqueName: `webpackJsonp_${name}`
      // jsonpFunction: `webpackJsonp_${name}`
    },
  },
})

