var DishDetailsViewController = function (view, model) {


    view.backBtn.click(function () {
        displayView("selectDishView")
        selectedDishID = 0;
        model.update()

    })

    view.confirmDishBtn.click(function(){
    	console.log("försöker confirma dish", selectedDishID);
    	model.addDishToMenu(selectedDishID);
    	selectedDishID = 0;
    	model.update()    	
    })
}