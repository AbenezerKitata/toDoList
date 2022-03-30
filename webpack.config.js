const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode:'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // note order is from last to first
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  devServer: {
      static: './dist',
      open: true
  }
};
