//Select dish view
var SelectDishView = function (container, model) {
    // Global variable
    selectedDishID = 1;

    //this.numberOfGuests = container.find("#numberOfGuests");
    this.container = container;
    this.selectDishView = container.find("#selectDishView");

    //for (var i = 1; i <= 10; i++) {
        //console.log(i)
        //console.log($('#dishDiv' + i).data('id'));
        //container.find("#dishDiv" + i).click(function () {
            //if ($('#dishDiv' + i).data('id') > 0) {
                //selectedDishID = $('#dishDiv' + i).data("id");
                //displayView("dishDetailsView");
                //model.update();
                //console.log("clicked the button " + $('#dishDiv' + 4).data('id'));
            //}
        //})
    //}



    model.addObserver(this);

    this.update = function () {
        $("#sideMenuView").css('display', 'block')
        var dishes = model.getAllDishes().prevObject;
        for (var i = 0; i < dishes.length; i++) {
            container.find("#dishDiv" + (i + 1)).html("<div><img src='images/" + dishes[i].image + "'></div><div><font size=4>" + dishes[i].name + "</font></div><div><font size=1>" + "Lorem ipsum..." + "</font></div>");
            $('#dishDiv' + (i + 1)).data("id", dishes[i].id);
            //console.log($('#dishDiv' + i).data('id'))
        }
        //selectedDishID = 0;
    }
}