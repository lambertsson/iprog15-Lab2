var HomeViewController = function (view, model) {

    view.createBtn.click(function () {
        // Remove the image set on background when navigating away from home view.
        $('.container').css('background-image', 'none');
        $('.header-bar').css('background-color', '#EEEEEE');

        // Update model and then only display selectDishView.
        displayView("selectDishView")
        model.update()
    })
}