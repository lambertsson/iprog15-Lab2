var DinnerOverviewView = function (container, model) {

    var backBtn = container.find("#goBack");
    var printBtn = container.find("#print");

    backBtn.click(function () {
        displayView("selectDishView")
    })

    printBtn.click(function () {
        //displayView("selectDishView")
    })

    model.setNumberOfGuests(1);
    model.addDishToMenu(1);
    model.addDishToMenu(100);

    container.find("#numberOfPeople").html(model.getNumberOfGuests());
    container.find("#totalSum").html(model.getTotalMenuPrice());
    container.find("#appSum").html(model.getTotalMenuPrice('starter'));
    container.find("#mainSum").html(model.getTotalMenuPrice('main dish'));
    container.find("#desSum").html(model.getTotalMenuPrice('dessert'));
}
