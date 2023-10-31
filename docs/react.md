# Transform a webcomponent into a React application with typescript that can be rendered by Luigi as a Webcomponent

We will use the webcomponent example from [this docs](/docs/no-framework-wc.md)

1. Add typescript
    1. Install dependencies
    ```
    $ npm install -D @babel/core@^7.23.2 @babel/preset-typescript@^7.23.2 babel-loader@^9.1.3 typescript@^5.2.2
    ```
    2. Change JS class that extends _HTMLElement_ to typescript file (in this case _Wc.js_ => _Wc.ts_)
    3. Change _entry_ in _webpack.config.js_ from _./src/Wc.js_ to _./src/Wc.ts_
    4. Add _module_ and _resolve_ properties to _webpack.config.js_
    ```
    module: {
        rules: [
            {
                test: /\.(j|t)s?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },

        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".json"],
    },
    ```
2. Add React
    1. Create `.babelrc`
    ```
    {
        "presets": [
            [
                "@babel/preset-react",
                {
                "runtime": "automatic"
                }
            ]
        ]
    }
    ```
    2. Install React dependencies
    ```
    $ npm install react@18.2.0 react-dom@18.2.0
    ```
    3. Install React types and babel presets
    ```
    $ npm install @babel/preset-react@^7.22.15 @types/react@^18.2.33 @types/react-dom@^18.2.14
    ```
    4. Add `App.tsx` to _src_ folder
    ```
    import React from 'react'

    const App = () => {
        return (
            <h1>Hello Luigi from React</h1>
        )
    }

    export default App
    ```
    5. Rename the _Wc.ts_ to _Wc.tsx_ and replace _connectedCallback()_ method content
    ```
    import ReactDOM from "react-dom/client";
    import App from "./App";

    class Wc extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            console.log("Container connected!");

            const root = ReactDOM.createRoot(this);

            root.render(<App />);
        }
    }

    // window.Luigi._registerWebcomponent(new URL(document.currentScript?.getAttribute('src') || '', location.href), Wc); // use this if this is a Luigi Core WC
    // customElements.define("custom-wc", Wc); // Use this if this is non Luigi WC
    ```
    6. Add `.tsconfig.json`
    ```
    {
        "compilerOptions": {
            "target": "es6",
            "lib": [
                "dom",
                "dom.iterable",
                "esnext"
            ],
            "allowJs": true,
            "skipLibCheck": true,
            "esModuleInterop": true,
            "allowSyntheticDefaultImports": true,
            "strict": true,
            "forceConsistentCasingInFileNames": true,
            "noFallthroughCasesInSwitch": true,
            "module": "esnext",
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "isolatedModules": true,
            "sourceMap": true,
            "noEmit": true,
            "jsx": "react-jsx"
        },
        "include": [
            "src"
        ]
    }
    ```
    7. In _webpack.config.js_
        1. Change Wc _entry_ to
        ```
        Wc: "./src/Wc.tsx"
        ```
        2. Change _test_ property within _rules_ object
        ```
        test: /\.(j|t)sx?$/,
        ```
        3. Change _extensions_ property within _resolve_ object
        ```
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
        ```

