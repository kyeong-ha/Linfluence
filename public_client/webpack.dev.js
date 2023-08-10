// 개발 모드: 개발자들이 좀 더 보기 편하게 웹팩 로그나 결과물이 보여진다

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval",
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true,
    },
});