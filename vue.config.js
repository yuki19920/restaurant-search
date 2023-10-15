const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

module.exports = {
  devServer: {
    proxy: {
      "https://webservice.recruit.co.jp": {
        target: "http://localhost:8080",
      }
    }
  }
};
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'https://webservice.recruit.co.jp',
//         changeOrigin: true,
//       },
//     },
//   },
// };