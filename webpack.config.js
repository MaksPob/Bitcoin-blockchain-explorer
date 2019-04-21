const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTMLPlugin = new HtmlWebpackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

module.exports = {
  mode: 'none',
  entry: "./index.jsx",
  output: {
    path: path.join(__dirname, "/docs"),
    filename: "./bundle.js"
  },
  plugins: [
    HTMLPlugin,
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require('./package.json').version),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ]
        }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 9000,
    historyApiFallback: true
  }
}