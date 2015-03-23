var DishDetailsViewController = function (view, model) {

    view.backBtn.click(function () {
        displayView("selectDishView")
        selectedDishID = 0;
        model.notifyObservers()

    })

    view.confirmDishBtn.click(function(){
    	model.addDishToMenu(selectedDishID);
    	model.notifyObservers()    	
    })
}