var HomeViewController = function (view, model) {

    view.createBtn.click(function () {
        // Remove the image set on background when navigating away from home view.
        view.cont.css('background-image', 'none');
        view.headbar.css('background-color', '#EEEEEE');

        //model.getRecipeJson("lasagna","main dish");

        // Update model and then only display selectDishView.
        displayView("selectDishView")
        model.update()
    });
}