const express = require('express');

class Router {
	
	constructor(api) {
		this.mount(api);
	}
	
	mount(api){
		
		app.get('/', function (req, res) {
			console.log(JSON.stringify(req));
			console.log(JSON.stringify(req.body));
		});
	}
}

module.exports = (api) => {
  return new Router(api);
};