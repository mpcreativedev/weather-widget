const path = require('path')

module.exports = {
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