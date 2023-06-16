const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");


module.exports = {
  entry: {
    main: ['webpack-dev-server/client', './src/index.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: "style-loader", options: { injectType: "linkTag" } },
          { loader: "file-loader", options : { name: '[hash:base64:5]-[name].css' } },
          { loader: "sass-loader" }
        ],
      },
    ],
  },
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: "./index.html" }),
  ]
};