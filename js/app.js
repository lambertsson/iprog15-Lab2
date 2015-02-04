$(function() {
	//We instantiate our model
	 model = new DinnerModel();
	console.log(model);
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);

});