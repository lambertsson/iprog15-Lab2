var SelectDishViewController = function (view, model) {

    view.searchBtn.click(function () {
        var term = view.getSearchTerm();
        var type = view.getSearchType();
        model.getRecipeJson(term,type);
        var result = [];
        var dishes = model.getAllDishes().prevObject;
        for (i in dishes) {
            if (dishes[i].name != undefined) {
                if (dishes[i].name.toLowerCase().search(term) >= 0) {
                    if (dishes[i].type == type) {
                        result.push(dishes[i])
                    }
                }
            }
        }
        view.setSearchResult(result)
    })

    view.container.find("#dishDiv1").click(function () {
        if ($('#dishDiv1').data('id') > 0) {
            selectedDishID = $('#dishDiv1').data("id");
            displayView("dishDetailsView");
            model.update();
        }
    })
    view.container.find("#dishDiv2").click(function () {
        if ($('#dishDiv2').data('id') > 0) {
            selectedDishID = $('#dishDiv2').data("id");
            displayView("dishDetailsView");
            model.update();
        }
    })
    view.container.find("#dishDiv3").click(function () {
        if ($('#dishDiv3').data('id') > 0) {
            selectedDishID = $('#dishDiv3').data("id");
            displayView("dishDetailsView");
            model.update();
        }
    })
    view.container.find("#dishDiv4").click(function () {
        if ($('#dishDiv4').data('id') > 0) {
            selectedDishID = $('#dishDiv4').data("id");
            displayView("dishDetailsView");
            model.update();
        }
    })
    view.container.find("#dishDiv5").click(function () {
        if ($('#dishDiv5').data('id') > 0) {
            selectedDishID = $('#dishDiv5').data("id");
            displayView("dishDetailsView");
            model.update();
        }
    })
    view.container.find("#dishDiv6").click(function () {
        if ($('#dishDiv6').data('id') > 0) {
            selectedDishID = $('#dishDiv6').data("id");
            displayView("dishDetailsView");
            model.update();
        }
    })
    view.container.find("#dishDiv7").click(function () {
        if ($('#dishDiv7').data('id') > 0) {
            selectedDishID = $('#dishDiv7').data("id");
            displayView("dishDetailsView");
            model.update();
        }
    })
    view.container.find("#dishDiv8").click(function () {
        if ($('#dishDiv8').data('id') > 0) {
            selectedDishID = $('#dishDiv8').data("id");
            displayView("dishDetailsView");
            model.update();
        }
    })
    view.container.find("#dishDiv9").click(function () {
        if ($('#dishDiv9').data('id') > 0) {
            selectedDishID = $('#dishDiv9').data("id");
            displayView("dishDetailsView");
            model.update();
        }
    })
    view.container.find("#dishDiv10").click(function () {
        if ($('#dishDiv10').data('id') > 0) {
            selectedDishID = $('#dishDiv10').data("id");
            displayView("dishDetailsView");
            model.update();
        }
    })
}