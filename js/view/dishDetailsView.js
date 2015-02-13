// JavaScript source code
//dishDetailsView

var DishDetailsView = function (container, model) {

    // When navigating use this template
    //backBtn.click(function () {
    //    model.update()
    //    displayView("selectDishView")
    //})


    model.addObserver(this);

    this.update = function () {
        this.dishDetailsView = container.find("#dishDetailsView");


       	var mydishes = model.getAllDishes().prevObject;

	    for (var i = 0; i < mydishes.length; i++) {
	    	console.log("dishes");
	        console.log(mydishes[i]);
	        if(mydishes[i].name == "Meat balls"){
	        console.log("meat balls mm");
		
		$("#dishDescription").after("<div><p>"+mydishes[i].title+"</p><img src='images/"+mydishes[i].image+"><br><br><p>"+mydishes[i].description+"</p></div>");
		}


	    }
    }
}