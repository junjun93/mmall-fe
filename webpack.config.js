//没有这个变量，需要引入
var webpack = require('webpack');
var config = {
	entry: {
		'index': ['./src/page/index/index.js'],
		'login': ['./src/page/login/index.js']
	},
	output: {
		path: './dist',
		filename: 'js/[name].js'
	},
	/*extenals: {
		'jquery': 'window.jQuery'
	},*/
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: 'js/base.js'
		})
	]

};
module.exports = config;