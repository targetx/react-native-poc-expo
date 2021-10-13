const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = p => path.resolve(__dirname, p);

module.exports = {
  entry: "./index.web.tsx",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // use: "babel-loader",
        options: {plugins: ['react-hot-loader/babel']}
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: [".ts", ".js", ".tsx"],
  },
  // plugins: [new webpack.HotModuleReplacementPlugin()],
  plugins: [new HtmlWebpackPlugin({
    template: resolve('web/index.html')})]
}