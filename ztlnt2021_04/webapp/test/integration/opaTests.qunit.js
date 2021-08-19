/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"numen/talentos/ztlnt202104/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});