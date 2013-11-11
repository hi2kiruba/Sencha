Ext.define("myApp.store.liststore", {
	extend: "Ext.data.Store",
	requires: [
        'myApp.model.listmodel'
    ],

	//alias: 'store.liststore',
	config: {
	
		model: 'myApp.model.listmodel',
		autoLoad: true,
		//storeId: 'liststore',
		data: [{
                "title": "Item 1"
            }, {
                "title": "Item 2"
            }, {
                "title": "Item 3"
            }, {
                "title": "Item 4"
            }]
	}

});