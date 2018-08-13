sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/Popover',
	'sap/m/Button'
], function (Controller, Popover, Button) {
	"use strict";

	return Controller.extend("cerpass.ui.controller.MenuFrame", {

		onInit : function() {
			this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);
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
			var item = oEvent.getParameter('item');
			var viewId = this.getView().getId();
			sap.ui.getCore().byId(viewId + "--pageContainer").to(viewId + "--" + item.getKey())
			//var oScrollContainer = sap.ui.getCore().byId('sc1');
			//oScrollContainer.addContent(viewId);
		}

	});
});