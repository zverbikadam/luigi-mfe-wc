# Create a html webcomponent bundled by webpack

Example of this webcomponent can be found [here](/docs/html-wc/)

1. Create a folder and navigate to it:
```
$ mkdir wc && cd wc
```
2. Initialize node project
```
$ npm init -y
```
3. Create _src_ folder:
```
$ mkdir src
```
4. In _src_ folder create a file `Wc.js`
```
class Wc extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        const hello = document.createElement("h1");
        hello.innerText = "Hello World";

        shadow.appendChild(hello);
    }
}

customElements.define("custom-wc", Wc);
```
5. Create a _public_ folder and _index.html_ file inside it. This html file is needed for local isolated development outside of container.
```
<!-- This HTML file is present for local isolated run -->
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Hello Luigi</title>
    <meta charset="utf-8">
    <script src="/Wc.js"></script>
</head>

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <custom-wc></custom-wc>
</body>

</html>
```
6. Install dev dependencies (webpack webpack-cli webpack-dev-server html-webpack-plugin)
```
$ npm install -D webpack@^5.89.0 webpack-cli@^5.1.4 webpack-dev-server@^4.15.1 html-webpack-plugin@^5.5.3
``` 
7. Create a _webpack.config.js_ (Configure the devserver if running multiple mfe's)
```
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
}
```