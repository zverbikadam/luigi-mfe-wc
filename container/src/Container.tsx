import ReactDOM from "react-dom/client";
import App from "./App";

class CoreContainer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Container connected!");

        const shadow = this.attachShadow({ mode: 'open' });

        const root = ReactDOM.createRoot(shadow);

        root.render(<App />);
    }
}

// @ts-ignore
window.Luigi._registerWebcomponent(new URL(document.currentScript?.getAttribute('src') || '', location.href), CoreContainer);
