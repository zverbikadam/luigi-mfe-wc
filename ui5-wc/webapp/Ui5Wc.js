class Ui5Wc extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Ui5Wc connected!");

        sap.ui.require(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
            new ComponentContainer({
                name: "com.sap.ui5wc"
            }).placeAt(this);
        });
    }
}

customElements.define("ui5-wc", Ui5Wc);