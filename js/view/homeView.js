var HomeView = function (container, model) {

    var createBtn = container.find("#create");

    createBtn.click(function () {
        model.update()
        displayView("selectDishView")
    })

    model.addObserver(this);
}