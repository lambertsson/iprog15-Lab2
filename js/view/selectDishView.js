//Select dish view
var SelectDishView = function (container, model) {
    // Global variable
    selectedDishID = 1;

    //this.numberOfGuests = container.find("#numberOfGuests");
    this.container = container;
    this.selectDishView = container.find("#selectDishView");
    this.searchBtn = container.find("#search")

    model.addObserver(this);

    this.getSearchTerm = function () {
        return $("#searchBox").val().toLowerCase();
    }

    this.getSearchType = function () {
        return $('#typeOfFood').val();
    }

    this.setSearchResult = function (result) {
        for (var i = 1; i < 11; i++) {
            var obj = result.pop();
            if (obj != undefined) {
                container.find("#dishDiv" + (i)).html("<div><img src='images/" + obj.image + "'></div><div><font size=4>" + obj.name + "</font></div><div><font size=1>" + "Lorem ipsum..." + "</font></div>");
                $('#dishDiv' + (i)).data("id", obj.id);
            }
            else {
                container.find("#dishDiv" + (i)).html("");
                $('#dishDiv' + (i)).data("id", 0);
            }
        }
    }

    this.update = function () {
        $("#sideMenuView").css('display', 'block')
        var dishes = model.getAllDishes().prevObject;
        for (var i = 0; i < dishes.length; i++) {
            container.find("#dishDiv" + (i + 1)).html("<div><img src='images/" + dishes[i].image + "'></div><div><font size=4>" + dishes[i].name + "</font></div><div><font size=1>" + "Lorem ipsum..." + "</font></div>");
            $('#dishDiv' + (i + 1)).data("id", dishes[i].id);
            //console.log($('#dishDiv' + i).data('id'))
        }
    }
}