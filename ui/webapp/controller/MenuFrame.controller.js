sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/Popover',
	'sap/m/Button',
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
	'sap/m/MessageToast'
], function (Controller, Popover, Button, Filter, FilterOperator, MessageToast) {
	"use strict";

	return Controller.extend("cerpass.ui.controller.MenuFrame", {

		onInit : function() {
			this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);
			
			//Filter
			//var aFilter = [];
			//var sQuery = "dyn";
			//aFilter.push(new Filter("location", FilterOperator.Equals, sQuery));
			//var oList = this.getView().byID("main");
			//var oBinding = oList.getBinding("items");
			//oBinding.filter(aFilter);
		},

		onUserNamePress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Profile',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Help',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		},

		onSideNavButtonPress : function() {
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			var sideExpanded = toolPage.getSideExpanded();

			this._setToggleButtonTooltip(sideExpanded);

			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},
		// TO DO - need to change text to i18n
		_setToggleButtonTooltip : function(bLarge) {
			var toggleButton = this.byId('sideNavigationToggleButton');
			if (bLarge) {
				toggleButton.setTooltip('Expand Navigation');
			} else {
				toggleButton.setTooltip('Collapse Navigation');
			}
		},
		onItemSelect : function(oEvent) {
			//var item = oEvent.getParameter('item');
			//var viewId = this.getView().getId();
			//sap.ui.getCore().byId(viewId + "--pageContainer").to(viewId + "--" + item.getKey())
			//var oScrollContainer = sap.ui.getCore().byId('sc1');
			//oScrollContainer.addContent(viewId);

			var oItem = oEvent.getParameter('item');
			var sKey = oItem.getKey();
			// if you click on home, settings or statistics button, call the navTo function
		//	if ((sKey === "activities" || sKey === "tileMasterData" || sKey === "module")) {
				// if the device is phone, collaps the navigation side of the app to give more space
				//if (Device.system.phone) {
				//	this.onSideNavButtonPress();
				//}
				this.getRouter().navTo(sKey);
		//	} else {
		//		MessageToast.show(sKey);
		//	}
		},

		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		}

	});
});