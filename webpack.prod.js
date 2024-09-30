const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'production',
  stats: {
    errorDetails: true
  },
  entry: {
    notate: path.resolve(__dirname, 'src', 'App.jsx'),
    background: path.resolve(__dirname, 'src', 'Background', 'background.js'),
    content: path.resolve(__dirname, 'src', 'Content', 'content.jsx')
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'Static'),
          to: path.resolve(__dirname, 'dist')
        },
        {
          from: path.resolve(__dirname, 'src', 'Assets'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'Notate', 'index.html'),
      filename: 'index.html',
      chunks: []
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true
  },
  optimization: {
    minimize: true, 
    minimizer: [  
      new TerserPlugin({
         terserOptions: {
	    output: {
	       ascii_only: true
	    }
         }
      })
    ]},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
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
        exclude: /\.module\.css$/
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.json$/,
        type: 'json'
      },
      {
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
  },
  externals: {
    //'@dev/devutils.js': 'DevTools'
  }
};
