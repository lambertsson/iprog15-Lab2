var DinnerPreparationView = function (container, model) {

    var backBtn = container.find("#goBack2");

    backBtn.click(function () {
        displayView("selectDishView")
    })

    //model.setNumberOfGuests(1);
    container.find("#numberOfPeople").html(model.getNumberOfGuests());

    model.addDishToMenu(1);
    model.addDishToMenu(100);

    var item = model.getFullMenu('starter');
    if (item != undefined) {
        container.find("#appPicP").html("<img src='images/" + item.image + "'>");
        container.find("#appTitleP").html(item.name);
        container.find("#appDescP").html("Lorem ipsum");
        container.find("#prep1").html("Preparation");
        container.find("#appPrepP").html(item.description);
    }
    item = model.getFullMenu('main dish');
    if (item != undefined) {
        container.find("#mainPicP").html("<img src='images/" + item.image + "'>");
        container.find("#mainTitleP").html(item.name);
        container.find("#mainDescP").html("Lorem ipsum");
        container.find("#prep2").html("Preparation");
        container.find("#mainPrepP").html(item.description);
    }
    item = model.getFullMenu('dessert');
    if (item != undefined) {
        container.find("#desPicP").html("<img src='images/" + item.image + "'>");
        container.find("#desTitleP").html(item.name);
        container.find("#desDescP").html("Lorem ipsum");
        container.find("#prep3").html("Preparation");
        container.find("#desPrepP").html(item.description);
    }
}