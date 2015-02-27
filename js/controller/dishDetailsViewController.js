var DishDetailsViewController = function (view, model) {

    view.backBtn.click(function () {
        displayView("selectDishView")
        selectedDishID = 0;
        model.update()

    })

    view.confirmDishBtn.click(function(){
    	model.addDishToMenu(selectedDishID);
    	model.update()    	
    })
}