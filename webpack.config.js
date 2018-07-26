const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'none',
  entry: "./index.jsx",
  output:{
    path: path.resolve(__dirname, './public'),
    publicPath: '/public/',
    filename: "bundle.js"
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
            options:{
              presets:["es2015", "env", "react", "stage-0"],
              plugins: ["transform-es2015-modules-commonjs", "transform-regenerator", "transform-runtime"]
            },
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
    port: 9000,
    historyApiFallback: true
  }
}