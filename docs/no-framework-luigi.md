# Create a non-React webcomponent with Luigi Core in it

This Webcomponent can behave also as a Parent/Compound Webcomponent with nested children webcomponents (see step 6.2) -> This is the way to render multiple micro frontends simultaneously with Luigi framework.

1. Use the steps for creating a [webcomponent](/docs/no-framework-wc.md)
2. Add _luigi-config.js_ inside _src_ folder
```
Luigi.setConfig({
    navigation: {
        nodes: [
            ... Configure your nodes in here ...
        ]
    },
    routing: {
        useHashRouting: true
    },
    settings: {
        header: {
            title: 'Hello Luigi',
        }
    }
});
```
3. Add an _entry_ to _webpack.config.js_ (the property name "luigi-config" defines the name for inserting it in the index.html - see steps below)
```
"luigi-config": "./src/luigi-config.js",
```
4. Add Luigi
    * Using _unpkg_:
        1. Insert this into /public/index.html into _\<head\>_ part
        ```
        <link rel='stylesheet' href='https://unpkg.com/@luigi-project/core/luigi.css'>
        <script src="https://unpkg.com/@luigi-project/core/luigi.js"></script>
        <!-- This is the luigi-config that is exposed by webpack mentioned in step 3 -->
        <script src="/luigi-config.js"></script>
        ```
    * As a node dependency:
        1. Add the script tag into /public/index.html into _\<head\>_ part
        ```
        <!-- This is the luigi-config that is exposed by webpack mentioned in step 3 -->
        <script src="/luigi-config.js"></script>
        ```
        2. Replace _html-webpack-plugin_ with _copy-webpack-plugin_
        ```
        $ npm uninstall html-webpack-plugin
        ```
        ```
        $ npm install -D copy-webpack-plugin@^11.0.0
        ```
        3. In _plugins_ section inside _webpack.config.js_ remove _HTMLWebpackPlugin_ with
        ```
        new CopyWebpackPlugin(
            {
                patterns: [
                    { context: 'public', to: 'index.html', from: 'index.html' },
                    { context: 'node_modules/@luigi-project/core', to: './luigi-core', from: "**" }
                ]
            },
            { ignore: ['.gitkeep', '**/.DS_Store', '**/Thumbs.db'], debug: 'warning' }
        )
        ```

5. In you JS class (named _Wc_ in [md](/docs/no-framework-wc.md)) that extends _HTMLElement_, change the element definition from:
```
customElements.define("custom-wc", Wc);
```

to:

```
window.Luigi._registerWebcomponent(new URL(document.currentScript?.getAttribute('src') || '', location.href), Wc);
```
6. Define the navigation node in _luigi-config.js_
    1. As a single webcomponent
    ```
    {
        pathSegment: "wc",
        label: "Core Webcomponent",
        viewUrl: "/Wc.js",
        webcomponent: {
            selfRegistered: true
        },
    }
    ```
    2. As a Compound webcomponent
    ```
    {
        pathSegment: "wc",
        label: "Core Webcomponent",
        viewUrl: "/Wc.js",
        webcomponent: {
            selfRegistered: true
        },
        compound: {
            ... define your children webcomponents here ...
        }
    }
    ```

## Compound Webcomponent

To render nested micro frontend webcomponents in Compound Webcomponent:

* In _Luigi Core's_ component, create `slot` elements, e.g. (`/container.App.tsx`):
```
import React from 'react'

const App = () => {
  return (
    <>
      <div>
        <h3>These are the two Microfrontends rendered simultaneously:</h3>
      </div>
      <div>
        <slot name="mf-1">This is the place for micro frontend 1.</slot>
      </div>
      <div>
        <slot name="mf-2">This is the place for micro frontend 2.</slot>
      </div>
    </>
  )
}

export default App
```
* Then use the `name` properties of these slots inside `luigi-config.js`
```
{
    pathSegment: "compoundWc",
    label: "Compound WebComponent",
    viewUrl: "/Container.js",
    webcomponent: {
        selfRegistered: true
    },
    compound: {
        children: [
            {
                viewUrl: "<path-to-webcomponent-1>",
                webcomponent: {
                    tagName: "name-defined-in-customElements.define(...)",
                    selfRegistered: true,
                },
                layoutConfig: {
                    slot: "mf-1"
                }
            },
            {
                viewUrl: "<path-to-webcomponent-2>",
                webcomponent: {
                    tagName: "name-defined-in-customElements.define(...)",
                    selfRegistered: true,
                },
                layoutConfig: {
                    slot: "mf-2"
                }
            }
        ]
    }
}
```