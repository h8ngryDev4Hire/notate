const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const postcssConfig = require('./postcss.config');
const { config } = require('process');


module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	stats: {
		errorDetails: true	
	},
	entry: {
		notate: path.resolve(__dirname, 'src', 'App.jsx'),
		background: path.resolve(__dirname, 'src', 'Background', 'background.js'),
		content: path.resolve(__dirname, 'src', 'Content', 'content.jsx'),
		devutils: path.resolve(__dirname, 'src', 'DevUtils', 'devutils.js')
		
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{
				from: path.resolve(__dirname, 'src', 'Static'),
				to: path.resolve(__dirname, 'prod')
			},{
				from: path.resolve(__dirname, 'src', 'Assets'),
				to: path.resolve(__dirname, 'prod')
			}]
		}),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'Notate', 'index.html'),
			filename: 'index.html',
			chunks: []
		})
	],
	output: {
		filename: '[name].pack.js',
		path: path.resolve(__dirname, "prod"),
		publicPath: "/",
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
	        		use: [
					
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								config: path.resolve(__dirname, 'postcss.config.js')
							}
						}
					}
				],
				exclude: /\.module\.css$/,
			},{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack']
			},{
				test: /\.json$/,
				type: 'json'
			},{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			}
		]
	},
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, 'src', 'Assets'),
			'@universal': path.resolve(__dirname, 'src', 'Universal'),
			'@notate': path.resolve(__dirname, 'src', 'Notate'),
			'@content': path.resolve(__dirname, 'src', 'Content'),
			'@background': path.resolve(__dirname, 'src', 'Background'),
			'@dev': path.resolve(__dirname, 'src', 'DevUtils')
		}
	}
}

