// JavaScript source code
//dishDetailsView

var DishDetailsView = function (container, model) {

    // When navigating use this template
    //backBtn.click(function () {
    //    model.update()
    //    displayView("selectDishView")
    //})


    model.addObserver(this);
    this.backToSelectBtn = container.find("#backToSelectBtn");

backToSelectBtn.click(function () {
    		model.update()
    		displayView("selectDishView")
    	})

model.addDishToMenu(1);

    this.update = function () {
        this.dishDetailsView = container.find("#dishDetailsView");
        

        //var selectedDishID = model.getSelectedDishID();
        var selectedDishID = 1;

        var totalCost = 0;
   

       	var mydishes = model.getAllDishes().prevObject;

	    for (var i = 0; i < mydishes.length; i++) {
	    	//console.log("dishes");
	        //console.log(mydishes[i]);
	        if(mydishes[i].id == selectedDishID){
	        	console.log("meat balls mm");
				$("#dishDescription").html(mydishes[i].name+"<br><img src='images/"+mydishes[i].image+"'><br><br><p>"+mydishes[i].description+"</p>");
				
				var dishIngredients = model.getAllIngredients(mydishes[i].type);

				/*var ingredientslist = mydishes[i].ingredients;
				for (var i=0; i<ingredientslist.length; i++){
					console.log(ingredientslist[i]);
				$("#dishRecipe").html(ingredientslist[i].quantity+" "+ingredientslist[i].unit+" "+ingredientslist[i].name+"<font style='position:absolute; right:12px;'>SEK "+ingredientslist[i].price+"</font><br>");
				*/
				totalCost = 0;
				for(var i = 0; i < dishIngredients.length; i++){
					totalCost += dishIngredients[i].price;
				}
			}
				//mydishes[i].name+"<img src='images/"+mydishes[i].image+"><br><br><p>"+mydishes[i].description+"</p>"
				$("#dishCost").html("<font style='float:right;'>SEK "+totalCost+"</font>");
							}
						}
				    
				
				
				    this.update();
				}