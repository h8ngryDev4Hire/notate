const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		index: path.resolve(__dirname, 'src', 'Notate', 'index.jsx'),
		background: path.resolve(__dirname, 'src', 'Background', 'background.js'),
		content: path.resolve(__dirname, 'src', 'Content', 'content.jsx'),
		
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{
				from: path.resolve(__dirname, 'src', 'Static'),
				to: path.resolve(__dirname, 'prod')
			},{
				from: path.resolve(__dirname, 'src', 'Notate', 'index.html'),
				to: path.resolve(__dirname, 'prod')
			},
			]
		})
	],
	output: {
		filename: '[name].pack.js',
		path: path.resolve(__dirname, "prod"),
		clean: true
	},
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},{
				test: /\.(png|jpg|jpeg|gif)$/i,
       				type: 'asset/resource'
			},{
        			test: /\.(scss|css)$/,
	        		use: ['style-loader', 'css-loader', 'postcss-loader'],
				exclude: /\.module\.css$/,
			},{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack']
			}
		]
	},
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, 'src', 'Assets'),
			'@universal': path.resolve(__dirname, 'src', 'Universal')
		}
	}
}

