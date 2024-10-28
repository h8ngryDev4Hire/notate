const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
    		notate: path.resolve(__dirname, 'src', 'App.jsx'),
    		background: path.resolve(__dirname, 'src', 'Background', 'background.js'),
    		content: path.resolve(__dirname, 'src', 'Content', 'content.jsx')
	},
	plugins: [
    		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'Notate', 'index.html'),
      			filename: 'index.html',
      			chunks: []
    		})
  	],
  	output: {
    		filename: '[name].pack.js',
    		publicPath: '/',
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
              					postcssOptions: { config: path.resolve(__dirname, 'postcss.config.js') }
        				}
          			}
        		],
        		exclude: /\.module\.css$/
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
      		}]
  	},
  	resolve: {
    		alias: {
      			'@assets': path.resolve(__dirname, 'src', 'Assets'),
   			'@universal': path.resolve(__dirname, 'src', 'Universal'),
   			'@notate': path.resolve(__dirname, 'src', 'Notate'),
   			'@content': path.resolve(__dirname, 'src', 'Content'),
   			'@background': path.resolve(__dirname, 'src', 'Background'),
		}
  	}
};
