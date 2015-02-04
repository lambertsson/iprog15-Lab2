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
	
}	
 
