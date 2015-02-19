var DinnerPreparationViewController = function (view, model) {

    view.backBtn.click(function () {
        displayView("selectDishView")
        model.update()
    })
}