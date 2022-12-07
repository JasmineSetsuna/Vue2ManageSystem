const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: undefined, // 开发模式没有输出，不需要指定输出目录
    filename: "main.js",
    // clean: true, 不需要自动清空
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        loader: "babel-loader",
      },
      {
        test: /\.(vue)$/,
        use: {
          loader: "vue-loader",
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: false, // 是否自动打开浏览器
  },
};
