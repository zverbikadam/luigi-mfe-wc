# PoC micro frontends project to test the capabilities of Luigi framework

Requirement: Use Luigi's _WebComponents_ approach of rendering micro frontends with React and UI5 frameworks

## Run locally

In each folder (container, react-wc and ui5-wc):

1. `$ npm ci`
2. `$ npm start`

* container is available at http://localhost:3000
* react-wc is available at http://localhost:3001
* ui5-wc is available at http://localhost:3002/idex.html

Guide for creating these webcomponents from scratch (no `create-react-app` or similar) is in [docs](/docs/)

## Project structure

* [container](/container/) -> Contains _Luigi Core_ with _luigi-config.js_ and wires everything together
* [react-wc](/react-wc/) -> React micro frontend as a webcomponent
* [ui5-wc](/ui5-wc/) -> UI5 micro frontend as a webcomponent

## How to create each of these micro frontends

1. Create container Luigi Core app
    * [Create a custom HTML WebComponent](/docs/no-framework-wc.md)
    * [Add Luigi Core to the WC](/docs/no-framework-luigi.md)
    * [Add typescript and React](/docs/react.md)
2. Create a React micro frontend webcomponent
    * [Create a custom HTML WebComponent](/docs/no-framework-wc.md)
    * [Add typescript and React](/docs/react.md)
3. [Create an UI5 micro frontend webcomponent](/docs/ui5.md)



