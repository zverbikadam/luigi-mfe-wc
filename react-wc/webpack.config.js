const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        ReactWc: "./src/ReactWc.tsx"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
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
        modules: ["node_modules"],
        extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
    },
    devServer: {
        port: 3001,
        liveReload: false,
        hot: false
    }
}