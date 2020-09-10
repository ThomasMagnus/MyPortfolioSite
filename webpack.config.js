const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
      main: './#src/js/script.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: 'bundle.js'
    },
    mode: 'development',
    watch: true,
    devtool: "source-map",
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    plugins: [
      // new HtmlWebpackPlugin({template: './dist/index.html'}),
      new CleanWebpackPlugin(),
    ]
};