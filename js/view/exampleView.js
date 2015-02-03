//ExampleView Object constructor
var ExampleView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

//failed attempt to handle onclicks below

	plusButton.onclick = function() {
		model.setNumberOfGuests(model.getNumberOfGuests()+1);
		container.numberOfGuests.html(model.getNumberOfGuests());

		this.numberOfGuests.html("hej");
		numberOfGuests.html("hej1");
		container.numberOfGuests.html("hej2");
		
	}

	minusButton.onclick = function() {myFunction()}; 

	function myFunction() {

		this.numberOfGuests.html("hej");
		numberOfGuests.html("hej1");
		container.numberOfGuests.html("hej2");
	}
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	
}	
 
