const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'src/public/static'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'src/public/static/media',
                    name: '[path][name].[ext]',
                },
            }
        ]
    },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: "./bundle.css"
    //     })
    // ],
});