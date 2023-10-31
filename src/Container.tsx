import ReactDOM from "react-dom/client";
import App from "./App";

class CoreContainer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Container connected!");

        const root = ReactDOM.createRoot(this);

        root.render(<App />);
    }
}

customElements.define("core-container", CoreContainer);