const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true,
  transpileDependencies: [
    'vue-advanced-chat'
  ],
  css: {
    loaderOptions: {
      sass: {
        // additionalData: `@import "./src/vue-advanced-chat/src/styles/index.scss";`
      }
    }
  },
})
