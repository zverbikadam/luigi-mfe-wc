import ReactDOM from "react-dom/client";
import App from "./App";

class ReactWc extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Container connected!");

        const root = ReactDOM.createRoot(this);

        root.render(<App />);
    }
}

customElements.define("react-wc", ReactWc);