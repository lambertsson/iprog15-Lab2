var DinnerOverviewView = function (container, model) {

    var backBtn = container.find("#goBack");
    var printBtn = container.find("#print");

    backBtn.click(function () {
        displayView("selectDishView")
        model.update()
    })

    printBtn.click(function () {
        model.update()
        displayView("dinnerPreparationView")
    })

    model.addObserver(this);

    model.addDishToMenu(1);
    model.addDishToMenu(100);
    model.addDishToMenu(200);

    this.update = function () {
        var item = model.getFullMenu('starter');
        if (item != undefined) {
            container.find("#appPic").html("<img src='images/" + item.image + "'>");
            container.find("#appTitle").html(item.name);
        }
        item = model.getFullMenu('main dish');
        if (item != undefined) {
            container.find("#mainPic").html("<img src='images/" + item.image + "'>");
            container.find("#mainTitle").html(item.name);
        }
        item = model.getFullMenu('dessert');
        if (item != undefined) {
            container.find("#desPic").html("<img src='images/" + item.image + "'>");
            container.find("#desTitle").html(item.name);
        }

        container.find("#numberOfPeople").html(model.getNumberOfGuests());
        container.find("#totalSum").html(model.getTotalMenuPrice());
        container.find("#appSum").html(model.getTotalMenuPrice('starter'));
        container.find("#mainSum").html(model.getTotalMenuPrice('main dish'));
        container.find("#desSum").html(model.getTotalMenuPrice('dessert'));

    }
}
