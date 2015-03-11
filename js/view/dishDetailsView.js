var DishDetailsView = function (container, model) {

    model.addObserver(this);
    this.backBtn = container.find("#goBack3");
    this.confirmDishBtn = container.find("#confirmDish");

    this.update = function (result) {
        $("#sideMenuView").css('display', 'block')
        this.dishDetailsView = container.find("#dishDetailsView");

        var totalCost = 0;

        var mycallback = function (returneddata, view) {
            //display search result in view
            console.log(returneddata);
            //spinner.stop(target);

            $("#dishDescription").html(result.Title + "<br><img src='" + result.ImageURL + "'><br><br><p>" + "INSERT DESC HERE" + "</p>");

            view.spin("stop");
        }

        //if (result != undefined) {
          //  $("#dishDescription").html(result.Title + "<br><img src='" + result.ImageURL + "'><br><br><p>" + "INSERT DESC HERE" + "</p>");

            //var dishIngredients = model.getDish(selectedDishID).ingredients;

            //var string = "";
            //for (var i = 0; i < dishIngredients.length; i++) {
            //    string = string + (dishIngredients[i].quantity + " " + dishIngredients[i].unit + " " + dishIngredients[i].name + "<font style='position:absolute; right:12px;'>SEK " + dishIngredients[i].price + "</font><br>");
            //}

            //$("#dishRecipe").html(string);
            //totalCost = 0;
            //for (var i = 0; i < dishIngredients.length; i++) {
            //    totalCost += dishIngredients[i].price;
            //}
       // }
       // else {
         //   model.getDish(selectedDishID, model)
        //}
        model.getDish(selectedDishID, mycallback, this)
        $("#dishCost").html("<font style='float:right;'>SEK " + totalCost + "</font>");
    }

    model.update()
}