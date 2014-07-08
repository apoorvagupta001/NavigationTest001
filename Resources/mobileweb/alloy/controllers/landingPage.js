function Controller() {
    function nextWindow() {
        App.Navigator.open("pageTwo", {
            backgroundColor: "red",
            text: "Back"
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "landingPage";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.landingPage = Ti.UI.createView({
        width: Ti.UI.FILL,
        id: "landingPage"
    });
    $.__views.landingPage && $.addTopLevelView($.__views.landingPage);
    $.__views.label = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        borderColour: Alloy.CFG.defaults.colors.borderColor,
        top: "20%",
        id: "label"
    });
    $.__views.landingPage.add($.__views.label);
    nextWindow ? $.__views.label.addEventListener("click", nextWindow) : __defers["$.__views.label!click!nextWindow"] = true;
    $.__views.menuContainer = Ti.UI.createView({
        width: 280,
        layout: "horizontal",
        top: "40%",
        id: "menuContainer"
    });
    $.__views.landingPage.add($.__views.menuContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var App = require("core");
    $.landingPage.backgroundColor = args.backgroundColor || Alloy.CFG.defaults.colors.backgroundColor;
    $.label.applyProperties({
        text: args.text || "Sorry, no text",
        color: args.color || Alloy.CFG.defaults.colors.borderColor
    });
    for (var i in args.menuItems) {
        var menuItem = Ti.UI.createLabel({
            width: 100,
            height: 100,
            text: args.menuItems[i],
            borderRadius: 10,
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
            backgroundColor: Alloy.CFG.defaults.colors.backgroundColor,
            borderColor: Alloy.CFG.defaults.colors.borderColor,
            borderWidth: 2,
            textAlign: "center",
            color: Alloy.CFG.defaults.colors.textColor
        });
        $.menuContainer.add(menuItem);
    }
    __defers["$.__views.label!click!nextWindow"] && $.__views.label.addEventListener("click", nextWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;