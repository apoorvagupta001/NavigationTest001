function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ds.slideMenu/" + s : s.substring(0, index) + "/ds.slideMenu/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Label",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "container",
    style: {}
}, {
    isId: true,
    priority: 100000.0003,
    key: "label",
    style: {
        borderColour: Alloy.CFG.defaults.colors.borderColor
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "leftMenu",
    style: {
        top: "0",
        left: "0",
        width: "250",
        zIndex: "2",
        backgroundColor: Alloy.Globals.client
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "logo",
    style: {
        height: 34,
        top: 5,
        width: Ti.UI.SIZE,
        image: "/images/logo_header.png"
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "navview",
    style: {
        top: "0",
        left: "0",
        width: Ti.Platform.displayCaps.platformWidth,
        height: "44",
        backgroundColor: Alloy.Globals.client
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "movableview",
    style: {
        left: "0",
        zIndex: "3",
        width: Ti.Platform.displayCaps.platformWidth
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "contentview",
    style: {
        left: "0",
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.UI.Fill,
        top: "44",
        backgroundColor: "white"
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "shadowview",
    style: {
        shadowColor: "black",
        shadowOffset: {
            x: "0",
            y: "0"
        },
        shadowRadius: "2.5"
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "leftButton",
    style: {
        backgroundImage: "/ds.slideMenu/ButtonMenu.png",
        left: "10",
        top: "10",
        width: "31",
        height: "24",
        style: "none"
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "rightButton",
    style: {
        backgroundImage: "/ds.slideMenu/ButtonMenu.png",
        right: "10",
        top: "10",
        width: "31",
        height: "24",
        style: "none",
        visible: false
    }
} ];