const model = require('./../model');

class IndexController{
	constructor(){

	}
	
	//pinging server for connection
	ping(req,res){
		return res.send(model.ping);
	}
	
	//get current residential status
	status(req,res){
		return res.send(model.status);
	}
	
	//get position applying for
	position(req,res){
		return res.send(model.position);
	}
	
	//get years as a developer
	years(req,res){
		return res.send(model.years);
	}
	
	//get phone number
	phone(req,res){
		return res.send(model.phone);
	}
	
	//get full name
	name(req,res){
		return res.send(model.name);
	}
	
	//get source code for this project
	source(req,res){
		return res.send(model.source);
	}
	
	//get referrer for job
	referrer(req,res){
		return res.send(model.referrer);
	}
	
	//get education
	degree(req,res){
		return res.send(model.degree);
	}
	
	//solve puzzle question
	puzzle(req,res){
		return res.send(model.solve);
	}
	
	//get location of resume
	resume(req,res){
		return res.send(model.resume);
	}
	
	//get email address for contact
	email(req,res){
		return res.send(model.email);
	}
}

module.exports = new IndexController();