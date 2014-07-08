function Controller() {
    function backClick() {
        Ti.API.info("Click");
        App.Navigator.close();
    }
    function nextWindow() {
        App.Navigator.open("prescriptionTwo", {
            backgroundColor: "red",
            text: "Back"
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prescriptionTwo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.prescriptionTwo = Ti.UI.createView({
        layout: "vertical",
        id: "prescriptionTwo"
    });
    $.__views.prescriptionTwo && $.addTopLevelView($.__views.prescriptionTwo);
    $.__views.label = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        borderColour: Alloy.CFG.defaults.colors.borderColor,
        text: "Prescription Two",
        id: "label"
    });
    $.__views.prescriptionTwo.add($.__views.label);
    nextWindow ? $.__views.label.addEventListener("click", nextWindow) : __defers["$.__views.label!click!nextWindow"] = true;
    $.__views.button = Ti.UI.createButton({
        id: "button"
    });
    $.__views.prescriptionTwo.add($.__views.button);
    backClick ? $.__views.button.addEventListener("click", backClick) : __defers["$.__views.button!click!backClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var App = require("core");
    $.button.applyProperties({
        title: args.text,
        backgroundColor: args.backgroundColor
    });
    __defers["$.__views.label!click!nextWindow"] && $.__views.label.addEventListener("click", nextWindow);
    __defers["$.__views.button!click!backClick"] && $.__views.button.addEventListener("click", backClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;