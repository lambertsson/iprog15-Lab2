var SideMenuView = function (container, model) {

    this.confirmBtn = container.find("#confirm");
    this.selectList = container.find("#numberOfGuestsSelect");
    model.addObserver(this);

    this.update = function (result) {

        var menu = model.getFullMenu();
        for (i in menu) {
            if (menu[i].Category == 'Appetizers') {
                container.find("#sideMenuName1").html(menu[i].Title.substring(0,13)+"...");
                container.find("#sideMenuCost1").html(model.getTotalMenuPrice(menu[i].Category));
            }
            if (menu[i].Category == 'Main Dish') {
                container.find("#sideMenuName2").html(menu[i].Title.substring(0,13)+"...");
                container.find("#sideMenuCost2").html(model.getTotalMenuPrice(menu[i].Category));
            }
            if (menu[i].Category == 'Desserts') {
                container.find("#sideMenuName3").html(menu[i].Title.substring(0,13+"..."));
                container.find("#sideMenuCost3").html(model.getTotalMenuPrice(menu[i].Category));
            }
        }
        container.find("#sideMenuTotalCost").html(model.getTotalMenuPrice());
    }

}