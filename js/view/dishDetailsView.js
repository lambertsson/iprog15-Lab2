var DishDetailsView = function (container, model) {

    model.addObserver(this);
    this.backBtn = container.find("#goBack3");
    this.confirmDishBtn = container.find("#confirmDish");

    this.update = function (result) {
        $("#sideMenuView").css('display', 'block');
        this.dishDetailsView = container.find("#dishDetailsView");

        var totalCost = 0;

        if (result != undefined) {
            console.log(result);
            var photoUrl = "";

            if (result.ImageURL == null){
                photoUrl = result.HeroPhotoUrl;
            }
            else{
                photoUrl = result.ImageURL;
            }
            $("#dishDescription").html(result.Title + "<br><img src='" + photoUrl + "' height='300' width='300'><br><br><p>" + result.Instructions + "</p>");
        
            var string = "";
            var ingredients = result.Ingredients;

            console.log(ingredients);

            for (var i = 0; i < ingredients.length; i++) {
            string = string + (parseFloat(ingredients[i].Quantity).toFixed(2) + " " + ingredients[i].MetricUnit + " " + ingredients[i].Name + "<font style='position:absolute; right:12px;'>SEK " + parseFloat(ingredients[i].Quantity).toFixed(2) + "</font><br>");
            }

            $("#dishRecipe").html(string);
            totalCost = 0;
            for (var i = 0; i < ingredients.length; i++) {
                totalCost += ingredients[i].Quantity;
            }
            }
        $("#dishCost").html("<font style='float:right;'>SEK " + parseFloat(totalCost).toFixed(2) + "</font>");
    
}

    model.notifyObservers();
}