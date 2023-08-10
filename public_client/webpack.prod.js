// 운영 모드(default): 성능 최적화를 위해 기본적인 파일 압축 등의 빌드 과정이 추가된다.

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "hidden-source-map",
});