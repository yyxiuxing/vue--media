const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const vueConfig = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    port: 8080
  }
}

module.exports = vueConfig
