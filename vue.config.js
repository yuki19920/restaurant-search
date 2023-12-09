const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: "./srv",
    },
  },
});

// const isProduction = process.env.NODE_ENV === 'production';
// const apiEndpoint = isProduction ? 'https://webservice.recruit.co.jp' : 'https://webservice.recruit.co.jp';

module.exports = {
  devServer: {
    proxy: {
      "/hotpepper": {
        // プロキシのエンドポイントを指定
        target: "https://webservice.recruit.co.jp", // 対象のAPIエンドポイント
        changeOrigin: true,
      },
      "/api": {
        target: "http://localhost:3000", // ExpressサーバーのURL
        changeOrigin: true,
        // pathRewrite: {
        //   "^/api": "", // '/api'を取り除く
        // },
      },
    },
  },

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: "./srv",
    },
  },
};
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
