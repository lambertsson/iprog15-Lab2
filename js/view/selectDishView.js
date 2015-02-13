//Select dish view
var SelectDishView = function (container, model) {

    //this.numberOfGuests = container.find("#numberOfGuests");
    var selectDishView = container.find("#selectDishView");

    container.find("#dishDiv1").click(function () {
        displayView("dishDetailsView");
        model.update();
    })


    model.addObserver(this);

    this.update = function () {
        $("#sideMenuView").css('display', 'block')
        var dishes = model.getAllDishes().prevObject;
        for (var i = 0; i < dishes.length; i++) {
            container.find("#dishDiv" + (i + 1)).html("<div><img src='images/" + dishes[i].image + "'></div><div><font size=4>" + dishes[i].name + "</font></div><div><font size=1>" + "Lorem ipsum..." + "</font></div>");
        }
    }
}