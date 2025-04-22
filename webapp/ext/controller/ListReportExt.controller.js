sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        handleCreateSTO: function(oEvent) {
            MessageToast.show("Custom handler Create STO invoked.");
        },
        handleManageSO: function(oEvent) {
        MessageToast.show("Custom handler Manage SO invoked.");
        }
    };
});