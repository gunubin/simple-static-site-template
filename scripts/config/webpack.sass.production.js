const merge = require('webpack-merge')
const common = require('./webpack.sass.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge.smart(
  common,
  {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: loader => [
                    require('autoprefixer')({
                      browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions']
                    })
                  ],
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          })
        }
      ]
    }
  }
)
