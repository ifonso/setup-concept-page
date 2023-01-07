const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const mode = process.env.NODE_ENV === "production" ? process.env.NODE_ENV : "development";

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()]
  },

  entry: "./src/script.js",
  output: {
    path: path.resolve(process.cwd(), "dist/min"),
    filename: "script.min.js"
  },

  plugins: [new MiniCssExtractPlugin()]
}