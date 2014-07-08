function Controller() {
    function backClick() {
        Ti.API.info("Click");
        App.Navigator.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "pageTwo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.pageTwo = Ti.UI.createView({
        id: "pageTwo"
    });
    $.__views.pageTwo && $.addTopLevelView($.__views.pageTwo);
    $.__views.button = Ti.UI.createButton({
        height: 40,
        width: 100,
        id: "button"
    });
    $.__views.pageTwo.add($.__views.button);
    backClick ? $.__views.button.addEventListener("click", backClick) : __defers["$.__views.button!click!backClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var App = require("core");
    $.button.applyProperties({
        title: args.text,
        backgroundColor: args.backgroundColor
    });
    __defers["$.__views.button!click!backClick"] && $.__views.button.addEventListener("click", backClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;