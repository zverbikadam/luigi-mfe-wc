const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        "luigi-config": "./src/luigi-config.js",
        Container: "./src/Container.tsx"
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
        new CopyWebpackPlugin(
            {
                patterns: [
                    { context: 'public', to: 'index.html', from: 'index.html' },
                    { context: 'node_modules/@luigi-project/core', to: './luigi-core', from: "**" }
                ]
            },
            { ignore: ['.gitkeep', '**/.DS_Store', '**/Thumbs.db'], debug: 'warning' }
        )
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
    },
    devServer: {
        port: 3000,
        liveReload: false,
        hot: false
    }
}