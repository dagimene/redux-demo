module.exports = {
	entry: "./src/bootstrap.js",
	output: {
		path: __dirname + "/dist",
		publicPath: '/dist/',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
				test: /\.css$/,
				loader: "style-loader/url!file-loader"
			},
			{
				test: /\.png$/,
				loader: "url-loader?mimetype=image/png"
			},
			{
				test: /\.json/,
				loader: "json-loader"
			}
		]
	}
};
