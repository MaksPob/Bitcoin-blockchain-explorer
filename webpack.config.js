const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTMLPlugin = new HtmlWebpackPlugin({
  template: "./index.html"
});

module.exports = {
  mode: 'none',
  entry: "./index.jsx",
  output:{
    path: path.resolve(__dirname, 'docs'),
    filename: "bundle.js"
  },
  plugins: [
    HTMLPlugin
  ],
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
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