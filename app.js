const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

class QuestionAPI{
	
	constructor() {
		
		this.running = false;
		
		console.log("API initializing routing..");	
		
		try{
			
			console.log("Setting up express configurations");	
			
			//initialize express
			this.api = express();
			this.api.use(bodyParser.urlencoded({ extended:false }))
			this.api.use(bodyParser.json());
			
			console.log("Setting up router configurations");	
			
			//initialize router
			this.router = require('./routes')(this.api);
	
		}catch(e){
			console.log("Failed to initialize API, " + e);
		}	 	
	}
	
	start(){
		
		//listen for api calls
		this.api.listen(config.port, function () {
			
			console.log('API ready. Listening for api calls on port ' + config.port);
			this.running = true;
		});
	}
	
}

//start topik api
const questionAPI = new QuestionAPI();
questionAPI.start();

