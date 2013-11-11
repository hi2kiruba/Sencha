//var blogsStore = Ext.create("myApp.store.liststore");
Ext.define("myApp.view.listview", {
/*extend: 'Ext.List',
        config: {
        fullscreen: true,
        title: 'Haber Listesi',
        store : 'liststore',
        itemTpl : '{title}'
        }

        });*/


	extend: 'Ext.Container',
	xtype: 'listview',
	config: {
		layout: {
			type: "fit"
		},
		//fullscreen: true,
		items: [
		{
			xtype: 'toolbar',
			title:"LIst VIew",
			docked: 'top'
		}
		
		,
		{
			xtype: 'list',
			//width: "400px",
			//height: "500px",
			store: 'liststore',
			itemTpl: '{title}',
			emptyText: 'No Title'
     
		}]
	}
});