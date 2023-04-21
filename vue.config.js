const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages:{
    index:{
      entry:"examples/main.js",
      template:'public/index.html',
      filename:'index.html'
    }
  },
  transpileDependencies: true,
  css:{
    loaderOptions:{
      scss:{
        additionalData:`@import '~@/assets/css/_var.scss';`
      }
    }
  },
  chainWebpack: config => {
    config.module
          .rule('js')
          .include
            .add('/packages')
            .end()
          .use('babel')
            .loader('babel-loader')
            .tap(options => {
              return options
          })
    config.module
      .rule('images')
        .set('parser', {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4KiB
          }
        })
  }
})
