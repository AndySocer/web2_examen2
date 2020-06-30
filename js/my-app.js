// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Delivery Food',
	dialog: {
		title: 'Delivery Food',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/index/',
    	url: 'index.html',
    	name: 'index',
  		},
        {
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
        {
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
        {
		path: '/infoproducto/',
    	url: 'infoproducto.html',
    	name: 'infoproducto',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;

$$('#btnAlerta').on('click', function(){
    app.dialog.alert('Hola Diseño Web 2');
});















 

