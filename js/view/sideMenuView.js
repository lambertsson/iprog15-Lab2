var SideMenuView = function (container, model) {

    var confirmBtn = container.find("#confirm");

    confirmBtn.click(function () {
        model.setNumberOfGuests($("#numberOfGuestsSelect").val());

        // Needed
        model.update()
        displayView("dinnerOverviewView")
    })

    model.addObserver(this);

    this.update = function () { }
}