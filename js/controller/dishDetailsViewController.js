var DishDetailsViewController = function (view, model) {


    view.backBtn.click(function () {
        displayView("selectDishView")
        model.update()
    })

    view.confirmDishBtn.click(function(){
    	model.addDishToMenu(selectedDishID);
    	model.update()    	
    })
}