var DinnerOverviewViewController = function (view, model) {

    view.backBtn.click(function () {
        displayView("selectDishView")
        model.update()
    })

    view.printBtn.click(function () {
        model.update()
        displayView("dinnerPreparationView")
    })
}