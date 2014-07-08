Alloy.CFG.configurations.defaults.colors.backgroundColor = "purple";
var App = require("core");

App.globalWindow = $.rootWindow;
App.globalWindow.open();

App.init();

if(Ti.App.Properties.hasProperty("configurations")){
	config(Ti.App.Properties.getObject("configurations"));
}
else{
	Ti.App.Properties.setObject("configurations",Alloy.CFG.configurations1);
	
}

config(Alloy.CFG.configurations1);

function config(_params){
		Alloy.CFG.defaults=_params.defaults;
	
	if(_params.menuType == "slider"){
		App.menu = Alloy.createWidget("ds.slideMenu",_params);
		App.globalWindow.add(App.menu.getView());
		// App.Navigator.open(_params.template, {
		// backgroundColor: "white",
		// text: "Home Screen",
		// menuItems:_params.menuItems
// 		
//		});
}
	
	else{
					//alert(_params.template);
		App.Navigator.open(_params.template, {
		backgroundColor: "white",
		text: "Home Screen",
		menuItems:_params.menuItems
		
		});
		
		
		
		
	}
}
function sliderMenu(_params){

var leftData = [];
var rightData = [];

Alloy.Globals.Map = require('ti.map');

var url = "https://hft.remscripts.com/hfonphonehandlerv1/appload";

var menuArray = _params.menuItems || ["Prescriptions", "Refill via camera", "Stores", "Family accounts", "Care team", "Offers", "Target pharmacy", "Accounts"];
var imageArray = ["/images/btnprec.png", "/images/btnrefillviacamera.png", "/images/btnstores.png", "/images/btntransferpresc.png", "/images/btnoffers.png", "/images/btnoffers.png", "/images/btntargetpharmacyrewards.png", "/images/btnaccount.png"];

function createSection() {
	
	var section = Ti.UI.createTableViewSection({

	});

	var customView = Ti.UI.createView({
		height : 'auto',
		backgroundColor : Alloy.Globals.client

	});
	customView.addEventListener('click', function test() {
		//	$.ds.contentview.remove(currentView);
		$.ds.logo.visible = "true";
		$.ds.navtitle.visible = "false";

		if (currentView.id != "msiLandingPage") {

			$.ds.contentview.remove(currentView);
			currentView = Alloy.createController("msiLandingPage").getView();
			$.ds.contentview.add(currentView);

		};

		$.ds.toggleLeftSlider();
	});
	var customLabel = Ti.UI.createLabel({

		bottom : 8,
		left : 10,
		right : 10,

		height : 'auto',
		text : '       back to  ',

		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		color : '#fff'
	});

	// Create an ImageView.
	var anImageView = Ti.UI.createImageView({
		image : '/images/logo_header.png',
		width : 44,
		left : 120

	});
	anImageView.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Create a Label.
	var aLabel = Ti.UI.createLabel({
		text : 'Hi Alice',
		color : '#fff',
		font : {
			fontSize : 16
		},

		top : 55,
		left : 10

	});

	// Add to the parent view.
	customLabel.add(aLabel);

	// Add to the parent view.
	customLabel.add(anImageView);
	customView.add(customLabel);

	section.headerView = customView;

	if (Ti.Platform.osname === 'android') {

		var customView1 = Ti.UI.createView({
			height : 100,
			top : 0,
			backgroundColor : Alloy.Globals.client
		});

		customView.height = "100";
		customView.top = "-50dp";
		$.ds.leftTableView.top = "100dp";
		var aLabel = Ti.UI.createLabel({
			text : 'Hi Alice',
			color : '#fff',
			font : {
				fontSize : 16
			},

			top : 55,
			left : 10

		});
		var anImageView = Ti.UI.createImageView({
			image : '/images/logo_header.png',
			width : 44,
			left : 120,
			top : 10

		});
		var customLabel = Ti.UI.createLabel({

			top : 15,
			left : 10,
			right : 10,

			text : '       back to  ',

			font : {
				fontSize : 20,
				fontWeight : 'bold'
			},
			color : '#fff'
		});

		customView1.add(anImageView);
		customView1.add(aLabel);
		customView1.add(customLabel);

		$.ds.leftMenu.add(customView1);
		customView1.addEventListener('click', function test() {
			//	$.ds.contentview.remove(currentView);
			$.ds.logo.visible = "true";
			$.ds.navtitle.visible = "false";

			if (currentView.id != "msiLandingPage") {

				$.ds.contentview.remove(currentView);
				currentView = Alloy.createController("msiLandingPage").getView();
				$.ds.contentview.add(currentView);

			};

			$.ds.toggleLeftSlider();
		});

	}

	for (var j = 0; j < 8; j++) {

		var args = {
			title : menuArray[j],
			customView : 'view' + j,
			image : imageArray[j]

		};

		section.add(Alloy.createController('menurow', args).getView());
	}

	return section;
}

$.win.addEventListener('return', function(e) {
	alert(e.param);
	Ti.API.debug(e.param);
});

Ti.App.addEventListener("app:itemAddedToBasket", function(e) {

	// object 'e' has all the row information we need to create the row
	$.ds.navtitle.visible = true;

	$.ds.logo.visible = false;
	$.ds.contentview.remove(currentView);
	currentView = Alloy.createController("msiPrescriptionPage").getView();
	$.ds.contentview.add(currentView);
	$.ds.navtitle.text = currentView.id;
	// Now append it to the table

});

function rowSelect(e) {

	if (currentView.id != e.row.customView) {
		
		
		
		
		// if (e.row.customView != "view0" && e.row.customView != "view1" && e.row.customView != "view2" && e.row.customView != "view7" && e.row.customView != "view3" && e.row.customView != "landing") {
			// alert("To be implemented");
			// return;
		// }
		$.ds.navtitle.visible = true;

		$.ds.logo.visible = false;
		
		//currentView = Alloy.createController(e.row.customView).getView();
		if (e.index == 0) {
			Titanium.Analytics.featureEvent('Left Menu', {
				clicked : "prescription"

			});
			
			if (Alloy.Globals.prescriptionList == null || Alloy.Globals.prescriptionList == undefined)
			{
				Alloy.createController("msiLoginPage").getView().open();
				return; 
			}
			else
			{
				$.ds.contentview.remove(currentView);
				currentView = Alloy.createController("msiPrescriptionPage").getView();	
			}
			$.ds.navtitle.text = "Prescription";
		} else if (currentView.id == "view1") {
			$.ds.contentview.remove(currentView);
			Titanium.Analytics.featureEvent('Refill By Scan');
			$.ds.navtitle.text = "Refill By Scan";
		} else if (e.index == 2) {
			$.ds.contentview.remove(currentView);
			Titanium.Analytics.featureEvent('Stores');
			currentView = Alloy.createController("msiStoreLocatorPage").getView();
			$.ds.navtitle.text = "Stores";
		}else if (e.index == 4) {
			$.ds.contentview.remove(currentView);
			Titanium.Analytics.featureEvent('Stores');
			currentView = Alloy.createController("msiDoctorPage").getView();
			$.ds.navtitle.text = "Care Team";
		} 
		
		
		else if (e.index == 7) {
			$.ds.contentview.remove(currentView);
			//Titanium.Analytics.featureEvent('Accounts');
			$.ds.navtitle.text = "Accounts";
		
			currentView = Alloy.createController("msiAccountsPage").getView();
		}

		$.ds.contentview.add(currentView);
	}
}

// Pass data to widget leftTableView and rightTableView
$.ds.leftTableView.data = [createSection()];
//$.ds.rightTableView.data = rightData;

var currentView = Alloy.createController(_params.template,{
	backgroundColor: "white",
		text: "Home Screen",
		menuItems:_params.menuItems
}).getView();
$.ds.contentview.add(currentView);

// Swap views on menu item click
$.ds.leftTableView.addEventListener('click', function selectRow(e) {
	rowSelect(e);
	$.ds.toggleLeftSlider();
});
// $.ds.rightTableView.addEventListener('click', function selectRow(e) {
// rowSelect(e);
// $.ds.toggleRightSlider();
// });

// Set row title highlight colour (left table view)
var storedRowTitle = null;
$.ds.leftTableView.addEventListener('touchstart', function(e) {
	//	storedRowTitle = e.row.customTitle;
	//	storedRowTitle.color = "#FFF";
});
$.ds.leftTableView.addEventListener('touchend', function(e) {
	//storedRowTitle.color = "#666";
});
$.ds.leftTableView.addEventListener('scroll', function(e) {
	// if (storedRowTitle != null)
	// storedRowTitle.color = "#666";
});

// Set row title highlight colour (right table view)
var storedRowTitle = null;

Ti.App.addEventListener("sliderToggled", function(e) {
	if (e.direction == "right") {
		$.ds.leftMenu.zIndex = 2;
		//	$.ds.rightMenu.zIndex = 1;
	} else if (e.direction == "left") {
		$.ds.leftMenu.zIndex = 1;
		//	$.ds.rightMenu.zIndex = 2;
	}
});
}