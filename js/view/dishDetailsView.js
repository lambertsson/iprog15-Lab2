// JavaScript source code
//dishDetailsView

var DishDetailsView = function (container, model) {

    // When navigating use this template
    //backBtn.click(function () {
    //    model.update()
    //    displayView("selectDishView")
    //})


    model.addObserver(this);

    this.update = function () {
        this.dishDetailsView = container.find("#dishDetailsView");
    }
}