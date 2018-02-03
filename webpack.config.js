const webpack             = require('webpack');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin   = require('html-webpack-plugin');

//环境变量配置    dev/inline
const WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

// 获取html-webpack-plugin参数的方法
const getHtmlConfig = function(name, title){
    return {
        template    : './src/view/' + name + '.html',
        filename    : 'view/' + name + '.html',
        favicon     :'./favicon.ico',
        title       : title,
        inject      : true,
        hash        : true,
        chunks      : ['common', name]
    }
}

//webpack config
const config = {
    entry: {
        'common': ['./src/page/common/index.js'],
        'index' : ['./src/page/index/index.js'],
        'login' : ['./src/page/login/index.js']
    },
    output: {
        path        : __dirname + '/dist',
        publicPath  : '/dist/',
        filename    : 'js/[name].js'
    },
    externals: {
        'jquery': 'window.jQuery'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use  : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpg|gif|svg|woffd|eof|ttf|otf)\??.*$/, use: 'url-loader?limit=100&name=resource/[name].[ext]'
            },
        ]
    },
    /*devServer: {
        contentBase: './dist/index.html',
        port: 8088
    },*/
    resolve: {
        alias: {
            node_modules    : __dirname + '/node_modules',
            util            : __dirname + 'src/util',
            page            : __dirname + 'src/page',
            server          : __dirname + 'src/server',
            image           : __dirname + 'src/image'
        }
    },
    plugins: [
        //独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
           name: 'common',
           filename: 'js/base.js'
        }),

        //把css单独打包到文件里
        new ExtractTextPlugin('css/[name].css'),

        //html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
    ]
};
if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}
module.exports = config;