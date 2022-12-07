module.exports = {
  configureWebpack: {
    performance: {
      hints:false,
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
    },
  },
};

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


