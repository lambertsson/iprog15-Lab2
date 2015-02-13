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

    model.addObserver(this);

    this.update = function () {
        var mydishes = model.getAllDishes().prevObject;

        for (var i = 0; i < mydishes.length; i++) {
            if (mydishes[i].type == "main dish") {
                $("#dishResults").after("<div class='food' id='" + mydishes[i].name + "'><div class='food-img'><img src='images/" + mydishes[i].image + "'></div><div class='food-title'>" + mydishes[i].name + "</div><br><p class='food-descr'>" + mydishes[i].description + "</p></div>");
            }
        }
    }
}