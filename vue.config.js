const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //解决跨域问题：前端解决
  devServer:{
    proxy:{
      '/api':{
        target:'https://www.neu.edu.cn',
        changeOrgin: true
      }
    }
  }
})
