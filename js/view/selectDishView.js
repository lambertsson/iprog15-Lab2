//Select dish view
var SelectDishView = function (container, model) {

    //this.numberOfGuests = container.find("#numberOfGuests");
    var selectDishView = container.find("#selectDishView");
    var testar = container.find("#testar");
    var confirmBtn = container.find("#confirm");

    confirmBtn.click(function () {
        model.setNumberOfGuests($("#numberOfGuestsSelect").val());

        // Needed
        model.update()
        displayView("dinnerOverviewView")
    })

    //for(var i = 1; i < 11; i++){
    //    container.find("#dishDiv" + i).click(function () {
    //        model.update()
    //        displayView("dishDetailsView")
    //    })
    //}

    container.find("#dishDiv1").click(function () {
        model.update();
        displayView("dishDetailsView");
    })


    model.addObserver(this);

    this.update = function () {
        //var mydishes = model.getAllDishes().prevObject;
        //for (var i = 0; i < mydishes.length; i++) {
        //    if (mydishes[i].type == "main dish") {
        //        $("#dishResults").after("<div class='food' id='" + mydishes[i].name + "'><div class='food-img'><img src='images/" + mydishes[i].image + "'></div><div class='food-title'>" + mydishes[i].name + "</div><br><p class='food-descr'>" + mydishes[i].description + "</p></div>");
        //    }
        //}

        var dishes = model.getAllDishes().prevObject;
        for (var i = 0; i < dishes.length; i++) {
            container.find("#dishDiv" + (i + 1)).html("<div><img src='images/" + dishes[i].image + "'></div><div><font size=4>" + dishes[i].name + "</font></div><div><font size=1>" + "Lorem ipsum..." + "</font></div>");
        }
    }
}