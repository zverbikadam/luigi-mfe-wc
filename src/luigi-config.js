Luigi.setConfig({
    navigation: {
        nodes: {
            viewUrl: "/Container.js",
            webcomponent: {
                tagName: "core-container",
                selfRegistered: true
            },

        }
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