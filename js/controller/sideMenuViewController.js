var SideMenuViewController = function (view, model) {

    view.confirmBtn.click(function () {
        model.setNumberOfGuests($("#numberOfGuestsSelect").val());

        // Needed
        model.update()
        displayView("dinnerOverviewView")
    })

    //$("#numberOfGuestsSelect").change(function () {
    //    model.update
    //})

    //view.selectList.click(function () {
    //    model.update()
    //})
}