const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		pageA: path.resolve(__dirname, 'pageA'),
		pageB: path.resolve(__dirname, 'pageB'),
	},
	output: {
		path: path.join(__dirname, "js"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      minChunks: 2,
    }),
	]
};
