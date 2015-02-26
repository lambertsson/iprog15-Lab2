var SideMenuView = function (container, model) {

    this.confirmBtn = container.find("#confirm");
    model.addObserver(this);

    this.update = function () { 

    	var menu = model.getFullMenu();

    	if(menu != undefined){
    		console.log("Menu is defined");
    	for(var i = 0; i<menu.length; i++){
    		$(("#sideMenuName"+(i+1))).html(menu[i].name);
    		$(("#sideMenuCost"+(i+1))).html(menu[i].price*model.getNumberOfGuests());
    	}
    }

    }
}