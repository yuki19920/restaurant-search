const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

module.exports = {
  devServer: {
    proxy: {
      '/hotpepper': {  // プロキシのエンドポイントを指定
        target: 'https://webservice.recruit.co.jp',  // 対象のAPIエンドポイント
        changeOrigin: true,
        pathRewrite: {
          '^/hotpepper': ''  // プロキシパスのリライト（省略）
        }
      }
    }
  }
}
// module.exports = {
//   devServer: {
//     proxy: {
//       "https://webservice.recruit.co.jp": {
//         target: "http://localhost:8080",
//       }
//     }
//   }
// };
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