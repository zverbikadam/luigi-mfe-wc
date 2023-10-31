Luigi.setConfig({
    navigation: {
        validWebcomponentUrls: [
            '.*?',
        ],
        nodes: [
            {
                pathSegment: "home",
                label: "Home",
                children: [
                    {
                        pathSegment: "container",
                        label: "Container",
                        viewUrl: "/Container.js",
                        webcomponent: {
                            selfRegistered: true
                        },
                        compound: {
                            children: [
                                {
                                    viewUrl: "http://localhost:3001/ReactWc.js",
                                    webcomponent: {
                                        tagName: "react-wc",
                                        selfRegistered: true,
                                    },
                                    layoutConfig: {
                                        slot: "mf-1"
                                    }
                                },
                                {
                                    viewUrl: "http://localhost:3002/Ui5Wc.js",
                                    webcomponent: {
                                        tagName: "ui5-wc",
                                        selfRegistered: true,
                                    },
                                    layoutConfig: {
                                        slot: "mf-2"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    routing: {
        useHashRouting: true
    },
    settings: {
        header: {
            title: 'Hello Luigi',
        },
        responsiveNavigation: 'Fiori3',
        btpToolLayout: true
    }
});