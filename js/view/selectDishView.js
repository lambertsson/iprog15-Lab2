//Select dish view
var SelectDishView = function (container, model) {

	//this.numberOfGuests = container.find("#numberOfGuests");
	var selectDishView = container.find("#selectDishView");
	var testar = container.find("#testar");

	var mydishes = model.getAllDishes().prevObject;

	for(var i = 0; i < mydishes.length; i++){
		console.log(mydishes[i]);
		$("#dishResults").after("<div class='food'><div class='food-img'><img src='images/"+mydishes[i].image+"'></div><div class='food-title'>"+mydishes[i].name+"</div><br>"+mydishes[i].description+"</div>");

	}

	console.log(mydishes);
}