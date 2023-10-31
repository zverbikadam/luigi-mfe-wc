const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        "luigi-config": "./src/luigi-config.js",
        Container: "./src/Container.ts"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(j|t)s?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: false
        }),
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: [".js", ".ts", ".json"],
    },
}