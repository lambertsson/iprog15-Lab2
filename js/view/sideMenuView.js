var SideMenuView = function (container, model) {

    this.confirmBtn = container.find("#confirm");
    this.selectList = container.find("#numberOfGuestsSelect");
    model.addObserver(this);

    this.update = function (result) {

        var menu = model.getFullMenu();

        for (i in menu) {
            if (menu[i].type == 'starter') {
                container.find("#sideMenuName1").html(menu[i].name);
                container.find("#sideMenuCost1").html(model.getTotalMenuPrice(menu[i].type));
            }
            if (menu[i].type == 'main dish') {
                container.find("#sideMenuName2").html(menu[i].name);
                container.find("#sideMenuCost2").html(model.getTotalMenuPrice(menu[i].type));
            }
            if (menu[i].type == 'dessert') {
                container.find("#sideMenuName3").html(menu[i].name);
                container.find("#sideMenuCost3").html(model.getTotalMenuPrice(menu[i].type));
            }
        }
        container.find("#sideMenuTotalCost").html(model.getTotalMenuPrice());
    }

}