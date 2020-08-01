const path = require('path')

module.exports = {
  publicPath: process.env.VUE_APP_BASE_PATH,

  productionSourceMap: false,

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => [{ ...args[0], ...{ 
        title: process.env.VUE_APP_TITLE,
        keywords: process.env.VUE_APP_KEYWORDS,
        description: process.env.VUE_APP_DESCRIPTION,
      } }])
  },
}