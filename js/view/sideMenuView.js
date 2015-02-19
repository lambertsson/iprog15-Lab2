var SideMenuView = function (container, model) {

    this.confirmBtn = container.find("#confirm");
    model.addObserver(this);

    this.update = function () { 

    	var menu = model.getFullMenu().prevObject;

    	if(menu != undefined){
    	for(var i = 0; i<menu.length; i++){
    		container.find("#sideMenuName"+(i+1)).html(menu[i].name);
    		container.find("#sideMenuCost"+(i+1)).html(menu[i].price*model.getNumberOfGuests());
    	}
    }

    }
}