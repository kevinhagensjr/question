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
		return res.send(this.solve(req.query.d));
	}
	
	//get location of resume
	resume(req,res){
		return res.send(model.resume);
	}
	
	//get email address for contact
	email(req,res){
		return res.send(model.email);
	}
	
	//solve puzzle of letters
	solve(question){
		
		//strip instructions from question, turn into array
		const expressions = question.replace('Please solve this puzzle:', '').split('\n');
		const letters     = expressions[0].split(''); //get original letter order
		const sortedLetters = this.sortLetters(expressions,letters); //sort letters based on inequalities
		
		if(!sortedLetters || sortedLetters.length != letter.length){
			return res.send('Failed to solve problem :(');
		}
		
		//send the answer to the problem
		return res.send(this.getAnswer(sortedLetters,letters));
	}
	
	/*
		@params - expressions - each expression that must be solved
		@params - the original set of letters sent with problem
		Description: sort letters based on inequalities, retun sorted letters
	*/
	sortLetters(expressions,letters){
		
		let sortedLetters = expressions[0].split('');
		let ordering = true;
		
		//sort letters based on inequalities
		while(ordering){
		
			var updated = false; //check to see if order has been updated
		
			for(let i = 1; i < expressions.length; i++){
				
				const expression = expressions[i]; //expression for current letter
				const letter = expression.charAt(0); //letter of current expression
				
				for(let x = 1; x < expression.length; x++){
					
					const operator = expression.charAt(x); //current operator in expression
									
					if(operator == '-' || operator == '='){ //skip if not an inequality
						continue;
					}
					
					const currentLetter = letters[x]; //get letter being evaluated
					let currentLetterIndex = sortedLetters.indexOf(currentLetter); //get evaluated letter position in order
					let letterIndex = sortedLetters.indexOf(letter); //get the orginal letter position in the order			
					
					if(operator == '>'){
					
						//only move letter if behind current letter
						if(letterIndex < currentLetterIndex){
							
							sortedLetters.splice(letterIndex,1); 
						
							currentLetterIndex = sortedLetters.indexOf(currentLetter); //get updated letter position in order	
							sortedLetters.splice(currentLetterIndex + 1,0,letter); //move letter in front of current letter
							updated = true;
							continue;
						}
					}
					
					if(operator == '<'){
						
						if(letterIndex > currentLetterIndex){
							
							sortedLetters.splice(letterIndex,1);
							
							currentLetterIndex = sortedLetters.indexOf(currentLetter); //get updated letter position in order	
							sortedLetters.splice(currentLetterIndex,0,letter); //move letter behind of current letter
							updated = true;
							continue;
						}	
					}
				}
				
				//stop sorting if all items in order
				if(!updated){
					ordering = false;
				}
			}
		}
		
		return sortedLetters;
	}
	
	/*
		@params - expressions - each expression that must be solved
		@params - the original set of letters sent with problem
		Description: solve inequality matrix, return answeer
	*/
	getAnswer(sortedLetters,letters){
		
		var matrix = []; //holds answers to inequalites on n x n matrix
	
		for(let i = 0; i < letters.length; i++){
			
			if(i == 0){
				matrix.push(letters.join(''));
				continue;
			}
			
			const letter = letters[i];
			let row = [];
			row.push(letter);
			
			for(let x =1; x < sortedLetters.length; x++){
				
				const currentLetter = letters[x];
				
				
				if(letter == currentLetter){
					row.push('=');
					continue;
				}
				
				//solve inequality
				let letterIndex = sortedLetters.indexOf(letter);
				let currentLetterIndex = sortedLetters.indexOf(currentLetter);
				
				if(letterIndex < currentLetterIndex){
					row.push('<');
				}else{
					row.push('>');
				}
			}
			
			matrix.push(row.join(''));
		}
	
		return matrix.join('\n');

	}
}

module.exports = new IndexController();