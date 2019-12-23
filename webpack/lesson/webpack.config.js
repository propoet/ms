const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports= {
  mode: 'development',
  entry: {
    main: './src/index.js',
    sub: './src/index2.js'
  },
  output: {
    publicPath:'http://cdn.com.cn',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
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
            loader:'css-loader',
            options:{
              importLoaders:2// 通过import引入的scss走css-loader之前，也要走下面的两个loader，
            }
          },
          'sass-loader','postcss-loader']
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
  plugins:[
    new htmlWebpackPlugin({
      template:'src/index.html'
    }),new CleanWebpackPlugin()
  ]
}
