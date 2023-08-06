const path = require('path');

module.exports = {
    mode: 'development',
    entry : './src/index.js',
    output : { 
        path : path.resolve(__dirname, "bundleBuild"),
        filename : 'build.js'
    },
    module: {
        rules: [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                use : "babel-loader"
            },
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"]
            }            
        ],
    },
}