$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"),model);
	var homeView = new HomeView($("#homeView"), model);
	var dinnerOverviewView = new DinnerOverviewView($('#dinnerOverviewView'), model);
	var dinnerPreparationView = new DinnerPreparationView($('#dinnerPreparationView'), model);
	var dishDetailsView = new DishDetailsView($('#dishDetailsView'), model);

	displayView("homeView");
});

function displayView(id){
	$('.viewContainer').css('display', 'none');
	$('#' + id).css('display', 'block');
}
