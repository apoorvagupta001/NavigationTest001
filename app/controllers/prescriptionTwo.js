var args = arguments[0] || {};

var App = require("core");

$.button.applyProperties({
	title : args.text,
	backgroundColor : args.backgroundColor
});

function backClick() {
	Ti.API.info("Click");
	App.Navigator.close();
}

function nextWindow() {
	App.Navigator.open("prescriptionTwo", {
		backgroundColor : "red",
		text : "Back"
	});
 }