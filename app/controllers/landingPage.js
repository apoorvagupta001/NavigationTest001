// var args = arguments[0] || {};
// var App= require("core");
// 
// var currentScreen="landing";
// $.landingPage.backgroundColor = args.backgroundColor || Alloy.CFG.defaults.colors.backgroundColor;
// $.label.applyProperties({
	// text: args.text || "Sorry, no text",
	// color: args.color || Alloy.CFG.defaults.colors.borderColor
// });

// for(var i in args.menuItems){
	// var menuItem = Ti.UI.createLabel({
		// width: 100,
		// height:100,
		// text:args.menuItems[i],
		// borderRadius:10,
		// left:20,
		// right:20,
		// top:20,
		// bottom:20,
		// backgroundColor:Alloy.CFG.defaults.colors.backgroundColor,
		// borderColor:Alloy.CFG.defaults.colors.borderColor,
		// borderWidth:2,
		// textAlign:"center",
		// color:Alloy.CFG.defaults.colors.textColor
	// });
	// $.menuContainer.add(menuItem);
// }



// function nextWindow(){
	// App.Navigator.open("pageTwo", {
		// backgroundColor: "red",
		// text: "Back"
	// });
// 
// }
// 
// function prescriptionsClick(){
		// currentScreen="prescription";
		// // Alloy.createController("prescriptionOne").getView().open()
		// App.Navigator.openMenuLink("landing","prescriptions","prescriptionOne",{	
		// backgroundColor: "red",
		// text: "Back"
	// });
// }
// 
// function doctorsClick(){
		// App.Navigator.open("pageTwo", {
		// backgroundColor: "red",.
		// text: "Back"
	// });
// }
// 
// function storesClick(){
		// App.Navigator.open("pageTwo", {
		// backgroundColor: "red",
		// text: "Back"
	// });
// }
// 
// function accountsClick(){
		// App.Navigator.open("pageTwo", {
		// backgroundColor: "red",
		// text: "Back"
	// });
// }


var args = arguments[0] || {};
var App = require("core");

$.landingPage.backgroundColor = args.backgroundColor || Alloy.CFG.defaults.colors.backgroundColor;
$.label.applyProperties({
	text : args.text || "Sorry, no text",
	color : args.color || Alloy.CFG.defaults.colors.borderColor
});

for (var i in args.menuItems) {
	var menuItem = Ti.UI.createLabel({
		width : 100,
		height : 100,
		text : args.menuItems[i],
		borderRadius : 10,
		left : 20,
		right : 20,
		top : 20,
		bottom : 20,
		tag:i,
		id: i,
	
		backgroundColor : Alloy.CFG.defaults.colors.backgroundColor,
		borderColor : Alloy.CFG.defaults.colors.borderColor,
		borderWidth : 2,
		textAlign : "center",
		color : Alloy.CFG.defaults.colors.textColor
	});
	
	
	$.menuContainer.add(menuItem);
	
}

$.menuContainer.children[0].addEventListener("click", function(e){
	nextWindow("prescriptionOne");
});
$.menuContainer.children[1].addEventListener("click", function(e){
	nextWindow("doctorOne");
});
$.menuContainer.children[2].addEventListener("click", function(e){
	nextWindow("storeOne");
});
$.menuContainer.children[3].addEventListener("click", function(e){
	nextWindow("accountOne");
});



function nextWindow(e) {
	 App.Navigator.openMenuLink("landing","prescriptions","prescriptionOne",{	
		backgroundColor : "red",
		text : "Back"
	});

}



