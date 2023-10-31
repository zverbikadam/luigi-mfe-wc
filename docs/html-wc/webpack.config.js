const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        Wc: "./src/Wc.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: false
        }),
    ],
    devServer: {
        port: 3003,
        liveReload: false,
        hot: false
    }
}