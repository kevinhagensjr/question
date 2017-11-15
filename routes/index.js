const express = require('express');
const controller = require('./../controller');

class Router {
	
	constructor(api) {
		this.mount(api);
	}
	
	mount(api){
		
		api.get('/', function (req, res) {

			console.log('Answering question: ' + req.query.d);
			return this.parseRequest(req,res);
		});
	}
	
	//route request to proper conroller to answer question
	parseRequest(req,res){
		
		let question = req.query.q;
		
		switch(question){
			
			case 'Ping':
				return controller.ping(req,res);
			break;
			
			case 'Staus':
				return controller.status(req,res);
			break;
			
			case 'Position':
				return controller.position(req,res);
			break;
			
			case 'Years':
				return controller.years(req,res);
			break;
			
			case 'Phone':
				return controller.phone(req,res);
			break;
			
			case 'Name':
				return controller.name(req,res);
			break;
			
			case 'Source':
				return controller.source(req,res);
			break;
			
			case 'Referrer':
				return controller.referrer(req,res);
			break;
			
			case 'Degree':
				return controller.degree(req,res);
			break;
			
			case 'Puzzle':
				return controller.puzzle(req,res);
			break;
			
			case 'Resume':
				return controller.resume(req,res);
			break;
			
			case 'Email Address':
				return controller.email(req,res);
			break;
			
			default:
				return res.send('Failed to parse question'); //In case different question sent
			break;
		}
	}
}

module.exports = (api) => {
  return new Router(api);
};