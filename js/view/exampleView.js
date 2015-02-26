//ExampleView Object constructor
//This view is not in use
var ExampleView = function (container, model) {

	//Container, div exampleView från app.js
	//model, dinnerModel-objektet
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var numberOfGuests = container.find("#numberOfGuests");
	var plusButton = container.find("#plusGuest");
	var minusButton = container.find("#minusGuest");
	var addDishButton = container.find("#addDish");
	var removeDishButton = container.find("#removeDish");

	//console.log(plusButton);
	
	plusButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests()+1);
		numberOfGuests.html(model.getNumberOfGuests());
		
	});

	minusButton.click(function () {
	    if (model.getNumberOfGuests()-1 >= 0) { // So that it won't go below 0.
	        model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	        numberOfGuests.html(model.getNumberOfGuests());
	    }

	});

    // Adds the selected dish to the menu
	addDishButton.click(function () {
	    //console.log("addDishButton pressed. Items in menu before adding 2: " + model.getLengthOfMenu());
	    model.addDishToMenu(1);
	    model.addDishToMenu(8);
	    //console.log("Dishes in menu after: " + model.getLengthOfMenu());
	});

    // Removes the selected dish from the menu
	removeDishButton.click(function () {
	    //console.log("removeDishButton pressed. Items in menu before removing 2: " + model.getLengthOfMenu());
	    model.removeDishFromMenu(1);
	    model.removeDishFromMenu(8);
	    //console.log("Dishes in menu after: " + model.getLengthOfMenu());
	});
	
	numberOfGuests.html(model.getNumberOfGuests());

//fethes all menu items and places them in the browser as radio buttons.
	var dishHolder = [];
	dishHolder = model.getAllDishes().prevObject; //result is an array of 10 objects
	//console.log(dishHolder);
	
	dishHolder = $.map(dishHolder, function (value, index) { return [value]; }); //map, returns a new array.
	
    // Added a listContainer to contain the radiobuttons (it's a div in the html)
	var listContrainer = container.find('#listContainer');
	listContrainer.append("Rätter: <br> ");
	listContrainer.append("<div id='radiobuttons'></div>");
	var radiobuttons = listContrainer.find("#radiobuttons");
	$.each(dishHolder, function (dish) {
	    radiobuttons.append("<input id='radiobuttons'" + dish + " type='radio' name=" + this.type + " value=" + this.id + ">" + this.name + "<br>"); //log: this type "starter1" etc
	});

}	
 
