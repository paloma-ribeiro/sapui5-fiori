sap.ui.define([], function () {

    "use strict";

    return {

        toCurrency: function (sValue) {
        return sValue !== undefined ? Number(sValue).toFixed(2) : undefined;
        }

    }

});
