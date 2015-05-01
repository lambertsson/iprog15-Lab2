var SelectDishViewController = function (view, model) {

    view.searchBtn.click(function () {

        view.spin("spin");

        var term = view.getSearchTerm();
        var type = view.getSearchType();

        //prepare search result view update callback
        var done = false;
        var timerStop = function () {
            if (done) {
                alert("Took too long to receive results. Service might be busy. Try again later.")
                view.spin("stop");
                model.notifyObservers();
            }
        }
        var mycallback = function (returneddata,view) {
            //display search result in view
            console.log(returneddata);
            //spinner.stop(target);
            setTimeout(timerStop, 5000);
            if (returneddata == 'error' || returneddata == 'timeout' || returneddata == 'notmodified' || returneddata == 'parsererror') {
                done = true;
                view.container.find("#spinner").html = "Could not receive results. Please check your internet connection and try again."
                view.spin("stop");
            }
            else {
                view.container.find("#spinner").html = "";
                view.setSearchResult(returneddata);
                view.spin("stop");
            }
        }

        model.getRecipeJson(term,type,mycallback,view);
    })

        

    view.container.find("#dishDiv1").click(function () {
        if ($('#dishDiv1').data('id') > 0) {
            selectedDishID = $('#dishDiv1').data("id");
            
            //prepare search result view update callback
        var mycallback2 = function (returneddata,view) {
            //update views with result
            model.notifyObservers(returneddata);
            displayView("dishDetailsView");            
        }

        model.getDish(selectedDishID, mycallback2, view);
        
        }
    })
    view.container.find("#dishDiv2").click(function () {
        if ($('#dishDiv2').data('id') > 0) {
            selectedDishID = $('#dishDiv2').data("id");

            //prepare search result view update callback
        var mycallback2 = function (returneddata,view) {
            //update views with result
            model.notifyObservers(returneddata);
            displayView("dishDetailsView");
            
        }

        model.getDish(selectedDishID, mycallback2, view);
        }
    })
    view.container.find("#dishDiv3").click(function () {
        if ($('#dishDiv3').data('id') > 0) {
            selectedDishID = $('#dishDiv3').data("id");
            
            //prepare search result view update callback
        var mycallback2 = function (returneddata,view) {
            //update views with result
            model.notifyObservers(returneddata);
            displayView("dishDetailsView");
            
        }

        model.getDish(selectedDishID, mycallback2, view);
        }
    })
    view.container.find("#dishDiv4").click(function () {
        if ($('#dishDiv4').data('id') > 0) {
            selectedDishID = $('#dishDiv4').data("id");
           //prepare search result view update callback
        var mycallback2 = function (returneddata,view) {
            //update views with result
            model.notifyObservers(returneddata);
            displayView("dishDetailsView");
            
        }

        model.getDish(selectedDishID, mycallback2, view);
        }
    })
    view.container.find("#dishDiv5").click(function () {
        if ($('#dishDiv5').data('id') > 0) {
            selectedDishID = $('#dishDiv5').data("id");
            //prepare search result view update callback
        var mycallback2 = function (returneddata,view) {
            //update views with result
            model.notifyObservers(returneddata);
            displayView("dishDetailsView");
            
        }

        model.getDish(selectedDishID, mycallback2, view);
        }
    })
    view.container.find("#dishDiv6").click(function () {
        if ($('#dishDiv6').data('id') > 0) {
            selectedDishID = $('#dishDiv6').data("id");
            //prepare search result view update callback
        var mycallback2 = function (returneddata,view) {
            //update views with result
            model.notifyObservers(returneddata);
            displayView("dishDetailsView");
            
        }

        model.getDish(selectedDishID, mycallback2, view);
        }
    })
    view.container.find("#dishDiv7").click(function () {
        if ($('#dishDiv7').data('id') > 0) {
            selectedDishID = $('#dishDiv7').data("id");
            //prepare search result view update callback
        var mycallback2 = function (returneddata,view) {
            //update views with result
            model.notifyObservers(returneddata);
            displayView("dishDetailsView");
            
        }

        model.getDish(selectedDishID, mycallback2, view);
        }
    })
    view.container.find("#dishDiv8").click(function () {
        if ($('#dishDiv8').data('id') > 0) {
            selectedDishID = $('#dishDiv8').data("id");
            //prepare search result view update callback
        var mycallback2 = function (returneddata,view) {
            //update views with result
            model.notifyObservers(returneddata);
            displayView("dishDetailsView");
            
        }

        model.getDish(selectedDishID, mycallback2, view);
        }
    })
    view.container.find("#dishDiv9").click(function () {
        if ($('#dishDiv9').data('id') > 0) {
            selectedDishID = $('#dishDiv9').data("id");
            //prepare search result view update callback
        var mycallback2 = function (returneddata,view) {
            //update views with result
            model.notifyObservers(returneddata);
            displayView("dishDetailsView");
            
        }

        model.getDish(selectedDishID, mycallback2, view);
        }
    })
    view.container.find("#dishDiv10").click(function () {
        if ($('#dishDiv10').data('id') > 0) {
            selectedDishID = $('#dishDiv10').data("id");
            //prepare search result view update callback
        var mycallback2 = function (returneddata,view) {
            //update views with result
            model.notifyObservers(returneddata);
            displayView("dishDetailsView");
            
        }

        model.getDish(selectedDishID, mycallback2, view);
        }
    })
}