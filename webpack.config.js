var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      }
    ]
  },
  // webpack-dev-serverのオプション
  // 詳細は以下
  // https://webpack.js.org/configuration/dev-server/#devserver
  devServer: {
    contentBase: path.join(__dirname, 'dist'),

    // index.htmlのみのSPAの際に「http://hoge.com/user/status」的なURLにアクセスがあった場合
    // 当然404エラーを通常返す
    // そういう場合にindex.htmlを呼び出させる場合はtrue
    historyApiFallback: true
  }
};
