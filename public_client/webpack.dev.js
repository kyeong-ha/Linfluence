// 개발 모드: 개발자들이 좀 더 보기 편하게 웹팩 로그나 결과물이 보여진다

const Dotenv = require('dotenv-webpack');
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval",
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true,
        proxy: {
            '/api':
            {
                target: 'http://localhost:5002',
                changeOrigin: true,
            }   
        },
    },
    plugins: [new Dotenv()],
});