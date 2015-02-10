var HomeView = function (container, model) {

    var createBtn = container.find("#create");

    createBtn.click(function () {
        displayView("selectDishView")
    })
}