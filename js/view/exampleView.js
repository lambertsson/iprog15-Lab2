//ExampleView Object constructor
var ExampleView = function (container, model) {

	//Container, div exampleView från app.js
	//model, dinnerModel-objektet
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var numberOfGuests = container.find("#numberOfGuests");
	var plusButton = container.find("#plusGuest");
	var minusButton = container.find("#minusGuest");

//failed attempt to handle onclicks below
	console.log(plusButton);
	
	plusButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests()+1);
		numberOfGuests.html(model.getNumberOfGuests());
		
	});

	minusButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests()-1);
		numberOfGuests.html(model.getNumberOfGuests());

	});
	
	
	numberOfGuests.html(model.getNumberOfGuests());

//fethes all menu items and places them in the browser as radio buttons.
	var dishHolder = [];
	dishHolder = model.getAllDishes().prevObject; //result is an array of 10 objects
	console.log(dishHolder);
	
	dishHolder = $.map(dishHolder, function(value, index) { return [value]; }); //map, returns a new array.
		
		container.append("Rätter: <br> ");
		container.append("<div id='radiobuttons'></div>")
		var radiobuttons = container.find("#radiobuttons");
	$.each(dishHolder, function(dish){
		radiobuttons.append("<input id='radiobuttons'"+dish+" type='radio' name="+this.type+" value="+this.id+">"+this.name+"<br>"); //log: this type "starter1" etc
	});
	
	
	/*radiobuttons.click(function(){
		//model.addDishToMenu(radiobuttons.id);
		console.log(input.id);
	});*/

}	
 
