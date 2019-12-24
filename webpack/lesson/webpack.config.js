const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    hot:true,
    hotOnly:true
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        options:{
          presets:[["@babel/preset-env",{
            useBuiltIns:'usage' //当做babel-polyfill填充的时候，根据业务代码用到的 加
          }]]
        }
      },
      {
      test: /\.jpg|png|gif$/,
      use: {
        loader: 'url-loader',
        options: {
          // 占位符 ext后缀， hash
          name: '[name]_[hash:8].[ext]',
          outputPath: 'images/',
          limit: 10240
        }
      }
    },
      {
        test: /\.scss$/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2// 通过import引入的scss走css-loader之前，也要走下面的两个loader，
            }
          },
          'sass-loader', 'postcss-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader',
          'css-loader',
          'postcss-loader']
      },
      {
        test: /\.eot|ttf|svg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]',
            outputPath: 'font/'
          }
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html'
    }), new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization:{
    usedExports:true// 开发环境 只打包使用到的js
  }
}
