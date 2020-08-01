const path = require('path')

module.exports = {
  publicPath: process.env.VUE_APP_BASE_PATH,

  productionSourceMap: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/scss/global.scss')
      ]
    },
  },

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