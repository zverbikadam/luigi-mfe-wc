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