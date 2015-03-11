var DinnerPreparationView = function (container, model) {

    this.backBtn = container.find("#goBack2");

    model.addObserver(this);

    this.update = function (result) {
        container.find("#numberOfPeople").html(model.getNumberOfGuests());

        var menu = model.getFullMenu();
        for (item in menu) {
            if (menu[item].type == 'starter') {
                container.find("#appPicP").html("<img src='images/" + menu[item].image + "'>");
                container.find("#appTitleP").html(menu[item].name);
                container.find("#appDescP").html("Lorem ipsum");
                container.find("#prep1").html("Preparation");
                container.find("#appPrepP").html(menu[item].description);
            }
            if (menu[item].type == 'main dish') {
                container.find("#mainPicP").html("<img src='images/" + menu[item].image + "'>");
                container.find("#mainTitleP").html(menu[item].name);
                container.find("#mainDescP").html("Lorem ipsum");
                container.find("#prep2").html("Preparation");
                container.find("#mainPrepP").html(menu[item].description);
            }
            if (menu[item].type == 'dessert') {
                container.find("#desPicP").html("<img src='images/" + menu[item].image + "'>");
                container.find("#desTitleP").html(menu[item].name);
                container.find("#desDescP").html("Lorem ipsum");
                container.find("#prep3").html("Preparation");
                container.find("#desPrepP").html(menu[item].description);
            }
        }
    }
}