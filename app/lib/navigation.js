/**
 * Stack-based navigation module which manages the navigation state and such for an app.
 * This particular module manages a stack of views added to a specific parent
 * most common in a one-window architecture.
 *
 * @class Navigation
 */

/**
 * The Navigation object
 * @param {Object} _args
 * @param {Object} _args.parent The parent which this navigation stack will belong
 * @constructor
 */
function Navigation(_args) {

	var that = this;

	_args = _args || {};

	/**
	 * Whether or not the navigation module is busy opening/closing a screen
	 * @type {Boolean}
	 */
	this.isBusy = false;

	/**
	 * The controller stack
	 * @type {Array}
	 */
	this.controllers = [];

	this.prescriptionControllers = [];
	this.doctorControllers = [];
	this.accountControllers = [];
	this.storeControllers = [];
	//this.landingControllers=["landing"];

	/**
	 * The current controller object reference
	 * @type {Controllers}
	 */
	this.currentController = null;

	/**
	 * The parent object all screen controllers are added to
	 * @type {Object}
	 */
	this.parent = _args.parent;

	this.openMenuLink = function(_currentScreen, _nextScreen, _firstPage, _controllerArguments) {

		var _controller;

		if (_currentScreen == "prescriptions") {
			that.prescriptionControllers = that.controllers;
		} else if (_currentScreen == "careteam") {
			that.doctorControllers = that.controllers;
		} else if (_currentScreen == "stores") {
			that.storeControllers = that.controllers;
		} else if (_currentScreen == "account") {
			that.accountControllers = that.controllers;
		}

		that.controllers = [];

		if (_nextScreen == "prescriptions") {

			that.controllers = that.prescriptionControllers;
		} else if (_nextScreen == "careteam") {
			that.controllers = that.doctorControllers;
		} else if (_nextScreen == "stores") {
			that.controllers = that.storeControllers;
		} else if (_nextScreen == "account") {
			that.controllers = that.accountControllers;
		}

		if (that.controllers.length < 1) {
			_controller = _firstPage;
		} else {
			_controller = that.controllers.pop();

		}
		that.open(_controller, _controllerArguments);
		// that.close();

	};
	/**
	 * Open a screen controller
	 * @param {String} _controller
	 * @param {Object} _controllerArguments The arguments for the controller (optional)
	 * @return {Controllers} Returns the new controller
	 */
	// this.open = function(_controller, _controllerArguments) {
	//
	// // if (that.isBusy) {
	// // alert(that.isBusy);
	// // return;
	// // }
	// var controller;
	// that.isBusy = true;
	// if ( typeof (_controller) == "string") {
	// alert("in typeof");
	// controller = Alloy.createController(_controller, _controllerArguments);
	// // Alloy.createController("prescriptionOne",_controllerArguments);
	// } else {
	// alert(_controller);
	// controller = _controller;
	// }
	// Ti.API.info("1");
	// // Handle removing the current controller from the screen
	// if (that.currentController) {
	// that.animateOut(that.currentController, "left");
	// }
	// Ti.API.info("11");
	// that.controllers.push(controller);Ti.API.info("111");
	// //alert("after push");
	// that.currentController = controller;Ti.API.info("2"+that.currentController+"44"+_controller+"56656"+that.parent);
	// that.parent.add(_controller.getView());Ti.API.info("122");
	// //alert("after getview"); Ti.API.info("11");
	// alert(456);
	// // Handle if the current controller has an override way of opening itself
	// if (that.currentController.open) {
	// alert("open controller");
	// that.currentController.open();
	//
	// that.isBusy = false;
	// } else {
	//
	// if(this.currentController)
	// that.animateIn(this.currentController, "right");
	//
	//
	//
	// }
	// alert(4563);
	// // that.testOutput();
	//
	// return that.currentController;
	// };

	this.open = function(_controller, _controllerArguments) {
		if (that.isBusy) {
			return;
		}

		that.isBusy = true;

		var controller = Alloy.createController(_controller, _controllerArguments);

		// Handle removing the current controller from the screen
		if (that.currentController) {
			that.animateOut(that.currentController, "left");
		}

		that.controllers.push(controller);

		that.currentController = controller;

		that.parent.add(that.currentController.getView());

		// Handle if the current controller has an override way of opening itself
		if (that.currentController.open) {
			that.currentController.open();

			that.isBusy = false;
		} else {
			that.animateIn(this.currentController, "right");
		}

		// that.testOutput();

		return that.currentController;
	};

	/**
	 * Close the controller at the top of the stack
	 * @param {Function} _callback
	 */
	this.close = function(_callback) {
		if (that.isBusy) {
			return;
		}

		that.isBusy = true;

		var outgoingController = that.currentController;
		var incomingController;
		if (that.controllers.length == 1) {
			incomingController = Alloy.createController("landingPage");
		} else {
			incomingController = that.controllers[that.controllers.length - 2];
		}

		// Animate in the previous controller
		if (incomingController) {
			that.parent.add(incomingController.getView());

			if (incomingController.open) {
				incomingController.open();

				that.isBusy = false;
			} else {
				that.animateIn(incomingController, "left");
			}
		} else {

		}
		that.animateOut(outgoingController, "right", function() {
			that.controllers.pop();

			outgoingController = null;

			// Assign the new current controller from the stack
			that.currentController = that.controllers[that.controllers.length - 1];

			if (_callback) {
				_callback();
			}

			// that.testOutput();
		});
	};

	/**
	 * Close all controllers except the first in the stack
	 * @param {Function} _callback
	 */
	// this.closeToHome = function(_callback) {
	// if (that.isBusy) {
	// return;
	// }
	//
	// that.isBusy = true;
	// var incomingController;
	// var outgoingController = that.currentController;
	// // if(that.controllers.length<1){
	// // incomingController=Alloy.createController("landingPage");
	// // }
	// // else{
	// incomingController = Alloy.createController("landingPage");
	// // }
	//
	// // Animate in the previous controller
	// if (incomingController) {
	// that.parent.add(incomingController.getView());
	//
	// if (incomingController.open) {
	// incomingController.open();
	//
	// that.isBusy = false;
	// } else {
	// that.animateIn(incomingController, "left");
	// }
	// }
	//
	// that.animateDisappear(outgoingController, function() {
	// that.controllers.splice(1, that.controllers.length - 1);
	//
	// outgoingController = null;
	//
	// // Assign the new current controller from the stack
	// that.currentController = that.controllers[0];
	//
	// if (_callback) {
	// _callback();
	// }
	//
	// // that.testOutput();
	// });
	// };

	this.closeToHome = function(_callback) {
		if (that.isBusy) {
			return;
		}

		that.isBusy = true;

		var outgoingController = that.currentController;
		var incomingController = that.controllers[0];
		alert(incomingController);
		// Animate in the previous controller
		if (incomingController) {
			that.parent.add(incomingController.getView());

			if (incomingController.open) {
				incomingController.open();
				alert(incomingController);
				that.isBusy = false;
			} else {
				that.animateIn(incomingController, "left");
			}
		}

		that.animateDisappear(outgoingController, function() {
			that.controllers.splice(1, that.controllers.length - 1);

			outgoingController = null;

			// Assign the new current controller from the stack
			that.currentController = that.controllers[0];

			if (_callback) {
				_callback();
			}

			// that.testOutput();
		});
	};

	/**
	 * Close all controllers
	 */
	this.closeAll = function() {
		for (var i = 0, x = that.controllers.length; i < x; i++) {
			that.parent.remove(that.controllers[i].getView());
		}

		that.controllers = [];
		that.currentController = null;

		that.isBusy = false;

		// that.testOutput();
	};

	/**
	 * Animate out a screen controller using opacity
	 * @param {Controllers} _controller
	 * @param {Function} _callback
	 */
	this.animateDisappear = function(_controller, _callback) {
		if (OS_IOS || OS_ANDROID) {
			var animation = Ti.UI.createAnimation({
				transform : Ti.UI.create2DMatrix({
					scale : 0
				}),
				opacity : 0,
				curve : Ti.UI.ANIMATION_CURVE_EASE_IN,
				duration : 300
			});

			animation.addEventListener("complete", function onComplete() {
				for (var i = 0, x = that.controllers.length; i > 1 && i < x; i++) {
					that.parent.remove(that.controllers[i].getView());
				}

				that.isBusy = false;

				if (_callback) {
					_callback();
				}

				animation.removeEventListener("complete", onComplete);
			});

			_controller.getView().animate(animation);
		} else {
			for (var i = 0, x = that.controllers.length; i > 1 && i < x; i++) {
				that.parent.remove(that.controllers[i].getView());
			}

			that.isBusy = false;

			if (_callback) {
				_callback();
			}
		}
	};

	/**
	 * Animate in a screen controller
	 * @param {Controllers} _controller
	 * @param {String} _direction left || right
	 * @param {Function} _callback
	 */
	this.animateIn = function(_controller, _direction, _callback) {
		if (OS_IOS || OS_ANDROID) {
			var animation = Ti.UI.createAnimation({
				opacity : 1,
				duration : 300
			});

			animation.addEventListener("complete", function onComplete() {
				that.isBusy = false;

				if (_callback) {
					_callback();
				}

				animation.removeEventListener("complete", onComplete);
			});

			// WEIRD hack to ensure the animation below works on iOS.
			Ti.API.trace(that.parent.size.width);

			if (OS_IOS) {
				_controller.getView().left = (_direction === "left") ? -that.parent.size.width : that.parent.size.width;

			}
			animation.left = 0;
			_controller.getView().animate(animation);
		} else {
			that.isBusy = false;

			if (_callback) {
				_callback();
			}
		}
	};

	/**
	 * Animate out a screen controller
	 * @param {Controllers} _controller
	 * @param {String} _direction left || right
	 * @param {Function} _callback
	 */
	this.animateOut = function(_controller, _direction, _callback) {
		if (OS_IOS || OS_ANDROID) {
			var animation = Ti.UI.createAnimation({
				opacity : 0,
				duration : 300
			});

			animation.addEventListener("complete", function onComplete() {
				that.parent.remove(_controller.getView());

				that.isBusy = false;

				if (_callback) {
					_callback();
				}

				animation.removeEventListener("complete", onComplete);
			});

			animation.left = (_direction === "left") ? -that.parent.size.width : that.parent.size.width;

			_controller.getView().animate(animation);
		} else {
			that.parent.remove(_controller.getView());

			that.isBusy = false;

			if (_callback) {
				_callback();
			}
		}
	};

	/**
	 * Spits information about the navigation stack out to console
	 */
	this.testOutput = function() {
		var stack = [];

		for (var i = 0, x = that.controllers.length; i < x; i++) {
			if (that.controllers[i].getView().controller) {
				stack.push(that.controllers[i].getView().controller);
			}
		}

		Ti.API.debug("Stack Length: " + that.controllers.length);
		Ti.API.debug(JSON.stringify(stack));
	};
}

// Calling this module function returns a new navigation instance
module.exports = function(_args) {
	return new Navigation(_args);
};
