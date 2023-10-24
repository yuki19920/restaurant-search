const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

const isProduction = process.env.NODE_ENV === 'production';
const apiEndpoint = isProduction ? 'https://webservice.recruit.co.jp' : 'https://webservice.recruit.co.jp';

module.exports = {
  devServer: {
    proxy: {
      '/hotpepper': {  // プロキシのエンドポイントを指定
        target: apiEndpoint,  // 対象のAPIエンドポイント
        changeOrigin: true,
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