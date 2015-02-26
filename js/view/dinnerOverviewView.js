var DinnerOverviewView = function (container, model) {

    this.backBtn = container.find("#goBack");
    this.printBtn = container.find("#print");

    model.addObserver(this);

    //model.addDishToMenu(1);
    //model.addDishToMenu(100);
    //model.addDishToMenu(200);

    this.update = function () {
        var item = model.getSelectedDish('starter');
        if (item != undefined) {
            container.find("#appPic").html("<img src='images/" + item.image + "'>");
            container.find("#appTitle").html(item.name);
        }
        item = model.getSelectedDish('main dish');
        if (item != undefined) {
            container.find("#mainPic").html("<img src='images/" + item.image + "'>");
            container.find("#mainTitle").html(item.name);
        }
        item = model.getSelectedDish('dessert');
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
