const express = require('express');

class Router {
	
	constructor(api) {
		this.mount(api);
	}
	
	mount(api){
		
		api.get('/', function (req, res) {

			console.log('params: ' + JSON.stringify(req.params));
			console.log('query: ' + JSON.stringify(req.query));
			
			res.send("OK");
		});
	}
}

module.exports = (api) => {
  return new Router(api);
};