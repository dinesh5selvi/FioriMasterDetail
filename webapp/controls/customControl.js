sap.ui.define([], function () {

	sap.ui.core.Control.extend("oil.ds.controls.customControl", {
		//metadata
		metadata: {},
		init: function () {},
		renderer: function (oRm, oControl) {
			oRm.write("<h1>Custom control printing heading</h1>");
		}
	});

});