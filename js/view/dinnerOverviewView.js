var DinnerOverviewView = function (container, model) {

    var backBtn = container.find("#goBack");
    var printBtn = container.find("#print");

    backBtn.click(function () {
        displayView("selectDishView")
    })

    printBtn.click(function () {
        //displayView("selectDishView")
    })

    container.find("#numberOfPeople").html(model.getNumberOfGuests());
}
