sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/model/resource/ResourceModel"
], function(Controller, ResourceModel) {
	"use strict";

	return Controller.extend("sap.training.controller.Main", {

		onInit: function() {

			var i18nModel = new ResourceModel({
				bundleName: "sap.training.i18n.i18n"
			});

			sap.ui.getCore().setModel(i18nModel, "i18n");
		},

		onRatingChange: function(oEvent) {

			var nValue = oEvent.getSource().getValue();
			var oBundle = sap.ui.getCore().getModel("i18n").getResourceBundle();

			var sMsg = oBundle.getText("flightRatingMsg", [nValue]);

			this.getView().byId("idText").setText(sMsg);
		}

	});
});