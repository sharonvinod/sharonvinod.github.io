sap.ui.define(["sap/ui/core/UIComponent"],
function(UIComponent){
	
	return UIComponent.extend("sv.pf.Component", {
		metadata: {
			"manifest" : "json"
		},
		init: function(){
			sap.ui.core.UIComponent.prototype.init.apply(this);
			
			var oRouter = this.getRouter();
				
			oRouter.initialize();
			
		}
	});
	
});