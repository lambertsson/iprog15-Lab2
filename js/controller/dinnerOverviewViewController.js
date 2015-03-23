var DinnerOverviewViewController = function (view, model) {

    view.backBtn.click(function () {
        displayView("selectDishView")
        model.notifyObservers()
    })

    view.printBtn.click(function () {
        model.notifyObservers()
        displayView("dinnerPreparationView")
    })
}