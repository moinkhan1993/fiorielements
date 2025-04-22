sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        handleCheckAvailability: function(oEvent) {
            MessageToast.show("Custom handler Check Availability invoked.");
        }
    };
});