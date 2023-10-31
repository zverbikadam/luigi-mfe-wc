Luigi.setConfig({
    navigation: {
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
        }
    }
});