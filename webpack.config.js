const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const paths = {
  index: path.resolve(__dirname, "./src/index.js"),
  client: path.resolve(__dirname, "./src"),
  dist: path.resolve(__dirname, "./dist"),
  config: path.resolve(__dirname),
};
const cssLoaders = {
  test: /\.(css|scss)$/,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "sass-loader",
    "postcss-loader",
  ],
};

const assetLoader = {
  test: /\.(eot|woff|woff2|ttf|png|jpg|gif|svg)$/,
  type: "asset",
  parser: {
    dataUrlCondition: {
      maxSize: 4 * 1024, // 4kb
    },
  },
};

const babelLoader = {
  test: /\.js?$/,
  exclude: /node_modules/,
  loader: "babel-loader",
};

module.exports = {
  entry: {
    main: paths.index,
  },
  output: {
    filename: "main.js",
    clean: true,
    library: {
      name: "DocEditor",
      type: "umd",
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: "source-map",
  resolve: {
    modules: [paths.client, "node_modules"],
    extensions: ["*", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      cssLoaders,
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
      assetLoader,
      babelLoader,
    ],
  },
  externals: ["react", "react-dom"],
  stats: "minimal",
};
