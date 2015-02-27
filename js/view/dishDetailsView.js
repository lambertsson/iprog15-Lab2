var DishDetailsView = function (container, model) {

    model.addObserver(this);
    this.backBtn = container.find("#goBack3");
    this.confirmDishBtn = container.find("#confirmDish");

    this.update = function () {
        $("#sideMenuView").css('display', 'block')
        this.dishDetailsView = container.find("#dishDetailsView");

        var totalCost = 0;

        if (selectedDishID != 0) {
            $("#dishDescription").html(model.getDish(selectedDishID).name + "<br><img src='images/" + model.getDish(selectedDishID).image + "'><br><br><p>" + model.getDish(selectedDishID).description + "</p>");

            var dishIngredients = model.getDish(selectedDishID).ingredients;

            var string = "";
            for (var i = 0; i < dishIngredients.length; i++) {
                string = string + (dishIngredients[i].quantity + " " + dishIngredients[i].unit + " " + dishIngredients[i].name + "<font style='position:absolute; right:12px;'>SEK " + dishIngredients[i].price + "</font><br>");
            }

            $("#dishRecipe").html(string);
            totalCost = 0;
            for (var i = 0; i < dishIngredients.length; i++) {
                totalCost += dishIngredients[i].price;
            }
        }
        $("#dishCost").html("<font style='float:right;'>SEK " + totalCost + "</font>");
    }

    model.update()
}