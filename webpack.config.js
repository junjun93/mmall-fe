const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'

    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eof|ttf|otf)$/,
                use: 'file-loader'
            },
            {
                test: /\.(csv|dsv)$/,
                use: 'csv-loader'
            },
            {
                test: /\.xml$/,
                use: 'xml-loader'
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    externals: {
       'jquery': 'window.jQuery'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ]
};