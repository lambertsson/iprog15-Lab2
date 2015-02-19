var DishDetailsView = function (container, model) {

    model.addObserver(this);
    this.backBtn = container.find("#goBack3");

    model.addDishToMenu(100);

    this.update = function () {
        $("#sideMenuView").css('display', 'block')
        this.dishDetailsView = container.find("#dishDetailsView");


        //var selectedDishID = model.getSelectedDishID();
        var selectedDishID = 100;
        var totalCost = 0;
        var mydishes = model.getAllDishes().prevObject;

        for (var i = 0; i < mydishes.length; i++) {
            //console.log("dishes");
            //console.log(mydishes[i]);
            if (mydishes[i].id == selectedDishID) {
                console.log("meat balls mm");
                $("#dishDescription").html(mydishes[i].name + "<br><img src='images/" + mydishes[i].image + "'><br><br><p>" + mydishes[i].description + "</p>");

                var dishIngredients = model.getAllIngredients(mydishes[i].type);

                var string = "";
                for (var i = 0; i < dishIngredients.length; i++) {
                    console.log(dishIngredients[i]);
                    string = string + (dishIngredients[i].quantity + " " + dishIngredients[i].unit + " " + dishIngredients[i].name + "<font style='position:absolute; right:12px;'>SEK " + dishIngredients[i].price + "</font><br>");
                }
                $("#dishRecipe").html(string);
                totalCost = 0;
                for (var i = 0; i < dishIngredients.length; i++) {
                    console.log(dishIngredients[i].price);
                    totalCost += dishIngredients[i].price;
                }
            }
            //mydishes[i].name+"<img src='images/"+mydishes[i].image+"><br><br><p>"+mydishes[i].description+"</p>"
            $("#dishCost").html("<font style='float:right;'>SEK " + totalCost + "</font>");
        }
    }
    this.update();
}