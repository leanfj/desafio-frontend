const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// assets.js
const Assets = require("./assets");

module.exports = {
  entry: "./entry.js",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "/img/"
          }
        }
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract([
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css"),
    new CopyWebpackPlugin(
      Assets.CSS.map(asset => {
        return {
          from: path.resolve(__dirname, `./node_modules/${asset}`),
          to: path.resolve(__dirname, "./dist/vendor/css")
        };
      })
    )
  ]
};
