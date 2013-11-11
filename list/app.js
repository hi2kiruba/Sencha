Ext.application({
	name: 'myApp',
	views: ['listview'],
	models: ['listmodel'],
	stores: ['liststore'],	
	launch: function() {
		console.log("launch...");
		Ext.Viewport.add(
			Ext.create('myApp.view.listview')
		);
		
		
		//Dynamic list working
		 /*Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '{title}',
            data: [{
                title: 'Item 1'
            }, {
                title: 'Item 2'
            }, {
                title: 'Item 3'
            }, {
                title: 'Item 4'
            }]
		});*/
	}
});