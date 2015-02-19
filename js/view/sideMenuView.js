var SideMenuView = function (container, model) {

    this.confirmBtn = container.find("#confirm");
    model.addObserver(this);

    this.update = function () { }
}