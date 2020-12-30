const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", //input
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  }, //output
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};
//babel.config.json
//https://github.com/techwithtim/Music-Controller-Web-App-Tutorial/blob/main/Tutorial%201%20-%204/frontend/babel.config.json
// webpack.config.json
//https://github.com/techwithtim/Music-Controller-Web-App-Tutorial/blob/main/Tutorial%201%20-%204/frontend/webpack.config.js