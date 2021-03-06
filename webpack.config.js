var path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: path.join(__dirname, 'build/js'),
		filename: 'client.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
        exclude: /(node_modules)/,
				loader: 'babel'
			}
		]
	}
};
