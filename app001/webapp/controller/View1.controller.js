sap.ui.define([
    "numen/talentos/app001/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../model/formatter"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, Filter, FilterOperator, formatter) {
		"use strict";

		return BaseController.extend("numen.talentos.app001.controller.View1", {
            formatter: formatter,
            
            onInit: function () {

                var oInput = this.byId("companyInput");
                oInput.bindProperty("value", "companyModel>/ScarrSet/Carrname");

                //var vLayout = this.byId("vLayout");
                //vLayout.bindElement("companyModel>/ScarrSet");

                /*var oListControl = this.byId("companyList");

                var oUIControl = new sap.m.ObjectListItem({
                    title: "{Carrname}",
                    type: "Active"
                });

                oUIControl.addAttribute(new sap.m.ObjectAttribute({
                    text: "{Url}"
                }));

                oUIControl.addAttribute(new sap.m.ObjectAttribute({
                    text: "{Currcode}"
                }));

                oListControl.bindAggregation("items", "/ScarrSet", oUIControl);*/

            },

            onFilterCompanies : function (oEvent) {
                
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");
                sQuery = sQuery.toUpperCase();
                if (sQuery) {
                    aFilter.push(new Filter("Carrid", FilterOperator.EQ, sQuery));
                }

                var oList = this.getView().byId('companyList');
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            },

            onListItemPressed: function(oEvent){

                var oItem, oCtx;
                oItem = oEvent.getSource();
                oCtx = oItem.getBindingContext();
                this.getRouter().navTo("RouteCompanyDetail", {
                    Carrid: oCtx.getProperty("Carrid")
                });
            },

            onBtnCreatePress: function(oEvent){

                this.getRouter().navTo("RouteCompanyDetail",{
                    Carrid: "New"
                });
            }
		});
	});
