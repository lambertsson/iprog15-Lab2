var HomeView = function (container, model) {

    var createBtn = container.find("#create");

    createBtn.click(function () {
        // Remove the image set on background when navigating away from home view.
        $('.container').css('background-image', 'none');

        // Update model and then only display selectDishView.
        model.update()
        displayView("selectDishView")
    })
}