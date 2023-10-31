# Create an UI5 micro frontend webcomponent that Luigi can display

1. Create a simple UI5 webcomponent without `Component.js` and without _XML_ views
    1. Create a new folder for UI5 wc project
    ```
    $ mkdir ui5-wc && cd ui5-wc
    ```
    2. Initialize a node project
    ```
    npm init -y
    ```
    3. Add `ui5.yaml` file
    ```
    specVersion: '3.1'
    metadata:
    name: ui5-wc
    type: application
    resources:
    configuration:
        paths:
        webapp: webapp
    framework:
    name: SAPUI5
    version: "1.119.2"
    libraries:
        - name: sap.m
        - name: sap.ui.core
    server:
    settings:
        httpPort: 3002
    ```
    4. Create `webapp` folder with javascript class in it `Wc2.js`
    ```
    class WcWc2 extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            console.log("WC2 connected!");

            sap.ui.require(["sap/m/Button"], (Button) => {
                new Button({ text: "Hello" }).placeAt(this);
            });
        }
    }

    customElements.define("wc-wc2", WcWc2);
    ```
    5. Add `index.html` inside `webapp` folder
    ```
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>UI5 WC</title>
        <script id="sap-ui-bootstrap" src="resources/sap-ui-core.js" data-sap-ui-theme="sap_horizon"
            data-sap-ui-resourceroots='{"com.sap.ui5wc": "./"}' data-sap-ui-compatVersion="edge" data-sap-ui-async="true"
            data-sap-ui-frameOptions="trusted"></script>
        <script src="/Wc2.js"></script>
    </head>

    <body class="sapUiBody" id="content">
        <wc-wc2></wc-wc2>
    </body>

    </html>
    ```
    6. Add `manifest.json` to `webapp`
    ```
    {
        "sap.app": {
            "id": "com.sap.ui5wc",
            "type": "application",
            "applicationVersion": {
                "version": "1.0.0"
            }
        }
    }
    ```
2. Add `Component.js` and _XML_ views
    1. Add `sap.ui5` property to `manifest.json`
    ```
    "sap.app": {
        "id": "com.sap.ui5wc",
        "type": "application",
        "applicationVersion": {
            "version": "1.0.0"
        }
    }
    ```
    2. Create `Main.view.xml` inside `webapp/view` folder
    ```
    <mvc:View id="mainView" xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
        <Button text="Hello from view" />
    </mvc:View vc:View>
    ```
    3. Create `Component.js` file inside `webapp` folder
    ```
    sap.ui.define([
        "sap/ui/core/UIComponent",
    ], (UIComponent) => {
        return UIComponent.extend("com.sap.ui5wc.Component", {
            metadata: {
                manifest: "json"
            },

            onInit: function () {
                UIComponent.prototype.init.apply(this, arguments);
            }
        })
    });
    ```
    4. Replace `sap.ui.require(...)` part in `connectedCallback()` method inside _Wc2.js_ class
    ```
    sap.ui.require(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
        new ComponentContainer({
            name: "com.sap.ui5wc"
        }).placeAt(this);
    });
    ```
3. To be able to render this UI5 micro frontend, you need to add following script tag in the `Luigi Core's index.html` file (replace the localhost:3002 with the url where your UI5 microfrontend is running)
```
<script id="sap-ui-bootstrap" src="https://ui5.sap.com/resources/sap-ui-core.js" data-sap-ui-theme="sap_horizon"
        data-sap-ui-resourceroots='{"com.sap.ui5wc": "./"}' data-sap-ui-compatVersion="edge" data-sap-ui-async="true"
        data-sap-ui-resourceroots='{"com.sap.ui5wc": "http://localhost:3002/"}' data-sap-ui-compatVersion="edge" data-sap-ui-async="true"
        data-sap-ui-frameOptions="trusted"></script>
```