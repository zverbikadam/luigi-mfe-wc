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