var SideMenuViewController = function (view, model) {

    view.confirmBtn.click(function () {
        model.setNumberOfGuests($("#numberOfGuestsSelect").val());

        model.update()
        displayView("dinnerOverviewView")
    })

    $("#numberOfGuestsSelect").change(function () {
        model.setNumberOfGuests($("#numberOfGuestsSelect").val());
        model.update();
    })
}