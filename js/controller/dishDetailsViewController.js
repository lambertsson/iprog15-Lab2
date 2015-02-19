var DishDetailsViewController = function (view, model) {


    view.backBtn.click(function () {
        displayView("selectDishView")
        model.update()
    })

    view.confirmDishBtn.click(function(){
    	console.log(selectedDishID);
    	model.addDishToMenu(selectedDishID);
    	model.update()    	
    })
}