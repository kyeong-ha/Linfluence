const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@assets": path.resolve(__dirname, "./src/assets/"),
            "@auth": path.resolve(__dirname, "./src/auth/"),
            "@components": path.resolve(__dirname, "./src/components/"),
            "@/types": path.resolve(__dirname, "./src/types/"),
            "@hooks": path.resolve(__dirname, "./src/hooks/"),
            "@pages": path.resolve(__dirname, "./src/pages/"),
            "@styles": path.resolve(__dirname, "./src/styles/"),
            "@utils": path.resolve(__dirname, "./src/utils/"),
        }
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
        new Dotenv(),
    ],
    devServer: {
        proxy: {
            '/youtube.com':
            {
                target: 'https://www.googleapis.com/youtube/v3',
                changeOrigin: true,
            }   
        },
    },
};