function Controller() {
    function config(_params) {
        Alloy.CFG.defaults = _params.defaults;
        if ("slider" == _params.menuType) {
            App.menu = Alloy.createWidget("ds.slideMenu", _params);
            App.globalWindow.add(App.menu.getView());
        } else App.Navigator.open(_params.template, {
            backgroundColor: "white",
            text: "Home Screen",
            menuItems: _params.menuItems
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rootWindow = Ti.UI.createWindow({
        id: "rootWindow"
    });
    $.__views.rootWindow && $.addTopLevelView($.__views.rootWindow);
    $.__views.masterContainer = Ti.UI.createView({
        id: "masterContainer"
    });
    $.__views.rootWindow.add($.__views.masterContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.configurations1.defaults.colors.backgroundColor = "purple";
    var App = require("core");
    App.globalWindow = $.rootWindow;
    App.globalWindow.open();
    App.init();
    Ti.App.Properties.hasProperty("configurations") ? config(Ti.App.Properties.getObject("configurations")) : Ti.App.Properties.setObject("configurations", Alloy.CFG.configurations1);
    config(Alloy.CFG.configurations1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;