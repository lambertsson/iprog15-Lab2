//Select dish view
var SelectDishView = function (container, model) {
    // Global variable
    selectedDishID = 1;

    //this.numberOfGuests = container.find("#numberOfGuests");
    this.container = container;
    this.selectDishView = container.find("#selectDishView");
    this.searchBtn = container.find("#search")
    var target = container.find("#selectDishView");

    model.addObserver(this);

    var opts = {
                  lines: 13, // The number of lines to draw
                  length: 5, // The length of each line
                  width: 10, // The line thickness
                  radius: 50, // The radius of the inner circle
                  corners: 1, // Corner roundness (0..1)
                  rotate: 0, // The rotation offset
                  direction: 1, // 1: clockwise, -1: counterclockwise
                  color: '#000', // #rgb or #rrggbb or array of colors
                  speed: 0.9, // Rounds per second
                  trail: 67, // Afterglow percentage
                  shadow: false, // Whether to render a shadow
                  hwaccel: false, // Whether to use hardware acceleration
                  className: 'spinner', // The CSS class to assign to the spinner
                  zIndex: 2e9, // The z-index (defaults to 2000000000)
                  top: '50%', // Top position relative to parent
                  left: '50%' // Left position relative to parent
                };

    var spinner = new Spinner(opts).spin(target);    
    
    this.spin = function(spin){
        console.log(spinner);
        var spin = spin;
        if(spin == "spin"){
            console.log("spinner");
            //spinner.spin(target);
            container.find("#spinner").html(spinner.el);
        }
        else if(spin == "stop"){
            spinner.stop(container.find("#spinner"));
        }
    }

    this.getSearchTerm = function () {
        return $("#searchBox").val().toLowerCase();
    }

    this.getSearchType = function () {
        return $('#typeOfFood').val();
    }

    this.setSearchResult = function (result) {

        console.log(result);
        for (var i = 1; i < 11; i++) {
            var obj = result.pop();
            if (obj != undefined) {
                container.find("#dishDiv" + (i)).html("<div><img src='" + obj.ImageURL120 + "'></div><div><font size=4>" + obj.Title + "</font></div><div><font size=1>" + obj.Category + "</font></div>");
                $('#dishDiv' + (i)).data("id", obj.RecipeID);
            }
            else {
                container.find("#dishDiv" + (i)).html("");
                $('#dishDiv' + (i)).data("id", 0);
            }
        }
    }

    this.update = function (result) {
        $("#sideMenuView").css('display', 'block')
        var dishes = model.getAllDishes().prevObject;
        for (var i = 0; i < dishes.length; i++) {
            container.find("#dishDiv" + (i + 1)).html("<div><img src='images/" + dishes[i].image + "'></div><div><font size=4>" + dishes[i].name + "</font></div><div><font size=1>" + "Lorem ipsum..." + "</font></div>");
            $('#dishDiv' + (i + 1)).data("id", dishes[i].id);
            //console.log($('#dishDiv' + i).data('id'))
        }
    }
}