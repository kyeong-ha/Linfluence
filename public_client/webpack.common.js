const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
        {
            test: /\.(tsx|ts|js|jsx)$/,
            use: ["babel-loader", "ts-loader"],
        },
        {
            test: /\.(png|jpe?g|gif|mp4)$/,
            use: [
            {
                loader: "file-loader",
            },
            ],
        },
        {
            test: /\.s?css$/,
            use: ["style-loader", "css-loader", "sass-loader"],
        }
        ],
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
};