const path = require('path')

module.exports = function () {
  return {
    context: path.resolve(__dirname, './src'),
    entry: './index',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: path.join(__dirname, "dist")
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
  }
}
