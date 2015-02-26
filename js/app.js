$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);

	var selectDishView = new SelectDishView($("#selectDishView"),model);
	var selectDishViewController = new SelectDishViewController(selectDishView, model);

	var homeView = new HomeView($("#homeView"), model);
	var homeViewController = new HomeViewController(homeView, model);

	var dinnerOverviewView = new DinnerOverviewView($('#dinnerOverviewView'), model);
	var dinnerOverviewViewController = new DinnerOverviewViewController(dinnerOverviewView, model);

	var dinnerPreparationView = new DinnerPreparationView($('#dinnerPreparationView'), model);
	var dinnerPreparationViewController = new DinnerPreparationViewController(dinnerPreparationView, model);

	var dishDetailsView = new DishDetailsView($('#dishDetailsView'), model);
	var dishDetailsViewController = new DishDetailsViewController(dishDetailsView, model);

	var sideMenuView = new SideMenuView($('#sideMenuView'), model);
	var sideMenuViewController = new SideMenuViewController(sideMenuView, model);

	displayView("homeView");
});

function displayView(id){
	$('.viewContainer').css('display', 'none');
	$('#' + id).css('display', 'block');
}
