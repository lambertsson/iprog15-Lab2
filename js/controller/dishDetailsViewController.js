var DishDetailsViewController = function (view, model) {


    view.backBtn.click(function () {
        displayView("selectDishView")
        selectedDishID = 0;
        model.update()

    })

    view.confirmDishBtn.click(function(){
    	console.log("id av confirm dish", selectedDishID);
    	model.addDishToMenu(selectedDishID);
    	console.log("getfullmenu på detta id ", model.getFullMenu()); //loggar undefined
    	model.update()    	
    })
}