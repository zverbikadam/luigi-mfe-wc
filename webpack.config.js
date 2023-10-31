const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        Container: "./src/Container.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    }
}